import React from 'react';
import Image from 'next/image';

export function HistoryThumbnail({ url, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E58873] focus:ring-offset-2
        ${isActive ? 'ring-2 ring-[#E58873] ring-offset-2 shadow-md opacity-100 scale-105' : 'opacity-70 hover:opacity-100'}`}
    >
      <Image
        src={url}
        alt="History thumbnail"
        fill
        className="object-cover"
        unoptimized
      />
    </button>
  );
}
