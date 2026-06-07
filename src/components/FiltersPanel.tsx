import { Filter, X } from 'lucide-react';
import { PlaceType } from '../types';
import { useAppStore } from '../store';
import { UI_TRANSLATIONS, translateType } from '../translationsAndCoords';
import { CustomSelect } from './CustomSelect';

interface FiltersPanelProps {
  show: boolean;
  onClose: () => void;
  filters: any;
  setFilters: (f: any) => void;
  sort: string;
  setSort: (s: string) => void;
}

export function FiltersPanel({ show, onClose, filters, setFilters, sort, setSort }: FiltersPanelProps) {
  const { state } = useAppStore();
  const lang = state.language || 'ru';
  const t = UI_TRANSLATIONS[lang];

  if (!show) return null;

  const updateFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const typesList: { key: string; label: string }[] = [
    { key: 'all', label: t.allTypes },
    { key: 'музей', label: translateType('музей', lang) },
    { key: 'замок', label: translateType('замок', lang) },
    { key: 'парк', label: translateType('парк', lang) },
    { key: 'зоопарк', label: translateType('зоопарк', lang) },
    { key: 'монастырь', label: translateType('монастырь', lang) },
    { key: 'science center', label: translateType('science center', lang) },
    { key: 'бассейн', label: translateType('бассейн', lang) },
    { key: 'другое', label: translateType('другое', lang) },
  ];

  const conditionsList: { key: string; label: string }[] = [
    { key: 'all', label: t.anyConditions },
    { key: 'free', label: t.freeLabel },
    { key: 'discount', label: t.discountLabel },
    { key: 'special_price', label: t.specialPriceLabel },
  ];

  return (
    <div id="filters-panel-card" className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6 animate-in slide-in-from-top-4 duration-200">
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <Filter className="w-4 h-4 text-natural-600" />
          {t.filtersTitle}
        </h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <CustomSelect 
            label={t.sortLabel}
            value={sort}
            options={[
              { key: 'distance', label: t.sortDistance },
              { key: 'city', label: t.sortCity },
              { key: 'type', label: t.sortType },
              { key: 'unused', label: t.sortUnused },
              { key: 'free', label: t.sortFree },
            ]}
            onChange={setSort}
          />
        </div>

        <div>
          <CustomSelect 
            label={t.distFilterLabel}
            value={filters.distance}
            options={[
              { key: 'all', label: t.distAny },
              { key: '50', label: t.distUpTo50 },
              { key: '100', label: t.distUpTo100 },
              { key: '150', label: t.distUpTo150 },
              { key: '150+', label: t.distOver150 },
            ]}
            onChange={v => updateFilter('distance', v)}
          />
        </div>

        <div>
          <CustomSelect 
            label={t.statusFilterLabel}
            value={filters.status}
            options={[
              { key: 'all', label: t.statusAll },
              { key: 'unused', label: t.statusUnused },
              { key: 'used', label: t.statusUsed },
            ]}
            onChange={v => updateFilter('status', v)}
          />
        </div>

        <div>
          <CustomSelect 
            label={t.typeFilterLabel}
            value={filters.type}
            options={typesList}
            onChange={v => updateFilter('type', v)}
          />
        </div>

        <div>
           <CustomSelect 
             label={t.condFilterLabel}
             value={filters.couponType}
             options={conditionsList}
             onChange={v => updateFilter('couponType', v)}
           />
        </div>
        
        <div className="flex flex-col gap-3 justify-center pt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={filters.badWeather}
              onChange={e => updateFilter('badWeather', e.target.checked)}
              className="rounded text-natural-600 focus:ring-natural-600 border-gray-300 w-4 h-4 cursor-pointer"
            />
            <span className="text-xs font-semibold text-natural-700 group-hover:text-natural-900">{t.filterIndoor}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={filters.teens}
              onChange={e => updateFilter('teens', e.target.checked)}
              className="rounded text-natural-600 focus:ring-natural-600 border-gray-300 w-4 h-4 cursor-pointer"
            />
            <span className="text-xs font-semibold text-natural-700 group-hover:text-natural-900">{t.filterTeens}</span>
          </label>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button 
          onClick={() => {
            setFilters({
              distance: 'all',
              type: 'all',
              status: 'all',
              couponType: 'all',
              badWeather: false,
              teens: false
            });
            setSort('distance');
          }}
          className="text-xs font-bold text-natural-500 hover:text-natural-700 py-2 px-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          {t.resetBtn}
        </button>
      </div>
    </div>
  );
}
