import { useState, useMemo, useEffect } from 'react';
import { PLACES } from './data';
import { useAppStore } from './store';
import { PlaceCard } from './components/PlaceCard';
import { PlaceModal } from './components/PlaceModal';
import { FiltersPanel } from './components/FiltersPanel';
import { CouponsTab } from './components/CouponsTab';
import { IdeasTab } from './components/IdeasTab';
import { LocationSelectorModal } from './components/LocationSelectorModal';
import { Place } from './types';
import { getPhotosCache, getPlaceSlug, loadGooglePlacePhoto } from './placesPhotoService';
import { 
  getHaversineDistance, 
  SIGHT_COORDINATES, 
  PLACE_TRANSLATIONS, 
  UI_TRANSLATIONS,
  Language 
} from './translationsAndCoords';
import { loadRouteMatrix } from './routesService';
import { Map, Ticket, Lightbulb, Filter, Search, MapPin, Globe, RefreshCw } from 'lucide-react';

export default function App() {
  const { 
    state, 
    togglePlace, 
    setNote, 
    setLanguage, 
    setBaseLocation,
    setHasChosenLocation 
  } = useAppStore();

  const [photosCache, setPhotosCacheState] = useState(() => getPhotosCache());
  const [routesCache, setRoutesCache] = useState<Record<string, any>>({});
  const [routesLoading, setRoutesLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'catalog' | 'coupons' | 'ideas'>('catalog');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  // Custom Location Modal open trigger
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Filters state
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    distance: 'all',
    type: 'all',
    status: 'all',
    couponType: 'all',
    badWeather: false,
    teens: false
  });
  const [sort, setSort] = useState('distance');

  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  // Auto load Google Places Photos on start for items that are not cached yet
  useEffect(() => {
    const toLoad = PLACES.filter(p => {
      if (p.name.toLowerCase().includes("wahl") || p.name.toLowerCase().includes("выбор")) {
        return false;
      }
      const slug = getPlaceSlug(p);
      const cached = photosCache[slug];
      
      // Load if we don't have a cache entry OR if local storage has stock icons (not manual/Google verified)
      const needsLoad = !cached || (cached.photoSource !== 'Google Places' && cached.photoSource !== 'manual');
      return needsLoad;
    });

    async function loadAllPhotos() {
      // Process sequential but polite requests to avoid hitting rate limits too fast
      for (const place of toLoad) {
        if (place.name.toLowerCase().includes("wahl") || place.name.toLowerCase().includes("выбор")) {
          continue;
        }
        const res = await loadGooglePlacePhoto(place);
        if (res) {
          setPhotosCacheState(getPhotosCache());
        }
      }
    }

    if (toLoad.length > 0) {
      loadAllPhotos();
    }
  }, []);

  // Load Route Matrix when base location changes
  useEffect(() => {
    async function loadRoutes() {
      setRoutesLoading(true);
      const placesWithCoords = PLACES.map(p => ({
        id: p.id,
        name: p.name,
        lat: SIGHT_COORDINATES[p.id]?.lat || 0,
        lng: SIGHT_COORDINATES[p.id]?.lng || 0
      })).filter(p => p.lat !== 0 && p.lng !== 0);

      const routes = await loadRouteMatrix(state.baseLocation, placesWithCoords);
      setRoutesCache(routes);
      setRoutesLoading(false);
    }
    loadRoutes();
  }, [state.baseLocation]);

  // Derive dynamic list of sights with coordinates, travel times, and translations
  const placesWithCoordsAndTranslations = useMemo(() => {
    return PLACES.map(p => {
      const coords = SIGHT_COORDINATES[p.id];
      let distanceKm = p.distanceKm;
      let travelTimeMins = p.travelTimeMins;
      let routeSource = "estimated" as "google_routes" | "estimated";

      // 1. Try Google Routes API Matrix
      const route = routesCache[p.id];
      if (route) {
        distanceKm = route.distanceKm;
        travelTimeMins = route.durationMins;
        routeSource = "google_routes";
      } else if (coords) {
        // Fallback: Haversine distance
        distanceKm = getHaversineDistance(
          state.baseLocation.lat,
          state.baseLocation.lng,
          coords.lat,
          coords.lng
        );

        // Approximate driving travel times based on computed distance
        if (distanceKm === 0) {
          travelTimeMins = 0;
        } else if (distanceKm < 15) {
          travelTimeMins = Math.round(distanceKm * 2.2) + 5;
        } else if (distanceKm < 60) {
          travelTimeMins = Math.round(distanceKm * 1.6) + 8;
        } else if (distanceKm < 120) {
          travelTimeMins = Math.round(distanceKm * 1.2) + 12;
        } else {
          travelTimeMins = Math.round(distanceKm * 1.0) + 20;
        }
      }

      // Live Translation lookup
      let name = p.name;
      let city = p.city;
      let description = p.description;

      if (lang !== 'ru') {
        const translated = PLACE_TRANSLATIONS[p.id]?.[lang];
        if (translated) {
          name = translated.name || p.name;
          city = translated.city || p.city;
          description = translated.description || p.description;
        }
      }

      // Google Places cache-lookup integration
      const slug = getPlaceSlug(p);
      const cached = photosCache[slug];
      let photoUrl = p.photoUrl;
      let googleMapsUrl = p.googleMapsUrl;
      let website = p.website;
      let photoSource = "";
      let googlePlaceId = "";
      let googlePhotoName = "";
      const photoAttributions: string[] = [];

      if (cached) {
        if (cached.photoUrl) {
          photoUrl = cached.photoUrl;
        } else if (cached.photoSource === 'manual') {
          photoUrl = null; // represents incorrect/cleared photo awaiting manual insertion
        }
        if (cached.googleMapsUrl) {
          googleMapsUrl = cached.googleMapsUrl;
        }
        if (cached.websiteUrl) {
          website = cached.websiteUrl;
        }
        photoSource = cached.photoSource || "Google Places";
        googlePlaceId = cached.googlePlaceId || "";
        googlePhotoName = cached.googlePhotoName || "";
      }

      return {
        ...p,
        distanceKm,
        travelTimeMins,
        name,
        city,
        description,
        photoUrl,
        googleMapsUrl,
        website,
        photoSource,
        googlePlaceId,
        googlePhotoName,
        photoAttributions
      };
    });
  }, [state.baseLocation, lang, photosCache]);

  // Apply filters and sort on the dynamically computed places
  const filteredPlaces = useMemo(() => {
    let result = [...placesWithCoordsAndTranslations];

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q));
    }

    // Distance threshold
    if (filters.distance !== 'all') {
      const d = parseInt(filters.distance);
      if (filters.distance === '150+') {
        result = result.filter(p => p.distanceKm >= 150);
      } else {
        result = result.filter(p => p.distanceKm <= d);
      }
    }

    // Type of site
    if (filters.type !== 'all') {
      result = result.filter(p => p.type === filters.type);
    }

    // Used / Unused state
    if (filters.status !== 'all') {
      const isUsed = filters.status === 'used';
      result = result.filter(p => state.usedPlaces.includes(p.id) === isUsed);
    }

    // Free / Promo conditions
    if (filters.couponType !== 'all') {
      result = result.filter(p => p.couponType === filters.couponType);
    }

    // Indoor/Outdoor weathering suitability selection
    if (filters.badWeather) {
      result = result.filter(p => p.weather === 'indoor' || p.weather === 'mixed');
    }
    if (filters.teens) {
      result = result.filter(p => p.goodForTeens);
    }

    // Sort order mapping
    result.sort((a, b) => {
      switch (sort) {
        case 'distance': return a.distanceKm - b.distanceKm;
        case 'city': return a.city.localeCompare(b.city);
        case 'type': return a.type.localeCompare(b.type);
        case 'unused': return (state.usedPlaces.includes(a.id) ? 1 : 0) - (state.usedPlaces.includes(b.id) ? 1 : 0);
        case 'free': return (a.couponType === 'free' ? -1 : 1) - (b.couponType === 'free' ? -1 : 1);
        default: return 0;
      }
    });

    return result;
  }, [placesWithCoordsAndTranslations, filters, sort, state.usedPlaces, searchQuery]);

  return (
    <div className="min-h-screen bg-bg-surface flex flex-col font-sans text-natural-900 select-none pb-8">
      {/* Header */}
      <header className="bg-white border-b border-border-subtle sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row py-3 sm:py-4 justify-between sm:items-center gap-3 sm:gap-4">
            
            {/* Title Block */}
            <div className="flex items-center gap-3 min-w-0 pr-2">
              <div className="bg-natural-600 rounded-xl p-2.5 text-white shadow-sm flex-shrink-0">
                <Map className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base md:text-lg font-black text-gray-950 tracking-tight leading-tight truncate">
                  {t.appTitle}
                </h1>
                <p className="text-[10px] font-bold text-[#8A9A8A] uppercase tracking-wider flex items-center gap-1 mt-0.5 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-natural-500 flex-shrink-0" />
                  <span className="truncate">
                    {t.baseLabel}: <span className="text-natural-700 underline">{state.baseLocation.name}</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Actions & Settings (Language switcher & Base location trigger) */}
            <div className="flex items-center justify-between sm:justify-end gap-2 pr-0.5 w-full sm:w-auto">
              
              {/* Language Selector in Header */}
              <div className="flex bg-natural-50 p-1 rounded-xl border border-border-subtle language-switcher flex-shrink-0">
                {(['ru', 'de', 'en'] as Language[]).map((langCode) => (
                  <button
                    key={langCode}
                    onClick={() => setLanguage(langCode)}
                    className={`text-[11px] font-black w-10 sm:w-9 h-7 flex items-center justify-center rounded-lg uppercase transition-all cursor-pointer ${
                      lang === langCode
                        ? 'bg-natural-600 text-white shadow-sm'
                        : 'text-natural-500 hover:text-natural-800'
                    }`}
                  >
                    {langCode}
                  </button>
                ))}
              </div>

              {/* Location Change Selector */}
              <button
                onClick={() => setShowLocationModal(true)}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 h-9 bg-white border border-border-subtle hover:bg-natural-50 font-bold text-xs text-natural-700 hover:text-natural-900 transition-all rounded-xl shadow-sm flex-shrink-0 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-natural-500 animate-bounce" />
                <span>{t.changeLocation}</span>
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-row flex-nowrap space-x-1 sm:space-x-4 border-t border-gray-100 overflow-x-auto no-scrollbar pt-1 pb-0.5">
            <button 
              onClick={() => setActiveTab('catalog')}
              className={`flex rounded-t-lg py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'catalog' 
                  ? 'border-natural-600 text-natural-600 font-extrabold' 
                  : 'border-transparent text-gray-400 hover:text-natural-700 hover:border-border-subtle'
              }`}
            >
              <Map className="w-4 h-4 mr-2" />
              {t.catalogTab}
            </button>
            <button 
              onClick={() => setActiveTab('coupons')}
              className={`flex rounded-t-lg py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'coupons' 
                  ? 'border-natural-600 text-natural-600 font-extrabold' 
                  : 'border-transparent text-gray-400 hover:text-natural-700 hover:border-border-subtle'
              }`}
            >
              <Ticket className="w-4 h-4 mr-2" />
              {t.couponsTab}
            </button>
            <button 
              onClick={() => setActiveTab('ideas')}
              className={`flex rounded-t-lg py-3 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'ideas' 
                  ? 'border-natural-600 text-natural-600 font-extrabold' 
                  : 'border-transparent text-gray-400 hover:text-natural-700 hover:border-border-subtle'
              }`}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              {t.ideasTab}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {activeTab === 'catalog' && (
          <div className="animate-in fade-in duration-300">
            
            {/* Search Input and Filter trigger */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="h-4.5 w-4.5 text-natural-400" />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-border-subtle rounded-xl text-xs sm:text-sm bg-white placeholder-natural-400 focus:outline-none focus:ring-2 focus:ring-natural-600 focus:border-natural-600 shadow-sm"
                />
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`flex justify-center items-center px-6 py-3 border rounded-xl text-xs font-black whitespace-nowrap transition-all shadow-sm ${
                  showFilters 
                    ? 'bg-natural-50 border-natural-300 text-natural-800' 
                    : 'bg-white border-border-subtle text-natural-700 hover:bg-natural-50 hover:border-natural-400'
                }`}
              >
                <Filter className="w-4 h-4 mr-2 text-natural-500" />
                {t.filtersBtn} {
                  filters.distance !== 'all' || 
                  filters.type !== 'all' || 
                  filters.status !== 'all' || 
                  filters.condition !== 'all' || 
                  filters.badWeather || 
                  filters.teens ? t.filtersActive : ''
                }
              </button>
            </div>

            {/* Collapsible Filter Panel */}
            <FiltersPanel 
              show={showFilters} 
              onClose={() => setShowFilters(false)}
              filters={filters}
              setFilters={setFilters}
              sort={sort}
              setSort={setSort}
            />

            {/* Found list count banner */}
            <div className="mb-4 text-xs font-bold text-natural-400 uppercase tracking-wider text-center sm:text-left">
              {t.resultsFound}: <span className="text-natural-700">{filteredPlaces.length}</span>
            </div>

            {/* Sights Output Grid */}
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-border-subtle shadow-sm">
                <div className="mx-auto w-16 h-16 bg-natural-50 rounded-2xl flex items-center justify-center mb-4 border border-natural-100">
                    <Search className="w-8 h-8 text-natural-300" />
                </div>
                <h3 className="text-base font-extrabold text-natural-900 mb-1">{t.noResults}</h3>
                <p className="text-xs text-natural-400 leading-relaxed max-w-xs mx-auto">{t.noResultsSub}</p>
                <button 
                  onClick={() => {
                    setFilters({ distance: 'all', type: 'all', status: 'all', couponType: 'all', badWeather: false, teens: false });
                    setSearchQuery('');
                  }}
                  className="mt-6 text-xs font-black text-natural-600 hover:text-natural-700 border-b border-natural-600"
                >
                  {t.resetFilters}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredPlaces.map(place => (
                  <PlaceCard 
                    key={place.id}
                    place={place}
                    isUsed={state.usedPlaces.includes(place.id)}
                    onToggleUsed={() => togglePlace(place.id)}
                    onClick={() => setSelectedPlace(place)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'coupons' && <CouponsTab />}
        
        {activeTab === 'ideas' && (
          <IdeasTab 
            onOpenPlace={setSelectedPlace} 
            placesWithCoords={placesWithCoordsAndTranslations} // Propagate translated sights list
          />
        )}
      </main>

      {/* Sights Detail Modal */}
      {selectedPlace && (
        <PlaceModal 
          // Find target item from computed coordinates lists to match dynamic values in detail view
          place={placesWithCoordsAndTranslations.find(p => p.id === selectedPlace.id) || selectedPlace}
          isUsed={state.usedPlaces.includes(selectedPlace.id)}
          onToggleUsed={() => togglePlace(selectedPlace.id)}
          note={state.notes[selectedPlace.id] || ''}
          onSaveNote={(note) => setNote(selectedPlace.id, note)}
          onClose={() => setSelectedPlace(null)}
          onPhotoUpdated={() => setPhotosCacheState(getPhotosCache())}
        />
      )}

      {/* Dynamic Base Location Select Wizard modal (Onboarding forces choosing first) */}
      {(!state.hasChosenLocation || showLocationModal) && (
        <LocationSelectorModal 
          currentLanguage={lang}
          onSelectLanguage={(langCode) => setLanguage(langCode)}
          onSelectLocation={(loc) => {
            setBaseLocation(loc);
            setShowLocationModal(false);
          }}
          showCloseButton={state.hasChosenLocation} // only closable if already established
          onClose={() => setShowLocationModal(false)}
        />
      )}
    </div>
  );
}
