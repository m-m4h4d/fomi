'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Home, Image as ImageIcon, Video, Wand2, Folder, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from 'next-themes';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white dark:bg-[#111111] border-b border-slate-100 dark:border-white/5 sticky top-0 z-50 transition-colors duration-200">
      {/* Left: Logo */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl">
          F
        </div>
        <span className="font-semibold text-lg hidden sm:block tracking-tight dark:text-white">Fomi</span>
      </div>

      {/* Center: Icon Navigation */}
      <div className="flex flex-col items-center justify-center w-1/3 gap-2">
        {/* Pill Indicator */}
        <div className="w-48 h-1.5 bg-orange-100 dark:bg-[#2c1d1a] rounded-full relative">
          <div className="absolute left-1/4 w-1/4 h-full bg-[#E58873] rounded-full"></div>
        </div>
        
        {/* Icons */}
        <div className="flex items-center justify-between w-48 px-2">
          <Home className="w-5 h-5 text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" fill="currentColor" />
          <ImageIcon className="w-5 h-5 text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
          <Video className="w-5 h-5 text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" fill="currentColor" />
          <Wand2 className="w-5 h-5 text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
          <Folder className="w-5 h-5 text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" fill="currentColor" />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center justify-end gap-4 w-1/3">
        <Button variant="secondary" className="hidden md:inline-flex bg-white dark:bg-[#1a1a1a] dark:text-slate-200 dark:border-white/10 dark:hover:bg-white/10 rounded-full shadow-sm font-medium text-sm px-4 py-1.5 h-auto transition-colors">Gallery</Button>
        <button className="hidden md:inline-flex font-medium text-sm text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">Support</button>
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="hidden sm:inline-flex text-slate-400 hover:text-black dark:hover:text-white transition-colors" 
          aria-label="Toggle dark mode"
        >
          {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative ml-2">
          <Image 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" 
            alt="User Avatar" 
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </nav>
  );
}
