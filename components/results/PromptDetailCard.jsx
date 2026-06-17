import React from 'react';
import { Badge } from '../ui/Badge';

export function PromptDetailCard({ prompt, model }) {
  if (!prompt) return null;
  
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative w-full">
      <p className="text-slate-800 font-medium leading-relaxed text-[17px] pb-6 pr-20">
        {prompt}
      </p>
      <div className="absolute bottom-4 right-4">
        <Badge>{model}</Badge>
      </div>
    </div>
  );
}
