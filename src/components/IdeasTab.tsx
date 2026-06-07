import { TRIP_IDEAS_GROUPS } from '../data';
import { PlaceCard } from './PlaceCard';
import { useAppStore } from '../store';
import { MapPin } from 'lucide-react';
import { Place } from '../types';
import { UI_TRANSLATIONS } from '../translationsAndCoords';

interface IdeasTabProps {
  onOpenPlace: (p: Place) => void;
  placesWithCoords: Place[]; // Prop list containing distance-adjusted places
}

export function IdeasTab({ onOpenPlace, placesWithCoords }: IdeasTabProps) {
  const { state, togglePlace } = useAppStore();
  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  const getTranslatedGroupName = (name: string): string => {
    if (lang === 'de') {
      if (name.includes("Шварцвальд")) return "Schwarzwald-Region (Nahe Triberg)";
      if (name.includes("Неккар")) return "Neckartal & Umgebung";
      if (name.includes("Боденского")) return "Bodensee-Region";
    } else if (lang === 'en') {
      if (name.includes("Шварцвальд")) return "Black Forest Region (Near Triberg)";
      if (name.includes("Неккар")) return "Neckar Valley & Surroundings";
      if (name.includes("Боденского")) return "Lake Constance Region (Bodensee)";
    }
    return name;
  };

  return (
    <div className="pb-12 text-natural-900">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
          {t.ideasTitle}
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          {t.ideasSubtitle}
        </p>
      </div>

      <div className="space-y-12">
        {TRIP_IDEAS_GROUPS.map(group => {
          // Resolve translated versions of places in this group
          const groupPlaces = group.places
              .map(id => placesWithCoords.find(p => p.id === id)!)
              .filter(Boolean);
          
          return (
            <div key={group.name} className="relative">
              <div className="sticky top-16 sm:top-20 z-10 bg-[#FAF9F6]/95 backdrop-blur-md py-3 mb-4 border-b border-gray-200/50">
                <h3 className="text-sm sm:text-base font-bold text-gray-950 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-natural-600 animate-pulse" />
                  {getTranslatedGroupName(group.name)}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-natural-500 font-bold ml-6 mt-0.5">
                  {groupPlaces.length} {t.objectsInRegion}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                 {groupPlaces.map(place => (
                    <PlaceCard 
                      key={place.id}
                      place={place}
                      isUsed={state.usedPlaces.includes(place.id)}
                      onToggleUsed={() => togglePlace(place.id)}
                      onClick={() => onOpenPlace(place)}
                    />
                 ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
