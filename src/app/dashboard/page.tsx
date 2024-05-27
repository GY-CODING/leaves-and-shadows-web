/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/leaves_and_shadows.png';
import VILH_SPRITE from '../../assets/images/Vilh_character_sprite.png';
import YVES_SPRITE from '../../assets/images/Yves_character_sprite.png';
import gif from '../../assets/video/bg.gif';
import { cinzel, alkhemikal } from '@/utils/fonts';
import {
  FLEX_COLUMN,
  FLEX_ROW_CENTER,
  GROVE_OF_FETTERS_IMG,
  HELHEIM_ICON,
  HELHEIM_IMAGE,
  VANAHEIM_ICON,
  VANAHEIM_IMAGE,
} from '@/utils/global.constants';
import Link from 'next/link';

export default function Home(): JSX.Element {
  const [isGameSelected, setIsGameSelected] = useState<boolean>(true);
  const [characterSelected, setCharacterSelected] = useState<string>('VILH');

  function handleChangeToGame(): void {
    setIsGameSelected(true);
  }
  function handleChangeToHistory(): void {
    setIsGameSelected(false);
  }
  function handleChangeToVilh(): void {
    setCharacterSelected('VILH');
  }
  function handleChangeToYves(): void {
    setCharacterSelected('YVES');
  }

  const gameText =
    'Leaves and Shadows es un videojuego 2D basado en una de las epicas historias de Yves y Vilh, 2 personajes que se embarcan en una aventura basada en la historia de Fall of the Gods cuyas fantasticas cualidades heredadas de su padre Odin y su madre Gullveig les permiten enfrentar a los mas temibles enemigos de los 9 mundos.';
  const gameHistory =
    'Fall of the Gods es una historia basada en la mitologia nordica, en la cual se narra la caida de los dioses y el fin de los 9 mundos. La historia se centra en la lucha de los dioses contra los gigantes con la ayuda una peculiar compañia con poderes inimaginables la cual la conforman: Yves, Vilh, Sveinn, Holger. La historia comienza en Vanaheim, donde comienza la partida para surcar los 9 mundos';
  const VilhText =
    'Vilh es el dios de la magia, uno de los hijos de Odín escondidos en Vanaheim y criado por Gullveig, pose grandes dondes para la magia oscura y el control de la natuzaleza, su poder es tan grande que puede controlar los elementos y la vida misma. Vilh vive en un bosque profundo y magico en Vanaheim donde tiene un arbol magico cuya visibilidad es solo para aquellos pocos a los que puede llamar amigos.';
  const YvesText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, magni explicabo nihil eligendi deserunt mollitia? Qui vero voluptas consectetur natus dolor, necessitatibus suscipit mollitia fugit ratione incidunt modi maxime nostrum, iste aperiam. Harum ratione, aperiam nesciunt praesentium rerum placeat? Placeat obcaecati deserunt sunt cum repellat fuga quis ad officiis pariatur?';
  return (
    <div className="w-screen h-[290vh] overflow-x-hidden flex flex-col m-0 p-0 jusity-start items center z-0">
      <Box
        sx={{ width: '100%', height: '90vh', zIndex: -1, overflowX: 'hidden' }}
      >
        <Image
          src={gif}
          alt="background"
          draggable={false}
          layout="fill"
          objectFit="cover"
          className="blur-[4px] mt-4 overflow-hidden absolute left-0"
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
            overflow: 'hidden',
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
            src={gif}
            draggable={false}
            className="w-10/12 opacity-50"
          />
        </Box>
        <Box
          sx={[
            FLEX_COLUMN,
            {
              width: '35%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
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
          <Box
            sx={[
              FLEX_COLUMN,
              { width: '100%', height: '50%', alignItems: 'center' },
            ]}
          >
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
            {!isGameSelected && (
              <Button
                sx={{
                  marginTop: '1%',
                  border: '1px solid #14b8a6',
                  color: '#14b8a6',
                  width: '50%',
                  '&:hover': {
                    border: '1px solid #14b8a6',
                    backgroundColor: '#14b8a6',
                    color: 'white',
                  },
                }}
                variant="outlined"
              >
                <Link href={'/dashboard/characters'}>Personajes</Link>
              </Button>
            )}
            {isGameSelected && (
              <Button
                sx={{
                  marginTop: '1%',
                  border: '1px solid #14b8a6',
                  color: '#14b8a6',
                  width: '50%',
                  '&:hover': {
                    border: '1px solid #14b8a6',
                    backgroundColor: '#14b8a6',
                    color: 'white',
                  },
                }}
                variant="outlined"
              >
                Guía
              </Button>
            )}
          </Box>
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
            height: '100%',
            zIndex: -2,
            filter: 'blur(6px)',
            opacity: 0.4,
            position: 'absolute',
          }}
        >
          <Image
            className="w-full h-full aspect-video object-cover"
            src={characterSelected === 'VILH' ? VANAHEIM_IMAGE : HELHEIM_IMAGE}
            width={200}
            height={200}
            alt={''}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            overflowX: 'hidden',
            gap: '1rem',
            '@media (max-width: 1024px)': {
              width: '100%',
              height: '100%',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              cursor: 'pointer',
              padding: 4,
              fontFamily: 'cinzel',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}
          >
            PERSONAJES
          </Typography>
          <Box sx={[FLEX_ROW_CENTER, { gap: '1rem' }]}>
            <Box>
              <Box
                sx={{
                  width: 72,
                  filter:
                    characterSelected === 'VILH'
                      ? 'brightness(1)'
                      : 'brightness(.4)',
                  transition: 'all .5s',
                  '&:hover': {
                    filter: 'brightness(1)',
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1024px)': {
                    width: '60px',
                  },
                }}
                component={'img'}
                onClick={handleChangeToVilh}
                src={VANAHEIM_ICON}
              />
              <Typography
                sx={{
                  cursor: 'pointer',
                  padding: 1,
                  fontFamily: 'cinzel',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: characterSelected === 'VILH' ? 'white' : 'gray',
                }}
              >
                VILH
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: 72,
                  filter:
                    characterSelected === 'YVES'
                      ? 'brightness(1)'
                      : 'brightness(.4)',
                  transition: 'all .5s',
                  '&:hover': {
                    filter: 'brightness(1)',
                    cursor: 'pointer',
                  },
                  '@media (max-width: 1024px)': {
                    width: '60px',
                  },
                }}
                onClick={handleChangeToYves}
                component={'img'}
                src={HELHEIM_ICON}
              />
              <Typography
                sx={{
                  cursor: 'pointer',
                  padding: 1,
                  fontFamily: 'cinzel',
                  fontWeight: 'bold',
                  color: characterSelected === 'YVES' ? 'white' : 'gray',
                  textAlign: 'center',
                }}
              >
                YVES
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              cursor: 'pointer',
              width: '60%',
              padding: 1,
              fontFamily: 'cinzel',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              textJustify: 'distribute',
              '@media (max-width: 640px)': {
                fontSize: '13px',
                width: '80%',
              },
            }}
          >
            {characterSelected === 'VILH' ? VilhText : YvesText}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'transparent',
              border:
                characterSelected === 'VILH'
                  ? '1px solid #22c55e'
                  : '1px solid #14b8a6',
              '&:hover': {
                backgroundColor:
                  characterSelected === 'VILH' ? '#22c55e' : '#14b8a6',
              },
            }}
          >
            <Link
              href={
                characterSelected === 'VILH'
                  ? '/dashboard/characters/vilh-vanaheim'
                  : '/dashboard/characters/yves-helheim'
              }
            >
              {characterSelected === 'VILH'
                ? 'Más acerca de Vilh'
                : 'Más acerca de Yves'}
            </Link>
          </Button>
          <Box
            sx={{
              height: '60%',
              left: '20%',
              transform: 'scaleX(-1)',
              imageRendering: 'pixelated',
              transition: '.5s all',
              position: 'absolute',
              opacity: characterSelected === 'VILH' ? 1 : 0,
              zIndex: -1,
              '@media (max-width: 1024px)': {
                height: '50%',
                left: '0%',
              },
              '@media (max-width: 640px)': {
                height: '25%',
                left: '0%',
                top: '210%',
              },
            }}
            component={'img'}
            src={VILH_SPRITE.src}
          />
          <Box
            sx={{
              height: '60%',
              left: '60%',
              imageRendering: 'pixelated',
              transition: '.5s all',
              position: 'absolute',
              opacity: characterSelected === 'YVES' ? 1 : 0,
              overflow: 'hidden',
              zIndex: -1,

              '@media (max-width: 1024px)': {
                height: '50%',
                left: '65%',
              },
              '@media (max-width: 640px)': {
                height: '25%',
                left: '63%',
                top: '210%',
              },
            }}
            component={'img'}
            src={YVES_SPRITE.src}
          />
        </Box>
      </Box>
    </div>
  );
}
