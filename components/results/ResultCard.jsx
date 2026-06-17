import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export function ResultCard({ url, type, isActive, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:ring-offset-2 transition-all duration-300 ease-out transform ${isActive ? 'ring-2 ring-[#FF6B4A] ring-offset-2 shadow-lg scale-[1.02]' : 'hover:shadow-md hover:-translate-y-1'}`}
    >
      <Image 
        src={url} 
        alt="Generated content" 
        fill
        className="object-cover"
        unoptimized
      />
      {/* Subtle overlay on hover */}
      <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
      
      {type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      )}
    </button>
  );
}
