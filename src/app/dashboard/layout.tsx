/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect } from 'react'
import { cinzel } from '@/utils/fonts'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/images/leaves_and_shadows.png'
import { useRouter, usePathname } from 'next/navigation'
import TemporaryDrawer from '@/components/Drawer'
import { useSession, signOut } from 'next-auth/react'

export default function Layout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()
  const [layout, setLayout] = React.useState('')

  function pushToDashboard (): void {
    if (pathname !== '/dashboard') {
      router.push('/dashboard/')
      console.log('pushed')
    }
  }

  useEffect(() => {
    if (pathname === '/dashboard') {
      setLayout('Login')
    } else if (pathname === '/dashboard/login' || session != null) {
      setLayout('Dashboard')
    }
  }, [pathname])

  async function handleSignOut (): Promise<void> {
    await signOut()
    router.push('/dashboard')
  }

  return (
    <>
      <header className={'w-screen sm:h-24 h-24 bg-zinc-900 flex justify-evenly md:justify-between flex-col md:flex-row self-start  bg-opacity-20 backdrop:blur-'}>
        <ul className="flex flex-row justify-center align-center md:items-center text-center md:w-1/2 md:text-center md:justify-center md:align-center gap-4">
          <Image onClick={pushToDashboard} src={logo} className="md:flex hidden w-16 h-16 hover:cursor-pointer ml-4" alt="logo" width={100} height={100} />
          <div className="w-full text-center md:w-full h-full flex items-center justify-start">
            <Link className={`${cinzel.className} hidden md:flex md:text-center md:items-center md:justify-center font-bold text-sm md:h-full text-green-50 sm:text-sm md:text-base lg:text-lg xl:text-xl`} href={'/dashboard/'} onClick={pushToDashboard}>Leaves & Shadows</Link>
          </div>

        </ul>
        <div className="w-full md:w-1/2 h-full flex flex-row items-center justify-center md:justify-end pr-4 gap-4">
          {
            (session != null)
              ? <>
                <TemporaryDrawer logout={handleSignOut} />
              </>
              : <button className="w-40 h-12 rounded bg-zinc-950 flex text-white">
                <Link href={layout === 'Login' ? '/dashboard/login' : '/dashboard'} className={`${cinzel.className} text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white w-full h-full rounded text-center items-center justify-center flex transition duration-500 ease-in-out`}>{layout || 'Login'}</Link>
              </button>
          }
        </div>
      </header>
      {children}
    </>
  )
}
