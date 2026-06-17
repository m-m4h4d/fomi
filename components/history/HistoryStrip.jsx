import React from 'react';
import { HistoryThumbnail } from './HistoryThumbnail';

export function HistoryStrip({ generations = [], activeId, onSelect }) {
  return (
    <div className="flex items-center gap-4 py-4 w-full z-10 relative">
      {/* Pinned Left Card */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center gap-0.5 px-8 min-w-[100px] h-16 bg-white dark:bg-[#111111] rounded-r-3xl text-slate-800 dark:text-slate-200 cursor-pointer shadow-[2px_0_10px_rgba(0,0,0,0.02)] transition-colors duration-200">
        <span className="text-base font-bold">History</span>
        <span className="text-xs text-slate-400 font-medium">View All</span>
      </div>
      
      {/* Separator */}
      <div className="w-1 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0 transition-colors duration-200"></div>
      
      {/* Scrollable Thumbnails */}
      <div className="flex-1 flex gap-2 overflow-x-auto hide-scrollbar items-center px-1">
        {generations.map((gen) => (
          <HistoryThumbnail 
            key={gen.id}
            url={gen.thumbnailUrl || gen.url}
            type={gen.type}
            isActive={gen.id === activeId}
            onClick={() => onSelect?.(gen)}
          />
        ))}
        {generations.length === 0 && (
          <div className="text-sm text-slate-400 italic px-4">No recent generations</div>
        )}
      </div>
    </div>
  );
}
