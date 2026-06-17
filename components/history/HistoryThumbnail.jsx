import React from 'react';
import Image from 'next/image';

export function HistoryThumbnail({ url, type, isActive, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:ring-offset-2
        ${isActive ? 'ring-2 ring-[#FF6B4A] ring-offset-2 shadow-md' : 'opacity-70 hover:opacity-100 hover:shadow-sm'}`}
    >
      <Image 
        src={url} 
        alt="History thumbnail" 
        fill
        className="object-cover"
        unoptimized
      />
      {type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
          </div>
        </div>
      )}
    </button>
  );
}
