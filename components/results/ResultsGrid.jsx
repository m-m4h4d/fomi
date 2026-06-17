import React from 'react';
import { ResultCard } from './ResultCard';
import { PromptDetailCard } from './PromptDetailCard';

export function ResultsGrid({ results, activeGeneration }) {
  const gridItems = [];
  
  // Insert prompt card at index 4 (so it appears on the second row in desktop 4-column layout)
  const insertIndex = results.length >= 4 ? 4 : results.length;
  
  results.forEach((res, index) => {
    if (index === insertIndex && activeGeneration) {
      gridItems.push(
        <div key="prompt-card" className="w-full">
          <PromptDetailCard generation={activeGeneration} />
        </div>
      );
    }
    gridItems.push(
      <ResultCard key={res.id} result={res} />
    );
  });

  if (results.length < 4 && activeGeneration) {
    gridItems.push(
      <div key="prompt-card" className="w-full">
        <PromptDetailCard generation={activeGeneration} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-6 pb-6">
      {gridItems}
    </div>
  );
}
