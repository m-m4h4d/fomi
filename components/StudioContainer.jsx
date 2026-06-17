'use client';

import React, { useState } from 'react';
import { HistoryStrip } from './history/HistoryStrip';
import { GenerationPanel } from './control-panel/GenerationPanel';
import { ResultsGrid } from './results/ResultsGrid';

export function StudioContainer({ initialGenerations }) {
  const [generations, setGenerations] = useState(initialGenerations);
  const [activeGeneration, setActiveGeneration] = useState(initialGenerations[0] || null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (params) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      
      setGenerations(prev => [...data.generations, ...prev]);
      if (data.generations.length > 0) {
        setActiveGeneration(data.generations[0]);
      }
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // We show up to 7 images in the ResultsGrid, plus 1 prompt card = 8 grid items
  const resultsList = generations.slice(0, 7);

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#FAFAFA]">
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative max-w-[1600px] mx-auto w-full">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[360px] flex-shrink-0 p-6 overflow-y-auto hide-scrollbar z-20">
          <GenerationPanel onGenerate={handleGenerate} isGenerating={isGenerating} />
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          {/* Fading gradient behind history strip to match design */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none hidden lg:block"></div>
          
          <HistoryStrip 
            generations={generations} 
            activeId={activeGeneration?.id}
            onSelect={setActiveGeneration}
          />
          
          <div className="flex-1 overflow-y-auto hide-scrollbar pt-2">
            <ResultsGrid results={resultsList} activeGeneration={activeGeneration} />
          </div>
        </div>
      </div>
    </div>
  );
}
