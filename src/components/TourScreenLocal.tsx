'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IMarkerCustom, IRoom } from '@/types';
import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { useRouter } from 'next/navigation';
import { transformMarkerConfig } from '@/lib/photo-sphere';

export default function TourScreenLocal({
  room,
  areaSlug,
  rooms,
}: {
  room: IRoom;
  areaSlug: string;
  rooms: IRoom[];
}) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const viewer = new Viewer({
        container: containerRef.current as HTMLElement,
        panorama: `/images/${areaSlug}/${room.slug}.jpg`,
        plugins: [
          [
            MarkersPlugin,
            {
              markers: room.markers.map((marker) => {
                return transformMarkerConfig(marker);
              }),
            },
          ],
        ],
      });

      const markersPlugin = viewer.getPlugin(MarkersPlugin);

      markersPlugin.addEventListener('select-marker', (e) => {
        const { marker, returnValue } = e;
        const { config } = marker;
        router.push(`/tour/${config.id}`);
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [isMounted, room, areaSlug]);

  return (
    <>
      <Navbar activeMenu={areaSlug} navClass="fixed top-0 z-50 w-full bg-white" />
      <div
        className={cn(
          'z-50 bg-sky-400/80 duration-150 absolute left-0 right-0 w-80 p-3',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{ top: '10vh', bottom: 0 }}
      >
        <Button
          size="icon"
          className="absolute rotate-180 top-5 -right-8"
          onClick={() => setOpen(!open)}
        >
          {open ? <ArrowRight /> : <ArrowLeft />}
        </Button>

        <ScrollArea className="w-full h-full p-4">
          <ul>
            {rooms.map((item) => {
              return (
                <li className="mb-2 text-xl text-center cursor-pointer" key={item.url}>
                  <Link href={`/tour/${areaSlug}/${item.slug}`}>
                    <Button
                      variant={room.slug === item.slug ? 'outline' : 'link'}
                      className="block w-full"
                    >
                      {item.label}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>

      <div className="w-full h-screen" ref={containerRef}></div>
    </>
  );
}
