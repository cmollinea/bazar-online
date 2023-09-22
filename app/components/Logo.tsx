'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Logo() {
  const pathname = usePathname();
  return (
    // Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
    <Link
      className={`relative rounded-full overflow-hidden ${
        pathname === '/' ? 'h-72 w-72 mb-4' : 'w-14 h-14 ml-2'
      }`}
      href={'/'}
    >
      {' '}
      <Image className='z-50' src={'/shop.svg'} fill alt='shop' />
    </Link>
  );
}
export default Logo;
