import React from 'react';
import { ChevronDown } from 'lucide-react';

export function OptionSelect({ value, options, onChange, ariaLabel, labelPrefix }) {
  return (
    <div className="relative flex-1">
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white dark:bg-[#111111] rounded-xl pl-3 pr-8 py-2 text-[12px] font-medium text-slate-800 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E08F7E] cursor-pointer transition-colors duration-200"
        aria-label={ariaLabel}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {labelPrefix ? `${labelPrefix} ${opt.label}` : opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
        <ChevronDown className="w-3.5 h-3.5" strokeWidth={3} />
      </div>
    </div>
  );
}
