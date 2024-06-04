/* eslint-disable @typescript-eslint/no-confusing-void-expression */
'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/images/leaves_and_shadows.png';
import VILH_SPRITE from '../../assets/images/Vilh_character_sprite.png';
import YVES_SPRITE from '../../assets/images/Yves_character_sprite.png';
import { cinzel, alkhemikal } from '@/utils/fonts';
import {
  CHARACTERS,
  FLEX_COLUMN,
  FLEX_ROW_CENTER,
  GROVE_OF_FETTERS_IMG,
  HELHEIM_ICON,
  VANAHEIM_ICON,
  HELHEIM_IDLE,
  START_MENU,
  VANAHEIM_IDLE,
  VILH_IDLE,
  VILH_MEETS_YVES,
  YVES_IDLE,
  GAME_TEXT,
  STORY_TEXT,
  VILH_TEXT,
  YVES_TEXT,
  FLEX_COLUMN_CENTER,
} from '@/utils/global.constants';
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

import Link from 'next/link';

export default function Home(): JSX.Element {
  const [isGameSelected, setIsGameSelected] = useState<boolean>(true);
  const [characterSelected, setCharacterSelected] = useState<string>('VILH');

  function handleDownloadMac(): void {
    void window.open(
      'https://github.com/GY-CODING/leaves-and-shadows/releases/download/V1.0.0/leaves_and_shadows_mac_arm.zip',
    );
  }
  function handleDownloadWindows(): void {
    void window.open(
      'https://github.com/GY-CODING/leaves-and-shadows/releases/download/V1.0.0/leaves_and_shadows_win64.zip',
    );
  }
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

  return (
    <div className="w-screen h-[290vh] overflow-x-hidden flex flex-col m-0 p-0 jusity-start items center z-0">
      <Box
        sx={{ width: '100%', height: '90vh', zIndex: -1, overflowX: 'hidden' }}
      >
        <video
          src={START_MENU}
          draggable={false}
          autoPlay
          muted
          loop
          className="blur-[3px] mt-4 overflow-hidden absolute left-0 top-0 min-w-full min-h-full w-auto h-auto object-cover"
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
            alt={'logo'}
          />
          <h3
            className={`${alkhemikal.className} sm:text-7xl text-4xl text-white`}
          >
            Leaves & Shadows
          </h3>
          <div className="flex flex-row gap-2">
            <Button
              size="large"
              variant="contained"
              onClick={handleDownloadWindows}
              startIcon={
                <MicrosoftIcon className="color-white m-0 p-0 text-center" />
              }
              sx={{
                height: '3rem',
                lineHeight: 1.5,
                backgroundColor: '#22c55e',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4ade80',
                },
              }}
            >
              <span className="relative top-[1px]">DOWNLOAD</span>
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={handleDownloadMac}
              startIcon={
                <AppleIcon className="color-white m-0 p-0 text-center" />
              }
              sx={{
                height: '3rem',
                lineHeight: 1.5,
                backgroundColor: '#22c55e',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4ade80',
                },
              }}
            >
              <span className="relative top-[1px]">DOWNLOAD</span>
            </Button>
          </div>
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
              position: 'relative',
              overflow: 'hidden',
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
          <video
            width={200}
            height={200}
            src={VILH_MEETS_YVES}
            autoPlay
            loop
            muted
            draggable={false}
            className="w-10/12 inset-0 border border-white rounded-lg opacity-80"
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
              className={cinzel.className}
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
              className={cinzel.className}
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
              className={cinzel.className}
              sx={{
                fontFamily: 'cinzel',
                color: 'white',
                transition: '.5s',
                textAlign: 'justify',
                textJustify: 'distribute',
              }}
            >
              {isGameSelected ? GAME_TEXT : STORY_TEXT}
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
            flexDirection: 'column',
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
            position: 'absolute',
          }}
        >
          <video
            className="w-full h-full aspect-video object-cover"
            src={
              characterSelected === CHARACTERS.VILH
                ? VANAHEIM_IDLE
                : HELHEIM_IDLE
            }
            autoPlay
            loop
            muted
            width={200}
            height={200}
          />
        </Box>
        <Typography
          className={`${cinzel.className}`}
          variant="h5"
          color={'white'}
          sx={{
            fontFamily: 'cinzel',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '2%',
          }}
        >
          PERSONAJES
        </Typography>
        <Box
          sx={[
            FLEX_ROW_CENTER,
            {
              gap: '1rem',
              width: '100%',
              height: '10%',
            },
          ]}
        >
          <Box
            sx={{
              height: '250%',
              transform: 'scaleX(-1)',
              imageRendering: 'pixelated',
              transition: '.5s all',
              opacity: characterSelected === CHARACTERS.VILH ? 1 : 0,
              zIndex: -1,
              '@media (max-width: 500px)': {
                display: 'none',
              },
            }}
            component={'img'}
            src={VILH_SPRITE.src}
            alt="VilhSprite"
            draggable={false}
          />
          <Box>
            <Box
              sx={{
                width: 72,
                filter:
                  characterSelected === CHARACTERS.VILH
                    ? 'brightness(1)'
                    : 'brightness(.4)',
                // transition: 'all .5s',
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
              draggable={false}
              alt="VanaheimIcon"
            />
            <Typography
              className={cinzel.className}
              sx={{
                cursor: 'pointer',
                padding: 1,
                fontFamily: 'cinzel',
                fontWeight: 'bold',
                textAlign: 'center',
                color: characterSelected === CHARACTERS.VILH ? 'white' : 'gray',
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
                  characterSelected === CHARACTERS.YVES
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
              draggable={false}
              alt="HelheimIcon"
            />
            <Typography
              className={cinzel.className}
              sx={{
                cursor: 'pointer',
                padding: 1,
                fontFamily: 'cinzel',
                fontWeight: 'bold',
                color: characterSelected === CHARACTERS.YVES ? 'white' : 'gray',
                textAlign: 'center',
              }}
            >
              YVES
            </Typography>
          </Box>
          <Box
            sx={{
              height: '250%',
              imageRendering: 'pixelated',
              transition: '.5s all',
              opacity: characterSelected === CHARACTERS.YVES ? 1 : 0,
              overflow: 'hidden',
              zIndex: -1,
              '@media (max-width: 500px)': {
                display: 'none',
              },
            }}
            component={'img'}
            src={YVES_SPRITE.src}
            alt="YvesSprite"
            draggable={false}
          />
        </Box>
        <Box sx={[FLEX_COLUMN_CENTER, { gap: '1rem' }]}>
          <Typography
            className={cinzel.className}
            sx={{
              cursor: 'pointer',
              width: '50%',
              padding: 1,
              fontFamily: 'cinzel',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              pointerEvents: 'none',
              textJustify: 'distribute',
              '@media (max-width: 640px)': {
                fontSize: '13px',
                width: '80%',
              },
            }}
          >
            {characterSelected === CHARACTERS.VILH ? VILH_TEXT : YVES_TEXT}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'transparent',
              border:
                characterSelected === CHARACTERS.VILH
                  ? '1px solid #22c55e'
                  : '1px solid #14b8a6',
              '&:hover': {
                backgroundColor:
                  characterSelected === CHARACTERS.VILH ? '#22c55e' : '#14b8a6',
              },
            }}
          >
            <Link
              href={
                characterSelected === CHARACTERS.VILH
                  ? '/dashboard/characters/vilh-vanaheim'
                  : '/dashboard/characters/yves-helheim'
              }
            >
              {characterSelected === CHARACTERS.VILH
                ? 'Más acerca de Vilh'
                : 'Más acerca de Yves'}
            </Link>
          </Button>
          <video
            src={characterSelected === CHARACTERS.VILH ? VILH_IDLE : YVES_IDLE}
            autoPlay
            loop
            muted
            className={`w-[70%] sm:w-3/4 xl:w-[40%] border ${characterSelected === CHARACTERS.VILH ? 'border-green-500' : 'border-teal_600'} rounded-lg opacity-80`}
          />
        </Box>
      </Box>
    </div>
  );
}
