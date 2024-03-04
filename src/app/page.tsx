/* eslint-disable @next/next/no-img-element */

import { buttonVariants } from '@/components/ui/button';
import { arr } from '@/constants';
import Link from 'next/link';

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
            <img src="/otsuka_logo_big.png" alt="otsuka logo" className="w-44" />
            <h1 className="text-4xl text-center text-white">Welcome to AIO Utility</h1>
            <h1 className="text-4xl text-center text-white">Virtual Tour</h1>
          </div>
          <div className="flex justify-center gap-3">
            {arr.map((item, i) => (
              <Link
                key={item.name}
                href={`/tour/${item.slug}`}
                className={buttonVariants({ variant: 'secondary', size: 'lg' })}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
