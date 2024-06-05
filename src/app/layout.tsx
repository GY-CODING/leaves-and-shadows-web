/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata: Metadata = {
  title: 'Leaves & Shadows',
  description:
    'Leaves and shadows is a game web based on the Fall of the Gods stories',
  authors: { name: 'GYCODING', url: 'https://github.com/gy-coding' },
  icons: {
    icon: '/leaves_and_shadows.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/leaves_and_shadows.ico" />
      </head>
      <UserProvider>
        <body className="w-screen  bg-zinc-950 flex flex-col items-center overflow-x-hidden">
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
