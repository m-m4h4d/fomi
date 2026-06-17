import React from 'react';
import { ResultCard } from './ResultCard';
import { Loader2 } from 'lucide-react';

export function ResultsGrid({ results = [], activeId, onSelect, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-white/50">
        <Loader2 className="w-8 h-8 text-[#FF6B4A] animate-spin mb-4" />
        <p className="text-slate-500 font-medium animate-pulse">Generating your masterpieces...</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-white/50 text-slate-400">
        No results to display. Generate something amazing!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full pb-8">
      {results.map((result, i) => (
        <div key={result.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
          <ResultCard 
            url={result.url}
            type={result.type}
            isActive={result.id === activeId}
            onClick={() => onSelect?.(result)}
          />
        </div>
      ))}
    </div>
  );
}
