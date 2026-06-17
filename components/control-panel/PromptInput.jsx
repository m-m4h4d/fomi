import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

export function PromptInput({ value, onChange, onGenerate, isGenerating }) {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe you imaginations to be converted to piece of art ...."
        className="w-full min-h-[160px] p-5 pb-12 rounded-[24px] border border-white/50 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#E58873] bg-white text-slate-700 placeholder:text-slate-400 text-[15px] leading-relaxed"
        aria-label="Prompt description"
      />
      
      {/* Generate Button overlapping bottom edge */}
      <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
        <button 
          onClick={onGenerate} 
          disabled={isGenerating}
          className="w-[85%] py-3 text-[15px] rounded-full flex items-center justify-center gap-2 shadow-md transition-all bg-[#E08F7E] hover:bg-[#d47f6d] text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#E08F7E] focus:ring-offset-2"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 animate-spin text-white" />
          ) : (
            <Sparkles className="w-4 h-4 text-white" fill="currentColor" />
          )}
          <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
        </button>
      </div>
    </div>
  );
}
