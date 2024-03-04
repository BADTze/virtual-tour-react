"use client";

import Navbar from "@/components/Navbar/Navbar";
import { IRoom } from "@/types";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

function TourScreen(props: { rooms: IRoom[] }) {
  const [open, setOpen] = useState(true);

  const [iframeUrl, setIframeUrl] = useState(props.rooms[0].url);

  const handle = (url: string) => {
    setIframeUrl(url);
  };

  return (
    <>
      <Navbar />
      <div className="h-[90vh] relative">
        <div
          className={`bg-sky-600 duration-150 absolute left-0 right-0 w-60 p-3 h-full ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Button
            size="icon"
            className="absolute rotate-180 top-5 -right-8"
            onClick={() => setOpen(!open)}
          >
            {open ? <ArrowRight /> : <ArrowLeft />}
          </Button>

          <ul>
            {props.rooms.map((item) => {
              return (
                <li
                  className="mb-2 text-xl text-center cursor-pointer"
                  key={item.url}
                >
                  <Button
                    onClick={() => handle(item.url)}
                    variant={iframeUrl === item.url ? "outline" : "link"}
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
    </>
  );
}

export default TourScreen;
