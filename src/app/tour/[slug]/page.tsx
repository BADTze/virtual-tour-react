import TourScreen from '@/components/TourScreen';
import { getRooms } from '@/lib/services';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function PageRouter({ params }: { params: { slug: string } }) {
  const rooms = await getRooms(params.slug);

  if (!rooms) {
    notFound();
  }

  return <TourScreen rooms={rooms.rooms} />;
}
