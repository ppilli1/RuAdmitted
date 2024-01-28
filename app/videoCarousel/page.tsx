"use client"
import React from 'react';
import CampusInfo from '@/components/videoCarousels/videoCarousel1';

export default function VideoCarousel() {
  return (
    <main className="relative flex h-[calc(100vh-70px)] flex-col justify-center items-center">
      <CampusInfo />
    </main>
  );
}
