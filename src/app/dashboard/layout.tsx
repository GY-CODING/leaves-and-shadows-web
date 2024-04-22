/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
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

  function pushToDashboard (): void {
    if (pathname !== '/dashboard') {
      router.push('/dashboard/')
    }
  }
  async function handleSignOut (): Promise<void> {
    await signOut()
    router.push('/dashboard')
  }

  return (
        <>
            <header className={'w-screen h-24 bg-zinc-900 flex flex-row self-start justify-self-star bg-opacity-20 backdrop:blur-'}>
                <ul className="w-1/2 h-full flex flex-row items-center justify-start gap-6 pl-4">
                    <Image onClick={pushToDashboard} src={logo} className="w-16 h-16 hover:cursor-pointer" alt="logo" width={100} height={100} />
                    <div className="w-auto text-center">
                        <Link className={`${cinzel.className} font-bold text-xl text-green-50`} href={'/dashboard/'} onClick={pushToDashboard}>Leaves & Shadows</Link>
                        {/* <p className={`${cinzel.className} font-bold text-m text-green-50`}>Fall of the Gods</p> */}

                    </div>
                </ul>
                <div className="w-1/2 h-full flex flex-row items-center justify-end pr-4 gap-4">
                    {
                        (session != null)
                          ? <>
                                <TemporaryDrawer logout={handleSignOut} />
                            </>
                          : <button className="w-40 h-12 rounded bg-zinc-950 flex text-white">
                                <Link href="/dashboard/login" className={`${cinzel.className} text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white w-full h-full rounded text-center items-center justify-center flex transition duration-500 ease-in-out`}>{'Login'}</Link>
                            </button>
                    }
                </div>
            </header>
            {children}
        </>
  )
}
