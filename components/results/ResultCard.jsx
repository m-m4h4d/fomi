import React from 'react';
import Image from 'next/image';

export function ResultCard({ result }) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden group bg-slate-100 dark:bg-slate-900 transition-colors duration-200">
      <Image 
        src={result.url} 
        alt="Generated content" 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
      />
    </div>
  );
}
