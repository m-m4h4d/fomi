'use client';

import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { PromptInput } from './PromptInput';
import { GenerateButton } from './GenerateButton';
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
    <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none">
      <ModeToggle value={mode} onChange={setMode} />
      
      <div className="flex flex-col gap-3">
        <PromptInput value={prompt} onChange={setPrompt} />
        <GenerateButton onClick={handleGenerate} isLoading={isGenerating} />
      </div>

      <div className="flex gap-2 w-full">
        <OptionSelect 
          value={numImages} 
          onChange={setNumImages}
          ariaLabel="Number of generations"
          options={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '4', value: '4' },
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
          options={[
            { label: 'Fomi v1', value: 'fomi-v1' },
            { label: 'Fomi Fast', value: 'fomi-fast' },
            { label: 'Fomi Pro', value: 'fomi-pro' },
          ]} 
        />
      </div>

      <div className="flex flex-col gap-3">
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
