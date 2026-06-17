import React from 'react';
import Image from 'next/image';
import { Home, Image as ImageIcon, Video, Wand2, Folder, Moon } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl">
          F
        </div>
        <span className="font-semibold text-xl hidden sm:block tracking-tight">Fomi</span>
      </div>

      {/* Center: Icon Navigation */}
      <div className="flex justify-center w-1/3">
        <div className="flex items-center gap-1 p-1.5 bg-slate-100 rounded-full">
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-white hover:shadow-sm">
            <Home className="w-5 h-5 text-slate-500" />
          </Button>
          <Button variant="active" size="icon" className="w-10 h-10 rounded-full shadow-sm">
            <ImageIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-white hover:shadow-sm">
            <Video className="w-5 h-5 text-slate-500" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-white hover:shadow-sm">
            <Wand2 className="w-5 h-5 text-slate-500" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-white hover:shadow-sm">
            <Folder className="w-5 h-5 text-slate-500" />
          </Button>
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center justify-end gap-3 w-1/3">
        <Button variant="secondary" className="hidden md:inline-flex shadow-sm">Gallery</Button>
        <Button variant="ghost" className="hidden md:inline-flex font-medium">Support</Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-slate-500" aria-label="Toggle dark mode">
          <Moon className="w-5 h-5" />
        </Button>
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm relative ml-2">
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
