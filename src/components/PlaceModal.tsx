import React from 'react';
import { Place } from '../types';
import { X, MapPin, Clock, CloudSun, Target, Ticket, ExternalLink, Globe, CheckCircle, Image as ImageIcon, RefreshCw, AlertTriangle } from 'lucide-react';
import { useAppStore } from '../store';
import { UI_TRANSLATIONS, translateType, getLocalizedCouponInfo, translateWeather } from '../translationsAndCoords';
import { loadGooglePlacePhoto, saveManualPhoto, clearPhotoCacheEntry } from '../placesPhotoService';

interface PlaceModalProps {
  place: Place;
  isUsed: boolean;
  onToggleUsed: () => void;
  note: string;
  onSaveNote: (note: string) => void;
  onClose: () => void;
  onPhotoUpdated: () => void;
}

export function PlaceModal({ place, isUsed, onToggleUsed, note, onSaveNote, onClose, onPhotoUpdated }: PlaceModalProps) {
  const [localNote, setLocalNote] = React.useState(note);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [showManualInput, setShowManualInput] = React.useState(false);
  const [manualUrl, setManualUrl] = React.useState('');
  const [statusText, setStatusText] = React.useState('');
  
  const { state } = useAppStore();
  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  React.useEffect(() => {
    setLocalNote(note);
  }, [note]);

  const handleSave = () => {
    onSaveNote(localNote);
  };

  const handleRefreshPhoto = async () => {
    setIsRefreshing(true);
    setStatusText('');
    try {
      clearPhotoCacheEntry(place);
      const res = await loadGooglePlacePhoto(place, true);
      if (res) {
        onPhotoUpdated();
        setStatusText(t.photoUpdatedLabel);
      } else {
        setStatusText(t.notFoundInGoogleLabel);
      }
    } catch (e) {
      console.error(e);
      setStatusText('Error');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleIncorrectPhoto = () => {
    clearPhotoCacheEntry(place);
    setShowManualInput(true);
    setManualUrl(place.manualPhotoUrl || '');
    setStatusText('');
    onPhotoUpdated();
  };

  const handleManualSave = () => {
    if (!manualUrl.trim()) return;
    saveManualPhoto(place, manualUrl.trim());
    setShowManualInput(false);
    setStatusText(t.savedLabel);
    onPhotoUpdated();
  };

  const translatedType = translateType(place.type, lang).toUpperCase();
  const translatedCondition = place.couponType === 'free' ? t.freeLabel : place.couponType === 'discount' ? t.discountLabel : t.specialPriceLabel;

  const weatherValue = (() => {
    if (place.weather === 'indoor') return t.suitBadWeather;
    if (place.weather === 'outdoor') return t.suitDryWeather;
    return t.suitMixedWeather;
  })();

  const hours = Math.round(place.travelTimeMins / 60);
  const mins = place.travelTimeMins % 60;
  const formattedTime = hours > 0 
    ? `~${hours} ${t.h} ${mins > 0 ? `${mins} ${t.min}` : ''}`
    : `~${mins} ${t.min}`;

  return (
    <div id="place-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6 bg-black/60 backdrop-blur-sm shadow-2xl animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="relative h-56 sm:h-72 bg-gray-100 shrink-0">
           {place.photoUrl ? (
            <img src={place.photoUrl} alt={place.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-slate-50">
              <ImageIcon className="w-12 h-12 mb-3 opacity-30" />
              <span className="text-base font-medium">{t.photoNotFound}</span>
            </div>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
            <div className="flex gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-xs font-medium border border-white/20">
                {translatedType}
              </span>
              {isUsed && (
                <span className="bg-black/60 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 uppercase tracking-wide">
                  <CheckCircle className="w-3 h-3" />
                  {t.usedTag}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{place.name}</h2>
            <div className="flex items-center text-white/80 text-sm mt-2">
              <MapPin className="w-4 h-4 mr-1.5" />
              {place.city}
            </div>
          </div>
        </div>

        <div className="overflow-y-auto p-6 flex flex-col gap-6">
          <p className="text-gray-700 text-[14px] leading-relaxed">
            {place.description}
          </p>

          <div className="bg-natural-50 rounded-2xl p-4 border border-natural-200">
            <h4 className="text-sm font-semibold text-natural-800 mb-2 flex items-center">
              <Ticket className="w-4 h-4 mr-2 text-natural-600" />
              {t.copuonCardDetails}
            </h4>
            <p className="text-sm text-natural-700 leading-relaxed mb-1">
              <span className="font-bold text-xs uppercase tracking-wider text-natural-700">{translatedCondition}</span>
            </p>
            <p className="text-xs text-natural-600 leading-relaxed whitespace-pre-wrap">
              {getLocalizedCouponInfo(place, lang)}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
              <Target className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-sm font-bold text-gray-950">~{place.distanceKm} {t.km}</span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">{t.baseLabel}</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
              <Clock className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-sm font-bold text-gray-950">
                {formattedTime}
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">{t.travelTime}</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
              <CloudSun className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-xs font-bold text-gray-950 capitalize">{translateWeather(place.weather, lang)}</span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">{t.weather}</span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col items-center justify-center text-center">
              <span className="text-lg font-extrabold text-gray-400 mb-0.5 leading-none">{place.goodForTeens ? '12+' : '0+'}</span>
              <span className="text-xs font-bold text-gray-950">{place.goodForTeens ? t.yes : t.no}</span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">{t.teenagers}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-950">{t.notesLabel}</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={localNote}
                onChange={(e) => setLocalNote(e.target.value)}
                placeholder={t.notesPlaceholder}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-natural-500/20 focus:border-natural-500"
              />
              <button 
                onClick={handleSave}
                className="bg-natural-900 text-white px-5 rounded-xl text-xs font-bold hover:bg-natural-800 transition-colors"
              >
                {t.save}
              </button>
            </div>
          </div>

          {/* Photo Management Section */}
          <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">
            <label className="text-sm font-bold text-gray-950 flex items-center justify-between">
              <span>{t.placePhoto}</span>
              {(place.photoSource || statusText) && (
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {statusText ? (
                    <span className="text-natural-600">{statusText}</span>
                  ) : (
                    <>
                      {t.photoSourceLabel}
                      {place.photoSource === 'manual' ? t.manualSource : place.photoSource}
                    </>
                  )}
                </span>
              )}
            </label>
            
            {showManualInput ? (
              <div className="flex flex-col gap-2 bg-gray-50 border border-gray-200 p-3.5 rounded-2xl animate-in fade-in duration-200">
                <p className="text-[11px] text-gray-500 font-medium">
                  {t.pastePhotoUrl}
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={manualUrl}
                    onChange={(e) => setManualUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="flex-1 border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-natural-500/20 focus:border-natural-500"
                  />
                  <button
                    onClick={handleManualSave}
                    className="bg-natural-900 text-white px-5 rounded-xl text-xs font-bold hover:bg-natural-800 transition-colors shrink-0"
                  >
                    {t.save}
                  </button>
                </div>
                <button
                  onClick={() => setShowManualInput(false)}
                  className="text-[11px] font-bold text-gray-400 hover:text-gray-650 self-start mt-1"
                >
                  {t.cancel}
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleRefreshPhoto}
                  disabled={isRefreshing}
                  className="flex-1 sm:flex-initial py-2 px-3.5 border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow active:scale-95 duration-100"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-gray-400 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? t.searchingLabel : t.updatePhoto}
                </button>
                
                <button
                  onClick={handleIncorrectPhoto}
                  className="flex-1 sm:flex-initial py-2 px-3.5 border border-red-100 text-red-600 bg-white hover:bg-red-50 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 duration-100"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  {t.photoWrong}
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 shrink-0">
            <button 
              onClick={onToggleUsed}
              className={`flex-1 flex justify-center items-center py-3.5 rounded-xl font-bold text-xs transition-all border ${
                isUsed 
                ? 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50' 
                : 'bg-natural-600 text-white border-natural-600 hover:bg-natural-700'
              }`}
            >
              {isUsed ? t.toggleUnusedBtn : t.toggleUsedBtn}
            </button>
            <div className="flex gap-3">
              <a 
                href={place.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 font-bold text-xs border border-gray-200 transition-colors"
                title={t.openWebsite}
              >
                <Globe className="w-4 h-4 text-gray-500" />
                {t.openWebsite}
              </a>
              <a 
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 font-bold text-xs border border-gray-200 transition-colors"
                title="Google Maps"
              >
                <ExternalLink className="w-4 h-4 text-gray-500" />
                {t.mapBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
