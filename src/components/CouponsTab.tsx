import React, { useState } from 'react';
import { useAppStore } from '../store';
import { Ticket } from 'lucide-react';
import { UI_TRANSLATIONS } from '../translationsAndCoords';

export function CouponsTab() {
  const { state, addCoupon, removeCoupon } = useAppStore();
  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  const maxCoupons = 6;
  const remaining = maxCoupons - state.couponsUsed.length;

  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !city || !date) return;
    addCoupon({ name, city, date });
    setName('');
    setCity('');
    setDate('');
    setIsAdding(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">{t.couponsTitle}</h2>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          {t.couponsSubtitle}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-border-subtle overflow-hidden mb-8">
        <div className="p-6 sm:p-8 bg-natural-50 border-b border-natural-200">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-natural-900 flex items-center mb-1">
                <Ticket className="w-5 h-5 mr-2 text-natural-600" />
                {t.couponsMuseumChoice}
              </h3>
              <p className="text-xs text-gray-500">
                {t.couponsLeft} <strong className="text-natural-600 font-extrabold text-sm ml-1">{remaining}</strong> {t.outOf} {maxCoupons}
              </p>
            </div>
            
            {remaining > 0 && !isAdding && (
              <button 
                onClick={() => setIsAdding(true)}
                className="bg-natural-600 hover:bg-natural-700 text-white px-5 py-2 rounded-xl font-bold text-xs transition-all shadow-sm"
              >
                {t.couponsUseBtn}
              </button>
            )}
          </div>

          {isAdding && (
            <form onSubmit={handleSubmit} className="mt-8 bg-white p-5 rounded-xl border border-natural-200 shadow-sm animate-in fade-in slide-in-from-top-4 duration-200">
              <h4 className="text-xs font-bold text-natural-900 uppercase tracking-wider mb-4">{t.couponsFillForm}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.couponsPlaceLabel}</label>
                  <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder={t.couponsNamePlaceholder} className="w-full border-border-subtle rounded-lg focus:ring-natural-600 focus:border-natural-600 text-xs bg-gray-50 border p-2.5 font-semibold text-natural-850" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.cityLabel}</label>
                  <input type="text" required value={city} onChange={e => setCity(e.target.value)} placeholder="Stuttgart" className="w-full border-border-subtle rounded-lg focus:ring-natural-600 focus:border-natural-600 text-xs bg-gray-50 border p-2.5 font-semibold text-natural-850" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">{t.dateLabel}</label>
                  <input type="date" required value={date} onChange={e => setDate(e.target.value)} className="w-full border-border-subtle rounded-lg focus:ring-natural-600 focus:border-natural-600 text-xs bg-gray-50 border p-2.5 font-semibold text-natural-850" />
                </div>
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  {t.cancel}
                </button>
                <button type="submit" className="px-5 py-2 text-xs font-bold text-white bg-natural-600 hover:bg-natural-700 rounded-lg transition-colors">
                  {t.couponsSaveUsage}
                </button>
              </div>
            </form>
          )}
        </div>

        {state.couponsUsed.length > 0 && (
          <div className="border-t border-gray-100 p-6 sm:p-8 bg-gray-50/55">
            <h4 className="font-bold text-[#7A8A7A] mb-4 text-[10px] uppercase tracking-widest">{t.couponsHistory}</h4>
            <div className="space-y-3">
              {state.couponsUsed.map((c, i) => (
                <div key={c.id} className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center group shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-natural-100 text-natural-700 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-natural-900 text-xs sm:text-sm">{c.name}</div>
                      <div className="text-[11px] text-gray-400 flex items-center gap-2 mt-1">
                        <span>{c.city}</span>
                        <span className="w-1 h-0.5 bg-gray-300 rounded-full"></span>
                        <span>{new Date(c.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : lang === 'de' ? 'de-DE' : 'en-US')}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeCoupon(c.id)} className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors text-xs font-bold md:opacity-0 group-hover:opacity-100 focus:opacity-100">
                    {t.delete}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
