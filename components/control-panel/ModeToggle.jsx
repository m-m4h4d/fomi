import React from 'react';

export function ModeToggle({ value, onChange }) {
  return (
    <div className="flex bg-white/60 dark:bg-black/40 p-1 rounded-full w-[85%] mx-auto transition-colors duration-200">
      <button 
        onClick={() => onChange('image')}
        className={`flex-1 py-1 text-[13px] font-medium rounded-full transition-all duration-200 ${value === 'image' ? 'bg-[#FAF0ED] dark:bg-[#2c1d1a] shadow-sm text-slate-800 dark:text-slate-200 border border-white dark:border-white/10' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
      >
        Image
      </button>
      <button 
        onClick={() => onChange('video')}
        className={`flex-1 py-1 text-[13px] font-medium rounded-full transition-all duration-200 ${value === 'video' ? 'bg-[#FAF0ED] dark:bg-[#2c1d1a] shadow-sm text-slate-800 dark:text-slate-200 border border-white dark:border-white/10' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
      >
        Video
      </button>
    </div>
  );
}
