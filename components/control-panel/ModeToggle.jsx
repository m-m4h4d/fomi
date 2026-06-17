import React from 'react';

export function ModeToggle({ value, onChange }) {
  return (
    <div className="flex bg-white/60 backdrop-blur-sm p-1.5 rounded-full border border-white shadow-sm">
      <button 
        onClick={() => onChange('image')}
        className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 ${value === 'image' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
      >
        Image
      </button>
      <button 
        onClick={() => onChange('video')}
        className={`flex-1 py-2 text-sm font-medium rounded-full transition-all duration-200 ${value === 'video' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
      >
        Video
      </button>
    </div>
  );
}
