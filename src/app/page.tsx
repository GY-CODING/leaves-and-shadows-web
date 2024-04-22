'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Home (): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard')
  }, [])

  return (
    <main className="w-screen h-screen flex flex-col bg-white">
    </main>
  )
}
