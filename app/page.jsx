import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { StudioContainer } from '../components/StudioContainer';
import { mockGenerations } from './api/generations/route';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <StudioContainer initialGenerations={mockGenerations} />
    </div>
  );
}
