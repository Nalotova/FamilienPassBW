import { useState } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

interface Option {
  key: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export function CustomSelect({ label, value, options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(o => o.key === value) || options[0];

  return (
    <div className="relative">
      <label className="block text-xs font-bold text-natural-500 uppercase tracking-wider mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full min-h-[56px] border border-[rgba(79,122,99,0.35)] rounded-2xl bg-[#f7f4ec] text-[#2f3a36] px-4 flex items-center justify-between font-semibold text-sm"
      >
        <span className="truncate">{selectedOption.label}</span>
        <ChevronDown className="w-4 h-4 text-natural-500" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-[rgba(31,35,32,0.35)] z-[1000] backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-x-0 bottom-0 z-[1001] bg-[#fffdf8] rounded-t-3xl p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.18)] max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-lg text-[#2f3a36]">{label}</span>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X className="w-6 h-6 text-[#2f3a36]" />
              </button>
            </div>
            <div className="space-y-1">
              {options.map((option) => (
                <button
                  key={option.key}
                  onClick={() => {
                    onChange(option.key);
                    setIsOpen(false);
                  }}
                  className={`w-full min-h-[52px] rounded-xl px-3 flex items-center justify-between text-base ${option.key === value ? 'bg-[rgba(79,122,99,0.10)] text-[#4f7a63] font-bold' : 'text-[#2f3a36]'}`}
                >
                  {option.label}
                  {option.key === value && <Check className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
