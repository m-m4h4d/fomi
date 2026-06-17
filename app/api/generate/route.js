/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';

const placeholderImages = [
  'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80',
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
  'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
  'https://images.unsplash.com/photo-1506744626753-1fa76047585f?w=800&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  'https://images.unsplash.com/photo-1531297172867-270830cb148c?w=800&q=80'
];

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt, type, numImages, model } = body;

    // Simulate short delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newGenerations = Array.from({ length: numImages || 1 }).map((_, i) => {
      const randomImg = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
      return {
        id: `gen-${Date.now()}-${i}`,
        type: type || 'image',
        url: randomImg,
        thumbnailUrl: randomImg.replace('w=800', 'w=200'),
        prompt: prompt || 'A newly generated piece of art.',
        model: model || 'Fomi v1',
        createdAt: new Date().toISOString()
      };
    });

    return NextResponse.json(newGenerations);
  } catch (_error) {
    return NextResponse.json({ error: 'Failed to generate' }, { status: 500 });
  }
}
