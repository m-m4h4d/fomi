import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white bg-white/40 backdrop-blur rounded-2xl overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white/50 transition-colors focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-white/50">
          {children}
        </div>
      )}
    </div>
  );
}
