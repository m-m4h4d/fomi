import React from 'react';
import { ResultCard } from './ResultCard';
import { PromptDetailCard } from './PromptDetailCard';

export function ResultsGrid({ results, activeGeneration }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full px-6 pb-6">
      {results.map((result, index) => {
        const isFifthItem = index === 4;
        return (
          <React.Fragment key={result.id}>
            {isFifthItem && activeGeneration && (
              <PromptDetailCard generation={activeGeneration} />
            )}
            <ResultCard result={result} />
          </React.Fragment>
        );
      })}
      {results.length < 5 && activeGeneration && (
        <PromptDetailCard generation={activeGeneration} />
      )}
    </div>
  );
}
