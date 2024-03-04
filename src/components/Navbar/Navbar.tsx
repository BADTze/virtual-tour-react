/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '../ui/button';
import Logo from '../../assets/otsuka_logo_big.png';
import Link from 'next/link';
import { arr } from '@/constants';

const Navbar = () => {
  return (
    <div className="w-[92%] h-[10vh] mx-auto text-black flex items-center justify-between">
      <Link href="/">
        <img className="w-[140px]" src={Logo.src} alt="" />
      </Link>

      <ul className="flex text-center list-none">
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

      {/* <Button className="w-20 text-xl bg-sky-600 hover:bg-cyan-500">Login</Button> */}
      <div />
    </div>
  );
};

export default Navbar;
