import TourScreenLocal from '@/components/TourScreenLocal';
import { getRooms } from '@/lib/services';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function Page({ params }: { params: { slug: string; room: string } }) {
  const { room, slug } = params;

  const rooms = await getRooms(params.slug);

  if (!rooms) {
    notFound();
  }

  const currentRoom = rooms.rooms.find((r) => r.slug === room);

  if (!currentRoom) {
    notFound();
  }

  const image = await fetch(`${process.env.PUBLIC_URL}/images/${slug}/${room}.jpg`);

  if (image.status === 404) {
    notFound();
  }

  return <TourScreenLocal room={currentRoom} areaSlug={slug} rooms={rooms?.rooms || []} />;
}
