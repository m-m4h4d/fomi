import { NextResponse } from 'next/server';

// Shared in-memory mock data
export const mockGenerations = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=200&q=80',
    prompt: 'A futuristic astronaut floating in a neon-lit cyber city, highly detailed, cinematic lighting, 8k resolution, photorealistic.',
    model: 'Fomi v1',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    type: 'video',
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=200&q=80',
    prompt: 'A dynamic view of a futuristic space station rotating above an alien planet, glowing blue energy fields.',
    model: 'Fomi Pro',
    createdAt: new Date(Date.now() - 10000).toISOString()
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=200&q=80',
    prompt: 'Abstract geometric shapes floating in a soft pink background, minimalistic, 3d render, soft lighting.',
    model: 'Fomi Fast',
    createdAt: new Date(Date.now() - 20000).toISOString()
  },
  {
    id: '4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=200&q=80',
    prompt: 'A majestic deer made of glowing starlight walking through a mystical forest, fantasy, intricate details.',
    model: 'Fomi v1',
    createdAt: new Date(Date.now() - 30000).toISOString()
  }
];

export async function GET() {
  return NextResponse.json(mockGenerations);
}
