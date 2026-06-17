import { NextResponse } from 'next/server';

// Shared in-memory mock data
export const mockGenerations = [
  {
    id: '1',
    type: 'image',
    thumbnailUrl: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=200&q=80',
    prompt: 'A futuristic astronaut floating in a neon-lit cyber city, highly detailed, cinematic lighting, 8k resolution, photorealistic.',
    model: 'Fomi v1',
    createdAt: new Date().toISOString(),
    results: [
      { id: '1-1', url: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80' },
      { id: '1-2', url: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800&q=80' },
      { id: '1-3', url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80' },
      { id: '1-4', url: 'https://images.unsplash.com/photo-1506744626753-1fa76047585f?w=800&q=80' }
    ]
  },
  {
    id: '2',
    type: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=200&q=80',
    prompt: 'A dynamic view of a futuristic space station rotating above an alien planet, glowing blue energy fields.',
    model: 'Fomi Pro',
    createdAt: new Date(Date.now() - 10000).toISOString(),
    results: [
      { id: '2-1', url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80' }
    ]
  }
];

export async function GET() {
  return NextResponse.json(mockGenerations);
}
