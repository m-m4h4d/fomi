import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function GenerateButton({ onClick, isLoading }) {
  return (
    <Button 
      onClick={onClick} 
      disabled={isLoading}
      className="w-full py-6 text-base rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Sparkles className="w-5 h-5" />
      )}
      <span className="font-semibold">{isLoading ? 'Generating...' : 'Generate'}</span>
    </Button>
  );
}
