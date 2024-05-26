/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/leaves_and_shadows.png';
import gif from '../../assets/video/bg.gif';
import GAME_IMAGE from '../../assets/images/game_image.png';
import { cinzel, alkhemikal } from '@/utils/fonts';
import {
  FLEX_COLUMN,
  FLEX_ROW_CENTER,
  GROVE_OF_FETTERS_IMG,
} from '@/utils/global.constants';

export default function Home(): JSX.Element {
  const [isGameSelected, setIsGameSelected] = useState<boolean>(true);
  function handleChangeToGame(): void {
    setIsGameSelected(true);
  }
  function handleChangeToHistory(): void {
    setIsGameSelected(false);
  }
  const gameText =
    'Leaves and Shadows es un videojuego 2D basado en una de las epicas historias de Yves y Vilh, 2 personajes que se embarcan en una aventura basada en la historia de Fall of the Gods cuyas fantasticas cualidades heredadas de su padre Odin y su madre Gullveig les permiten enfrentar a los mas temibles enemigos de los 9 mundos.';
  const gameHistory =
    'Fall of the Gods es una historia basada en la mitologia nordica, en la cual se narra la caida de los dioses y el fin de los 9 mundos. La historia se centra en la lucha de los dioses contra los gigantes con la ayuda una peculiar compañia con poderes inimaginables la cual la conforman: Yves, Vilh, Sveinn, Holger. La historia comienza en Vanaheim, donde comienza la partida para surcar los 9 mundos';

  return (
    <div className="w-screen h-[300vh] overflow-x-hidden flex flex-col m-0 p-0 jusity-start items center z-0">
      <Box sx={{ width: '100%', height: '90vh', zIndex: -1 }}>
        <Image
          src={gif}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="blur mt-4 overflow-hidden"
        />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'start',
            marginTop: '3rem',
            '@media (max-width: 1024px)': {
              height: '90%',
            },
          }}
        >
          <Image
            draggable={false}
            className="sm:w-2/12 w-1/3 z-0"
            src={logo}
            width={200}
            height={200}
            alt={''}
          />
          <h3
            className={`${alkhemikal.className} sm:text-7xl text-4xl text-white`}
          >
            Leaves & Shadows
          </h3>
          <button
            className={`${cinzel.className} w-32 h-12 rounded bg-green-600 text-white hover:bg-green-500 ease-in-out transition-all duration-500 `}
          >
            Download
          </button>
        </Box>
      </Box>

      <Box
        sx={[
          {
            width: '100%',
            height: '100vh',
            zIndex: -2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
              justifyContent: 'center',
            },
          },
        ]}
      >
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            zIndex: -1,
            position: 'absolute',
            filter: 'grayscale(90%)',
            opacity: 0.1,
          }}
        >
          <Image
            src={GROVE_OF_FETTERS_IMG}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="mt-4 overflow-hidden"
          />
        </Box>
        <Box
          sx={[
            FLEX_ROW_CENTER,
            {
              width: '55%',
              height: '100%',
              '@media (max-width: 1024px)': {
                width: '80%',
                height: '40%',
              },
              '@media (max-width: 640px)': {
                width: '80%',
                height: '20%',
              },
            },
          ]}
        >
          <Image
            width={200}
            height={200}
            alt="background"
            src={GAME_IMAGE.src}
            className="w-10/12"
          />
        </Box>
        <Box
          sx={[
            FLEX_COLUMN,
            {
              width: '35%',
              height: '100%',
              justifyContent: 'center',
              gap: '2rem',
              '@media (max-width: 1024px)': {
                width: '80%',
                height: '50%',
              },
            },
          ]}
        >
          <Box
            sx={[
              FLEX_ROW_CENTER,
              { width: '100%', height: '20%', gap: '2rem', zIndex: 3 },
            ]}
          >
            <Typography
              onClick={handleChangeToGame}
              variant="h5"
              sx={{
                cursor: 'pointer',
                padding: 2,
                fontFamily: 'cinzel',
                fontWeight: 'bold',
                color: isGameSelected ? 'white' : 'gray',
                borderBottom: isGameSelected
                  ? '2px solid white'
                  : '2px solid transparent',
                transition: '.5s',
              }}
            >
              Juego
            </Typography>
            <Typography
              onClick={handleChangeToHistory}
              variant="h5"
              sx={{
                cursor: 'pointer',
                padding: 2,
                fontFamily: 'cinzel',
                fontWeight: 'bold',
                color: isGameSelected ? 'gray' : 'white',
                borderBottom: !isGameSelected
                  ? '2px solid white'
                  : '2px solid transparent',
                transition: '.5s',
              }}
            >
              Historia
            </Typography>
          </Box>
          <Box sx={[FLEX_COLUMN, { width: '100%', height: '50%' }]}>
            <Typography
              sx={{
                fontFamily: 'cinzel',
                color: 'white',
                transition: '.5s',
                textAlign: 'justify',
                textJustify: 'distribute',
              }}
            >
              {isGameSelected ? gameText : gameHistory}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
