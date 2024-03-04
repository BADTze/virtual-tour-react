import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return(
    <main className='text-center'>
      <h1 className='text-4xl'>Under Development</h1>
      <p className='text-2xl'>Go Back To<Link href='/tour/ring-1' className='text-fuchsia-600'> Tour</Link></p>
    </main>
  ) 
}
