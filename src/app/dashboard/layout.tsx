/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect } from 'react';
import { cinzel } from '@/utils/fonts';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/leaves_and_shadows.png';
import { useRouter, usePathname } from 'next/navigation';
import TemporaryDrawer from '@/components/Drawer';
import { useUser } from '@auth0/nextjs-auth0/client';
import { handleLogout } from '@auth0/nextjs-auth0';
import { MenuItem, Select } from '@mui/material';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const session = true;
  const [layout, setLayout] = React.useState('');
  const { user } = useUser();

  function pushToDashboard(): void {
    if (pathname !== '/dashboard') {
      router.push('/dashboard/');
      handleLogout();
    }
  }

  useEffect(() => {
    if (pathname === '/dashboard') {
      setLayout('Login');
    } else if (pathname === '/dashboard/login') {
      setLayout('Dashboard');
    }

    if (pathname === '/dashboard/login' && session) {
      router.push('/dashboard');
    }
  }, [pathname, session]);

  async function handleSignOut(): Promise<void> {
    router.push('/api/auth/logout');
  }

  return (
    <>
      <header
        className={
          'w-screen sticky top-0 sm:h-24 h-24 bg-zinc-900 flex justify-evenly md:justify-between flex-col md:flex-row self-start  bg-opacity-20 backdrop:blur z-10'
        }
      >
        <ul className="flex flex-row justify-center align-center md:items-center text-center md:w-1/2 md:text-center md:justify-center md:align-center gap-4">
          <Image
            draggable={false}
            onClick={pushToDashboard}
            src={logo}
            className="md:flex hidden w-16 h-16 hover:cursor-pointer ml-4"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="w-full text-center md:w-full h-full flex items-center justify-start gap-4">
            <Link
              className={`${cinzel.className} hidden md:flex md:text-center md:items-center md:justify-center font-bold text-sm md:h-full text-green-50 sm:text-sm md:text-base lg:text-lg xl:text-xl`}
              href={'/dashboard/'}
              onClick={pushToDashboard}
            >
              Leaves & Shadows
            </Link>
          </div>
        </ul>
        <div className="w-full md:w-1/2 h-full flex flex-row items-center justify-center md:justify-end sm:pr-4 gap-4">
          {user ? (
            <>
              <TemporaryDrawer logout={handleSignOut} />
            </>
          ) : (
            <button className="w-40 h-12 rounded bg-zinc-950 flex text-white mr-4">
              <Link
                href={layout === 'Login' ? '/api/auth/login' : '/dashboard'}
                className={`${cinzel.className} text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white w-full h-full rounded text-center items-center justify-center flex transition duration-500 ease-in-out`}
              >
                {layout || 'Login'}
              </Link>
            </button>
          )}
        </div>
      </header>
      {children}
    </>
  );
}
