import React from 'react';

export function PromptDetailCard({ generation }) {
  if (!generation) return null;

  return (
    <div className="w-full aspect-[3/4] bg-[#FAF0ED] rounded-[24px] p-6 relative flex flex-col justify-between">
      <p className="text-[14px] leading-relaxed text-slate-800">
        {generation.prompt}
      </p>
      
      <div className="flex justify-end mt-4 absolute bottom-4 right-4">
        <span className="bg-white px-3 py-1 text-xs font-semibold text-slate-700 rounded-lg shadow-sm">
          {generation.model || 'Model'}
        </span>
      </div>
    </div>
  );
}
