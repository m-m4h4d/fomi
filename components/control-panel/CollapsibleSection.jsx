import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-2.5 text-[13px] font-medium text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <span className="mx-auto pl-4">{title}</span>
        {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" strokeWidth={3} />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 border-t border-slate-100">
          {children}
        </div>
      )}
    </div>
  );
}
