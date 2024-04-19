import TourScreenLocal from "@/components/TourScreenLocal";
import { buttonVariants } from "@/components/ui/button";
import { arr } from "@/constants";
import { IRoom } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-sky-600/90">
      <img
        src="/factory-map-8bfd7b45.png"
        alt="background"
        className="absolute object-cover w-full h-screen z-5 opacity-15"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-screen p-10 backdrop-blur-sm">
        <div className="relative p-8 shadow-xl rounded-2xl bg-white/20">
          <div className="absolute w-8 h-8 rounded-full bg-sky-800 animate-ping -top-3 -right-3" />
          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src="/otsuka_logo_big.png"
              alt="otsuka logo"
              className="w-44"
            />
            <h1 className="text-4xl text-center text-white">
              Welcome to AIO Utility
            </h1>
            <h1 className="text-4xl text-center text-white">Virtual Tour</h1>
          </div>
          <div className="flex justify-center gap-3">
            <Link
              href={`/tour/outer/20240301_140256_101`}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Ring 1
            </Link>
            <Link
              href={`/tour/outer/20240304_132430_068`}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Ring 2
            </Link>
            <Link
              href={`/tour/outer/20240305_105707_769`}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Ring 3
            </Link>
            {/* {arr.map((item, i) => (
              <Link
                key={item.name}
                href={`/tour/${item.slug}/${item.rooms[0].slug}`}
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                {item.name}
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
