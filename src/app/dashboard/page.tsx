'use client'
import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import logo from '../../assets/images/leaves_and_shadows.png'
import gif from '../../assets/video/bg.gif'
import { cinzel, alkhemikal } from '@/utils/fonts'

export default function Home (): JSX.Element {
  useEffect(() => {
    async function loadData (): Promise<any> {
      try {
        const response = await fetch('/api?email=gfigueras', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    void loadData()
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        justifyContent: 'start',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <Box sx={{ position: 'absoulte', zIndex: -3 }}>
        <Image
          src={gif}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="blur"
        />
      </Box>
      <Image
        draggable={false}
        className="sm:w-2/12 w-1/3"
        src={logo}
        width={200}
        height={200}
        alt={''}
      />
      <h3 className={`${alkhemikal.className} sm:text-7xl text-4xl text-white`}>
        Leaves & Shadows
      </h3>
      <button
        className={`${cinzel.className} w-32 h-12 rounded bg-green-600 text-white hover:bg-green-500 ease-in-out transition-all duration-500 `}
      >
        Download
      </button>
    </Box>
  )
}
