import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className="p-3 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="text-blue-500">
        Go back home
      </Link>
    </main>
  );
}
