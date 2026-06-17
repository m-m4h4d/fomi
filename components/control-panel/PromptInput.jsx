import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export function PromptInput({ value, onChange, onGenerate, isGenerating }) {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe you imaginations to be converted to piece of art ...."
        className="w-full min-h-[160px] p-5 pb-16 rounded-[24px] border-[1.5px] border-black dark:border-white/20 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#E58873] bg-white dark:bg-[#111111] text-slate-700 dark:text-slate-200 placeholder:text-slate-400 text-[15px] leading-relaxed transition-colors duration-200"
        aria-label="Prompt description"
      />
      
      {/* Generate Button positioned at bottom right INSIDE textarea */}
      <button 
        onClick={onGenerate} 
        disabled={isGenerating}
        className="absolute bottom-4 right-4 px-6 py-2.5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(224,143,126,0.25)] transition-all bg-[#E08F7E] hover:bg-[#d47f6d] text-white font-medium text-[15px] focus:outline-none"
      >
        {isGenerating ? (
          <Loader2 className="w-4 h-4 animate-spin text-white" />
        ) : (
          <Sparkles className="w-4 h-4 text-white" fill="currentColor" />
        )}
        <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
      </button>
    </div>
  );
}
