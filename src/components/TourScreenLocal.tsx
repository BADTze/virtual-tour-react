'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IRoom } from '@/types';
import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

export default function TourScreenLocal({
  room,
  slug,
  rooms,
}: {
  room: string;
  slug: string;
  rooms: IRoom[];
}) {
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
        panorama: `/images/${slug}/${room}.jpg`,
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: 'marker-p16i9mmdt4',
                  image: '/images/arrow-up-right.png',
                  position: {
                    yaw: 1.644,
                    pitch: 0,
                  },
                  size: {
                    width: 64,
                    height: 64,
                  },
                  tooltip: 'A image marker. <b>Click me!</b>',
                  anchor: 'bottom center',
                },
                {
                  id: 'marker-ty776acpg1',
                  image: '/images/pin-blue.png',
                  position: {
                    yaw: 4.524,
                    pitch: -0.127,
                  },
                  size: {
                    width: 32,
                    height: 32,
                  },
                  tooltip: 'A image marker. <b>Click me!</b>',
                  anchor: 'bottom center',
                },
              ],
            },
          ],
        ],
      });

      const markersPlugin = viewer.getPlugin(MarkersPlugin);

      markersPlugin.addEventListener('select-marker', (e) => {
        const { marker, returnValue } = e;
        const { config } = marker;
        console.log(config);
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [isMounted, room, slug]);

  return (
    <>
      <Navbar activeMenu={slug} navClass="fixed top-0 z-50 w-full bg-white" />
      <div
        className={cn(
          'z-50 bg-sky-400/80 duration-150 absolute left-0 right-0 w-60 p-3',
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
                  <Link href={`/tour/${slug}/${room}`}>
                    <Button
                      variant={room === item.slug ? 'outline' : 'link'}
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

      {/* <ReactPhotoSphereViewer
        src={`/images/${slug}/${room}.jpg`}
        height={'100vh'}
        width={'100%'}
        onClick={(data) => {
          console.log(data);
        }}
        plugins={[]}
      ></ReactPhotoSphereViewer> */}

      <div className="w-full h-screen" ref={containerRef}></div>
    </>
  );
}
