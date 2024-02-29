'use client';

import Navbar from '@/components/Navbar/Navbar';
import { IRoom } from '@/types';
import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function TourScreen(props: { rooms: IRoom[] }) {
  const [open, setOpen] = useState(true);

  const [iframeUrl, setIframeUrl] = useState(
    'https://momento360.com/e/u/e4b16f1137f04cd18af6d8a6586b2a72?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true'
  );

  const handle = (url: string) => {
    setIframeUrl(url);
  };

  return (
    <div>
      <Navbar />
      <div className="h-[85vh] relative">
        <div
          className={`bg-sky-600 duration-150 absolute left-0 right-0 w-60 p-3 h-full ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Button
            size="icon"
            className="top-5 -right-8 absolute rotate-180"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowRight /> : <ArrowLeft />}
          </Button>

          <ul>
            {props.rooms.map((item) => {
              return (
                <li className="text-center cursor-pointer text-xl mb-2" key={item.url}>
                  <Button
                    onClick={() => handle(item.url)}
                    variant={iframeUrl === item.url ? 'outline' : 'link'}
                    className="block w-full"
                  >
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <iframe width="100%" height="100%" src={iframeUrl} />
      </div>
    </div>
  );
}

export default TourScreen;
