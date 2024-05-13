import { Box, Typography, keyframes } from '@mui/material'
import React, { useState } from 'react'

interface characterProps {
  name: string
  world: string
  imagen: string
}
export default function CharacterCard ({
  name,
  world,
  imagen
}: characterProps): JSX.Element {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const grow = keyframes`
  0% {
    height: 0%;
    opacity: 0;

  }
  100% {
    height: 40%;
    opacity: 1;

  }
`
  return (
    <div
      className={
        'w-1/6 h-80  relative flex flex-col items-center justify-center hover:scale-105 transition-all border border-transparent duration-500 hover:border hover:border-teal-700'
      }
      onMouseEnter={() => { setIsClicked(true) }}
      onMouseLeave={() => { setIsClicked(false) }}

    >
      <Box
        component="img"
        draggable={false}
        sx={{
          height: '100%',
          width: '130%',
          objectFit: 'cover'
        }}
        alt={'Jormungander'}
        src={imagen} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          height: isClicked ? '30%' : '20%',
          transition: 'all 0.5s',
          backgroundColor: '#000000BB',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          borderTop: '2px solid #26a69a',
          justifyContent: 'start',
          overflow: 'hidden'
          // '&:hover': {
          //   transition: 'all 0.6s'
          // }

        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: isClicked ? '60%' : '100%'

        }}>
        <Typography sx={{ fontFamily: 'cinzel', fontWeight: 'bold', color: '#2dd4bf' }}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: 'cinzel', color: 'white', fontSize: '13px' }}
        >
          {world}
        </Typography>
        </Box>
        <Box sx={{
          width: '100%',
          height: isClicked ? '40%' : '0%',
          opacity: '0',
          display: isClicked ? 'flex' : 'none',
          animation: `${grow} .33s ease-out forwards`,
          bottom: '0',
          borderTop: '2px solid #26a69a',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center'

        }}>
          <Typography
            sx={{
              fontFamily: 'cinzel',
              fontSize: '13px',
              color: '#2dd4bf'
            }}
          >
            Explorar
          </Typography>
        </Box>
      </Box>

    </div>
  )
}
