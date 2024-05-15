'use client'
import React, { useEffect } from 'react'
// import Image from 'next/image'
import { getCharacter } from '@/services/character'
import { type Character } from '@/domain/character'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import {
  ACCURACY_ICON,
  DAMAGE_ICON,
  DEFENSE_ICON,
  ETHER_ICON,
  LIFE_ICON,
  MOVEMENT_ICON
} from '@/utils/global.constants'
import {
  returnPrimaryColorByWorld,
  returnSecondaryColorByWorld
} from '@/utils/functions'

export default function page ({
  params
}: {
  params: { character: string }
}): JSX.Element {
  const { character } = params
  const [isLoading, setIsLoading] = React.useState(true)
  const [datos, setdatos] = React.useState<Character>()
  const primaryColor = returnPrimaryColorByWorld(datos?.world)
  const secondaryColor = returnSecondaryColorByWorld(datos?.world)

  const boxTextStyles = {
    width: '100%',
    height: '20%',
    backgroundColor: '#0a0a0a',
    borderRadius: '10px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  const textStyles = { fontFamily: 'cinzel', color: primaryColor }
  const statsStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.5rem',
    '@media (max-width: 1000px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
  useEffect(() => {
    async function fetchCharacter (): Promise<void> {
      const characterFetched = await getCharacter(character)
      setdatos(characterFetched)
      setIsLoading(false)
    }
    void fetchCharacter()
  }, [])

  return isLoading
    ? (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        '@media (max-width: 1000px)': {
          height: '100px',
          backgroundColor: '#171717'

        }
      }}
    >
      <CircularProgress />
    </Box>
      )
    : (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717'
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '60%',
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: '2fr 6fr 2fr',
          '@media (max-width: 1000px)': {
            width: '90%',
            height: '90%',
            gridTemplateColumns: 'none',
            gridTemplateRows: '300px 200px 100px',
            gridAutoFlow: 'row',
            gap: '1rem',
            '> :nth-of-type(1)': { order: 2 },
            '> :nth-of-type(2)': { order: 1 },
            '> :nth-of-type(3)': { order: 3 }

          }
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            '@media (max-width: 1000px)': {
              display: 'flex',
              flexDirection: 'row'
            },
            '@media (max-width: 550px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Box sx={[boxTextStyles, {
            '@media (max-width: 1000px)': {
              height: '100%',
              width: '50%'
            },
            '@media (max-width: 550px)': {
              width: '100%',
              height: '100%'
            }
          }]}>
            <Typography sx={{ fontFamily: 'cinzel', color: primaryColor }}>
              {'RAZA'}
            </Typography>
            <Typography sx={{ fontFamily: 'cinzel', color: secondaryColor }}>
              {'DIOS AESIR'}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: '#0a0a0a',
              width: '100%',
              height: '80%',
              borderRadius: '10px',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              '@media (max-width: 1000px)': {
                height: '100%'
              }

            }}
          >
            <Typography sx={{ fontFamily: 'cinzel', color: primaryColor }}>
              Player Stats
            </Typography>
            <List sx={{
              '@media (max-width: 1000px)': {
                display: 'flex',
                flexDirection: 'row'
              }
            }}>
              <ListItem sx={statsStyles}>
                <Image src={LIFE_ICON} width={20} height={20} alt={''}></Image>
                <Typography sx={textStyles}>{datos?.stats.life}</Typography>
              </ListItem>
              <ListItem sx={statsStyles}>
                <Image
                  src={DAMAGE_ICON}
                  width={20}
                  height={20}
                  alt={''}
                ></Image>
                <Typography sx={textStyles}>{datos?.stats.attack}</Typography>
              </ListItem>
              <ListItem sx={statsStyles}>
                <Image
                  src={ACCURACY_ICON}
                  width={20}
                  height={20}
                  alt={''}
                ></Image>
                <Typography sx={textStyles}>
                  {datos?.stats.accuracy}
                </Typography>
              </ListItem>
              <ListItem sx={statsStyles}>
                <Image
                  src={DEFENSE_ICON}
                  width={20}
                  height={20}
                  alt={''}
                ></Image>
                <Typography sx={textStyles}>
                  {datos?.stats.defense}
                </Typography>
              </ListItem>
              <ListItem sx={statsStyles}>
                <Image src={ETHER_ICON} width={20} height={20} alt={''}></Image>
                <Typography sx={textStyles}>{datos?.stats.ether}</Typography>
              </ListItem>
              <ListItem sx={statsStyles}>
                <Image
                  src={MOVEMENT_ICON}
                  width={20}
                  height={20}
                  alt={''}
                ></Image>
                <Typography sx={textStyles}>
                  {datos?.stats.movement}
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Box
            sx={[
              {
                backgroundColor: '#0a0a0a',
                width: '100%',
                height: '40%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                '@media (max-width: 1000px)': {
                  flexDirection: 'row'
                }
              }
            ]}
          >
            <Box
              component="img"
              draggable={false}
              sx={{
                height: '120px',
                width: '120px',
                borderRadius: '50%',
                position: 'relative',
                top: '-50%',
                border: `2px solid ${primaryColor} `,
                '@media (max-width: 1000px)': {
                  position: 'static',
                  top: 'initial',
                  flexDirection: 'row',
                  width: '75px',
                  height: '75px'
                }
              }}
              alt={datos?.image}
              src={datos?.image}
            />
            <Box
              sx={[
                {
                  position: 'absolute',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  textAlign: 'center',
                  marginTop: '2.5rem',
                  '@media (max-width: 1000px)': {
                    position: 'static',
                    marginTop: '0'
                  }
                }
              ]}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'cinzel',
                  color: primaryColor,
                  fontWeight: 'bold'
                }}
              >
                {datos?.name.toUpperCase()}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'cinzel',
                  color: secondaryColor,
                  fontSize: '16px'
                }}
              >{`"${datos?.title}"`}</Typography>
            </Box>
          </Box>
          <Box
            sx={[
              {
                backgroundColor: '#0a0a0a',
                width: '100%',
                height: '60%',
                display: 'flex',
                borderRadius: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }
            ]}
          >
            <Box
              draggable={false}
              sx={{
                objectFit: 'cover',
                width: '100%',
                position: 'absolute',
                opacity: '.2',
                backgroundPosition: '67.4897% 14.6444%',
                filter: 'brightness(.3) grayscale(100%)'
              }}
              component={'img'}
              src={datos?.image}
            ></Box>
            <Typography
              sx={{
                fontFamily: 'cinzel',
                position: 'absolute',
                color: primaryColor,
                textAlign: 'center',
                marginX: '30px',
                '@media (max-width: 600px)': {
                  fontSize: '12px'
                }
              }}
            >{`"${datos?.description}"`}</Typography>
          </Box>
        </Box>
        <Box
          sx={[
            statsStyles,
            {
              backgroundColor: '#0a0a0a',
              borderRadius: '10px',
              flexDirection: 'column',
              gap: '0',
              '@media (max-width: 600px)': {
                height: '50%',
                fontSize: '12px'
              }
            }
          ]}
        >
          <Typography sx={{
            fontFamily: 'cinzel',
            color: primaryColor,
            '@media (max-width: 600px)': {
              fontSize: '12px'
            }
          }}>
            {'WORLD'}
          </Typography>
          <Typography sx={{
            fontFamily: 'cinzel',
            color: secondaryColor,
            '@media (max-width: 600px)': {
              fontSize: '12px'
            }
          }}>
            {datos?.world.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </Box>
      )
}
