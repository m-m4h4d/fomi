import React from 'react';
import { ChevronDown } from 'lucide-react';

export function OptionSelect({ value, options, onChange, ariaLabel }) {
  return (
    <div className="relative flex-1">
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white/80 backdrop-blur border border-white rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] cursor-pointer"
        aria-label={ariaLabel}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}
