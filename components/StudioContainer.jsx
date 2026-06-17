'use client';
import React, { useState } from 'react';
import { HistoryStrip } from './history/HistoryStrip';
import { GenerationPanel } from './control-panel/GenerationPanel';
import { PromptDetailCard } from './results/PromptDetailCard';
import { ResultsGrid } from './results/ResultsGrid';

export function StudioContainer({ initialGenerations }) {
  const [generations, setGenerations] = useState(initialGenerations);
  const [activeGeneration, setActiveGeneration] = useState(initialGenerations[0] || null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (params) => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      const newGens = await res.json();
      const updatedGens = [...newGens, ...generations];
      setGenerations(updatedGens);
      setActiveGeneration(newGens[0]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-1 flex flex-col w-full">
      {/* Top History Strip */}
      <div className="w-full">
        <HistoryStrip 
          generations={generations} 
          activeId={activeGeneration?.id}
          onSelect={setActiveGeneration}
        />
      </div>
      
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto relative">
        {/* Left Control Panel (Sticky Sidebar) */}
        <aside className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 bg-[#FFF5F2] border-r border-slate-200 lg:min-h-[calc(100vh-140px)] shadow-sm z-0 relative">
          <div className="p-6 lg:sticky lg:top-[73px]">
            <GenerationPanel onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>
        </aside>
        
        {/* Right Content Area (Prompt + Grid) */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col gap-8 min-w-0 bg-[#FAFAFA]">
          <div className="w-full max-w-5xl">
            <PromptDetailCard 
              prompt={activeGeneration?.prompt} 
              model={activeGeneration?.model} 
            />
          </div>
          
          <div className="flex-1">
            <ResultsGrid 
              results={generations} 
              activeId={activeGeneration?.id}
              onSelect={setActiveGeneration}
              isLoading={isGenerating}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
