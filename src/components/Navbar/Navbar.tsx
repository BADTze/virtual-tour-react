/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '../ui/button';
import Logo from '../../assets/otsuka_logo_big.png';
import Link from 'next/link';
import { arr } from '@/constants';

const Navbar = () => {
  return (
    <div className="w-[92%] mx-auto text-black flex items-center justify-between">
      <img className="w-[160px] cursor-pointer" src={Logo.src} alt="" />

      <ul className="flex list-none text-center">
        {arr.map((item, i) => {
          return (
            <li key={item.name}>
              <Link
                href={`/tour/${item.slug}`}
                className="inline-block m-10 text-xl cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button className="bg-sky-600 hover:bg-cyan-500 w-20 text-xl">Login</Button>
    </div>
  );
};

export default Navbar;
