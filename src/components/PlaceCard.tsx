import React from 'react';
import { MapPin, Clock, CloudSun, CheckCircle, ExternalLink, Ticket, Target, Image as ImageIcon } from 'lucide-react';
import { Place } from '../types';
import { useAppStore } from '../store';
import { UI_TRANSLATIONS, translateType, getLocalizedCouponInfo, translateWeather } from '../translationsAndCoords';

export interface PlaceCardProps {
  place: Place;
  isUsed: boolean;
  onToggleUsed: () => void;
  onClick: () => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, isUsed, onToggleUsed, onClick }) => {
  const { state } = useAppStore();
  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  const translatedType = translateType(place.type, lang);
  const translatedCondition = place.couponType === 'free' ? t.freeLabel : place.couponType === 'discount' ? t.discountLabel : t.specialPriceLabel;

  // Translate weather suitability text
  const weatherText = (() => {
    if (place.weather === 'indoor') return t.suitBadWeather;
    if (place.weather === 'outdoor') return t.suitDryWeather;
    return t.suitMixedWeather;
  })();

  const hours = Math.floor(place.travelTimeMins / 60);
  const mins = place.travelTimeMins % 60;
  const formattedTime = hours > 0 
    ? `~${hours} ${t.h} ${mins > 0 ? `${mins} ${t.min}` : ''}`
    : `~${mins} ${t.min}`;

  return (
    <div id={`place-card-${place.id}`} className={`bg-white rounded-2xl shadow-sm border border-border-subtle overflow-hidden flex flex-col mb-4 transition-all hover:shadow-md ${isUsed ? 'opacity-90' : ''}`}>
      <div className={`h-48 sm:h-40 bg-gray-200 relative cursor-pointer group ${isUsed ? 'grayscale' : ''}`} onClick={onClick}>
        {place.photoUrl ? (
          <img src={place.photoUrl} alt={place.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50 border-b border-border-subtle">
            <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-sm font-medium">{t.photoNotFound}</span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-natural-600 px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wide shadow-sm">
          {translatedType}
        </div>
        {isUsed && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-sm uppercase tracking-widest backdrop-blur-[1px]">
            {t.usedTag}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className={`font-bold text-base leading-tight cursor-pointer ${isUsed ? 'text-gray-400' : 'text-natural-900'}`} onClick={onClick}>{place.name}</h3>
          
          <span className={`text-[10px] font-bold border px-1.5 py-0.5 rounded ml-2 shrink-0 ${place.couponType === 'free' ? 'text-emerald-600 border-emerald-200 bg-emerald-50' : place.couponType === 'discount' ? 'text-amber-600 border-amber-200 bg-amber-50' : 'text-indigo-600 border-indigo-200 bg-indigo-50'}`}>
            {place.couponType === 'free' ? t.freeTag : place.couponType === 'discount' ? t.discountTag : t.specialTag}
          </span>
        </div>
        <div className="flex items-center text-gray-400 text-xs font-semibold mb-3">
          <MapPin className="w-3.5 h-3.5 mr-1" />
          {place.city}
        </div>
        
        <p className={`text-xs line-clamp-2 mb-4 leading-relaxed flex-grow ${isUsed ? 'text-gray-400' : 'text-gray-600'}`}>
          {place.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-start text-xs leading-relaxed">
            <Ticket className="w-4 h-4 mr-2 text-natural-600 mt-0.5 shrink-0" />
            <span className="text-gray-600">
              <span className="font-bold">{translatedCondition}:</span> {getLocalizedCouponInfo(place, lang)}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-natural-700">
            <div className="bg-natural-50 border border-natural-100 px-2 py-1 rounded-md flex items-center">
              <Target className="w-3.5 h-3.5 mr-1.5 text-natural-500 opacity-80" />
              ~{place.distanceKm} {t.km}
            </div>
            <div className="bg-natural-50 border border-natural-100 px-2 py-1 rounded-md flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-natural-500 opacity-80" />
              {formattedTime}
            </div>
            <div className="bg-natural-50 border border-natural-100 px-2 py-1 rounded-md flex items-center capitalize" title={weatherText}>
              <CloudSun className="w-3.5 h-3.5 mr-1.5 text-natural-500 opacity-80" />
              {translateWeather(place.weather, lang)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-natural-50 mt-auto">
          {isUsed ? (
             <button 
               onClick={onToggleUsed}
               className="flex-1 bg-gray-50 text-gray-400 border border-gray-200 py-2 rounded-lg text-xs font-bold transition-colors"
             >
               {t.revertBtn}
             </button>
          ) : (
             <button 
               onClick={onToggleUsed}
               className="flex-1 border border-natural-600 text-natural-600 hover:bg-natural-50 py-2 rounded-lg text-xs font-bold transition-colors"
             >
               {t.markBtn}
             </button>
          )}
          
          <a
            href={place.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors flex justify-center items-center ${isUsed ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none' : 'bg-natural-50 hover:bg-natural-100 text-natural-600'}`}
            title="Maps"
          >
            {t.mapBtn}
          </a>
        </div>
      </div>
    </div>
  );
}
