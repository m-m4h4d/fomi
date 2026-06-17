import React from 'react';

export function ModeToggle({ value, onChange }) {
  return (
    <div className="flex bg-white/60 p-1 rounded-full w-[85%] mx-auto">
      <button 
        onClick={() => onChange('image')}
        className={`flex-1 py-1 text-[13px] font-medium rounded-full transition-all duration-200 ${value === 'image' ? 'bg-[#FAF0ED] shadow-sm text-slate-800 border border-white' : 'text-slate-500 hover:text-slate-700'}`}
      >
        Image
      </button>
      <button 
        onClick={() => onChange('video')}
        className={`flex-1 py-1 text-[13px] font-medium rounded-full transition-all duration-200 ${value === 'video' ? 'bg-[#FAF0ED] shadow-sm text-slate-800 border border-white' : 'text-slate-500 hover:text-slate-700'}`}
      >
        Video
      </button>
    </div>
  );
}
