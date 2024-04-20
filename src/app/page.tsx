'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home (): JSX.Element {
  const router = useRouter()
  router.push('/dashboard')
  return (
    <main className="w-screen h-screen flex flex-col bg-white">
    </main>
  )
}
