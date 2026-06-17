import React from 'react';
import { HistoryThumbnail } from './HistoryThumbnail';
import { Clock } from 'lucide-react';

export function HistoryStrip({ generations = [], activeId, onSelect }) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 w-full bg-white border-b border-slate-200 shadow-sm z-10 relative">
      {/* Pinned Left Card */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center gap-1 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 min-w-[120px] h-20 text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors">
        <Clock className="w-5 h-5 text-slate-500" />
        <span className="text-sm font-medium">History</span>
        <span className="text-xs text-slate-400 font-medium">View All</span>
      </div>
      
      {/* Scrollable Thumbnails */}
      <div className="flex-1 flex gap-3 overflow-x-auto hide-scrollbar items-center px-1">
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
