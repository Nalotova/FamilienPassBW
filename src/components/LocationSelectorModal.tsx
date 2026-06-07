import { useState } from 'react';
import { MAJOR_BW_CITIES, UI_TRANSLATIONS, Language, LocationInfo } from '../translationsAndCoords';
import { MapPin, Navigation, Search, Check, Globe } from 'lucide-react';

interface LocationSelectorModalProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onSelectLocation: (loc: { name: string; lat: number; lng: number }) => void;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export function LocationSelectorModal({
  currentLanguage,
  onSelectLanguage,
  onSelectLocation,
  onClose,
  showCloseButton = false
}: LocationSelectorModalProps) {
  const [search, setSearch] = useState('');
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsCoords, setGpsCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const t = UI_TRANSLATIONS[currentLanguage];

  // Filter major cities by name or ZIP code
  const filteredCities = MAJOR_BW_CITIES.filter((city) => {
    const query = search.toLowerCase();
    return (
      city.name.toLowerCase().includes(query) ||
      (city.zip && city.zip.includes(query))
    );
  });

  const handleGpsDetect = () => {
    if (!navigator.geolocation) {
      setErrorMsg(t.geolocationNotSupported);
      return;
    }

    setGpsLoading(true);
    setErrorMsg(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setGpsCoords({ lat: latitude, lng: longitude });
        setGpsLoading(false);
        
        // Select live GPS location
        onSelectLocation({
          name: t.gpsCoordsLabel,
          lat: latitude,
          lng: longitude
        });
      },
      (error) => {
        console.error(error);
        setGpsLoading(false);
        setErrorMsg(t.gpsError);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleCitySelect = (city: LocationInfo) => {
    onSelectLocation({
      name: city.name,
      lat: city.lat,
      lng: city.lng
    });
  };

  return (
    <div id="location-wizard-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-natural-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden border border-border-subtle max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Language Selection Header */}
        <div className="bg-natural-50 border-b border-border-subtle px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-natural-600" />
            <span className="text-xs font-bold text-natural-700 uppercase tracking-widest">Language / Язык / Sprache</span>
          </div>
          <div className="flex bg-white p-1 rounded-lg border border-border-subtle">
            {(['ru', 'de', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onSelectLanguage(lang)}
                className={`text-xs px-3 py-1.5 rounded-md font-bold uppercase transition-all ${
                  currentLanguage === lang
                    ? 'bg-natural-600 text-white shadow-sm'
                    : 'text-natural-500 hover:text-natural-800'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-[#E9EDE9] rounded-2xl flex items-center justify-center text-natural-600 mb-3 shadow-inner">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-natural-900 tracking-tight">{t.locationModalTitle}</h2>
            <p className="text-xs text-natural-500 mt-2 max-w-md mx-auto leading-relaxed">
              {t.locationModalSubtitle}
            </p>
          </div>

          {/* GPS Detector button */}
          <button
            onClick={handleGpsDetect}
            disabled={gpsLoading}
            className={`w-full flex items-center justify-center gap-3 px-5 py-3 border rounded-xl font-bold transition-all shadow-sm ${
              gpsCoords 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-white border-natural-300 text-natural-800 hover:bg-natural-50 hover:border-natural-400 active:scale-[0.98]'
            }`}
          >
            <Navigation className={`w-4 h-4 ${gpsLoading ? 'animate-spin' : ''}`} />
            {gpsLoading 
              ? t.locating 
              : gpsCoords ? t.gpsActive : t.detectGps}
          </button>

          {errorMsg && (
            <p className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 font-medium animate-in slide-in-from-top-2 duration-300">
              {errorMsg}
            </p>
          )}

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-natural-400" />
            </div>
            <input
              type="text"
              placeholder={t.searchCityZip}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-border-subtle rounded-xl text-sm bg-white placeholder-natural-400 focus:outline-none focus:ring-2 focus:ring-natural-600 focus:border-natural-600 shadow-sm"
            />
          </div>

          {/* Popular Cities selections */}
          <div>
            <h3 className="text-xs font-bold text-natural-500 uppercase tracking-wider mb-2.5">
              {search ? t.foundCities : t.popularCities}
            </h3>
            
            <div className="grid grid-cols-2 gap-2 max-h-[180px] overflow-y-auto pr-1 no-scrollbar-buttons">
              {filteredCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleCitySelect(city)}
                  className="flex items-center justify-between text-left px-3.5 py-2.5 border border-border-subtle hover:border-natural-300 rounded-xl hover:bg-natural-50 transition-all text-xs font-semibold text-natural-800 group"
                >
                  <span className="truncate group-hover:text-natural-900">{city.name}</span>
                  {city.zip && (
                    <span className="text-[10px] font-mono text-natural-400 font-normal bg-natural-100 px-1.5 py-0.5 rounded">
                      {city.zip}
                    </span>
                  )}
                </button>
              ))}

              {filteredCities.length === 0 && (
                <div className="col-span-2 text-center py-4 text-xs text-natural-400">
                  {t.noMatchingCities}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        {showCloseButton && onClose && (
          <div className="border-t border-border-subtle px-6 py-4 flex justify-end bg-natural-50">
            <button
              onClick={onClose}
              className="px-5 py-2 hover:bg-white text-natural-700 hover:text-natural-900 border border-border-subtle hover:border-natural-300 rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              {t.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
