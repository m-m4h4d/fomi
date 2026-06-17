'use client';

import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { PromptInput } from './PromptInput';
import { OptionSelect } from './OptionSelect';
import { CollapsibleSection } from './CollapsibleSection';

export function GenerationPanel({ onGenerate, isGenerating }) {
  const [mode, setMode] = useState('image');
  const [prompt, setPrompt] = useState('');
  const [numImages, setNumImages] = useState('4');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [model, setModel] = useState('fomi-v1');

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    onGenerate({
      prompt,
      type: mode,
      numImages: parseInt(numImages, 10),
      aspectRatio,
      model
    });
  };

  return (
    <div className="flex flex-col gap-5 w-full bg-[#FAF0ED] dark:bg-[#1c1412] rounded-[32px] p-6 shadow-sm transition-colors duration-200">
      <ModeToggle value={mode} onChange={setMode} />
      
      <div className="mt-1 mb-2">
        <PromptInput 
          value={prompt} 
          onChange={setPrompt} 
          onGenerate={handleGenerate} 
          isGenerating={isGenerating} 
        />
      </div>

      <div className="flex gap-2 w-full mt-2">
        <OptionSelect 
          value={numImages} 
          onChange={setNumImages}
          ariaLabel="Number of generations"
          options={[
            { label: '# Images', value: '1' },
            { label: '# 2 Images', value: '2' },
            { label: '# 4 Images', value: '4' },
          ]} 
        />
        <OptionSelect 
          value={aspectRatio} 
          onChange={setAspectRatio}
          ariaLabel="Aspect Ratio"
          options={[
            { label: '1:1', value: '1:1' },
            { label: '16:9', value: '16:9' },
            { label: '9:16', value: '9:16' },
            { label: '4:3', value: '4:3' },
          ]} 
        />
        <OptionSelect 
          value={model} 
          onChange={setModel}
          ariaLabel="Model selection"
          labelPrefix="Model:"
          options={[
            { label: 'Name', value: 'fomi-v1' },
            { label: 'Fast', value: 'fomi-fast' },
            { label: 'Pro', value: 'fomi-pro' },
          ]} 
        />
      </div>

      <div className="flex flex-col gap-3 mt-1">
        <CollapsibleSection title="Advance">
          <div className="text-sm text-slate-500 py-2">
            Advanced settings like negative prompt, seed, and steps would go here.
          </div>
        </CollapsibleSection>
        
        <CollapsibleSection title="Styles">
          <div className="text-sm text-slate-500 py-2">
            Style presets (e.g. Cinematic, Anime, Photorealistic) would go here.
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
