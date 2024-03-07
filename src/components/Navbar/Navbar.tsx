/* eslint-disable @next/next/no-img-element */
import Logo from '@/assets/otsuka_logo_big.png';
import Link from 'next/link';
import { arr } from '@/constants';
import { cn } from '@/lib/utils';

interface NavbarProps {
  activeMenu?: string;
  navClass?: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <div
      className={cn(
        'w-[92%] h-[10vh] px-5 mx-auto text-black flex items-center justify-between',
        props.navClass
      )}
    >
      <Link href="/">
        <img className="w-[140px]" src={Logo.src} alt="" />
      </Link>

      <ul className="flex text-center list-none">
        {arr.map((item, i) => {
          return (
            <li key={item.name}>
              <Link
                href={`/tour/${item.slug}`}
                className={cn(
                  'inline-block m-10 text-xl cursor-pointer',
                  props.activeMenu === item.slug ? 'text-sky-400' : 'text-black'
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div />
    </div>
  );
};

export default Navbar;
