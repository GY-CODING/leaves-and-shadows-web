import { def, grow, returnColorWorld } from '@/utils/functions'
import { Box, Typography } from '@mui/material'
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

  return (
    <div
      className={
        'character-li w-full h-14 sm:w-52 sm:h-80 relative flex-row flex sm:flex-col sm:items-center sm:justify-center hover:scale-105 transition-all border border-transparent duration-500 '
      }
      style={{
        borderColor: isClicked ? returnColorWorld('SX', world) : 'transparent'
      }}
      onMouseEnter={() => {
        setIsClicked(true)
      }}
      onMouseLeave={() => {
        setIsClicked(false)
      }}
      id={`${name} characters`}
      data-value={world.toLowerCase()}
    >
      <Box
        component="img"
        draggable={false}
        sx={{
          height: '100%',
          width: '130%',
          objectFit: 'cover',
          '@media (max-width: 640px)': {
            width: '30%',
            flexDirection: 'row'
          }
        }}
        alt={'Jormungander'}
        src={imagen}
      />
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
          borderTop: `2px solid ${returnColorWorld('SX', world)}`,
          justifyContent: 'start',
          overflow: 'hidden',
          '@media (max-width: 640px)': {
            position: 'static',
            bottom: 'initial',
            height: '100%',
            width: '100%',
            border: `0px solid ${returnColorWorld('SX', world)}`,
            flexDirection: 'row'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: isClicked ? '60%' : '100%',
            '@media (max-width: 640px)': {
              height: isClicked ? '100%' : '100%',
              width: '50%'
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'cinzel',
              fontWeight: 'bold',
              color: returnColorWorld('SX', world)
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'cinzel', color: 'white', fontSize: '13px' }}
          >
            {world}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: isClicked ? '40%' : '0%',
            opacity: '0',
            display: isClicked ? 'flex' : 'none',
            animation: `${grow} .33s ease-out forwards`,
            bottom: '0',
            borderTop: `2px solid ${returnColorWorld('SX', world)}`,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: returnColorWorld('SX', world),
            cursor: 'pointer',
            '@media (max-width: 640px)': {
              display: 'flex',
              height: '100%',
              position: 'static',
              animation: `${def} .33s ease-out forwards`,
              width: isClicked ? '50%' : '45%',
              transition: 'all 0.5s'
            }
          }}
        >
          <Typography
            sx={{
              fontFamily: 'cinzel',
              fontSize: '13px',
              color: 'inherit'
            }}
          >
            Explorar
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
