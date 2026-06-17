import React from 'react';

export function PromptInput({ value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your imaginations to be converted to piece of art..."
        className="w-full min-h-[140px] p-4 rounded-2xl border border-white shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:border-transparent bg-white/80 backdrop-blur text-slate-700 placeholder:text-slate-400"
        aria-label="Prompt description"
      />
    </div>
  );
}
