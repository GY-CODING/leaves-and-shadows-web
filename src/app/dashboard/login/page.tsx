/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { cinzel } from '@/utils/fonts'
import { useRouter } from 'next/navigation'
import { Alert, Avatar, IconButton } from '@mui/material'
import avatar from '../../../assets/images/gylogo.png'
import Image from 'next/image'
import { Button } from '@mymoid/ui-components'
import gif from '../../../assets/video/bg.gif'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
const GY_ICON =
  'https://lh3.googleusercontent.com/a/ACg8ocJrdg1JZzP7rkgxnBCnr9xI-jeSnmoH-dZ82-SBD_3dbK4m7kI=s96-c'

function Copyright (props: any): JSX.Element {
  return (
    <Typography
      variant="body2"
      color="black"
      align="center"
      sx={{ mt: 0, mb: 4 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://gycoding.com">
        GYCoding
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const defaultTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function SignIn (): JSX.Element {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (emailRegex.test(data.get('User')?.toString() ?? '')) {
      data.set('Email', data.get('User') as string)
      data.delete('User')
    } else {
      data.set('user', data.get('User') as string)
      data.delete('Email')
    }
    const res = await signIn('credentials', {
      email: data.get('Email') as string,
      user: data.get('User') as string,
      password: data.get('password') as string,
      redirect: false
    })

    if (res?.error) {
      setError('Invalid User or Password')
    } else {
      console.log('enviando al /dashboard')
      router.push('/dashboard/')
    }
  }

  const handleClickGoogle = async (): Promise<void> => {
    await signIn('google')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -3
          }}
        >
          <Image
            src={gif}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="blur"
          />
        </Box>
        <Container
          sx={{
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          className="rounded-xl sm:mt-4 sm:h-3/5 h-full flex flex-col justify-between bg-white bg-opacity-100"
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image
              className="m-2"
              src={avatar}
              alt={''}
              width={70}
              height={70}
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: '',
                letterSpacing: '1px',
                fontWeight: '400',
                color: 'black'
              }}
            >
              WELCOME TO
            </Typography>
            <Typography
              variant="h5"
              sx={{
                letterSpacing: '2px',
                fontWeight: 'bold',
                color: '#6b21a8',
                textAlign: 'center',
                marginTop: '-1rem'
              }}
            >
              GYCODING
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
              >
                <Button
                  onClick={handleClickGoogle}
                  startIcon={<FcGoogle className="w-7" />}
                  sx={{
                    width: '100%',
                    bgcolor: '#e5e7eb',
                    color: 'black',
                    '&:hover': { bgcolor: '#18181b', color: 'white' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  Continue with Google
                </Button>
                <Button
                  disabled
                  startIcon={
                    <Avatar sx={{ width: 24, height: 24 }} src={GY_ICON} />
                  }
                  sx={{
                    width: '100%',
                    bgcolor: '#white',
                    color: 'black',
                    '&:hover': { bgcolor: '#E2E2E2', color: 'black' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ':disabled': { color: 'black', opacity: '30%' }
                  }}
                >
                  SignUp with GYCoding
                </Button>
              </Box>
              <br />
              {error == null
                ? (
                    ''
                  )
                : (
                <Alert sx={{ marginBottom: '10px' }} severity="error">
                  {error}
                </Alert>
                  )}
            </Box>
          </Box>
          <Copyright />
        </Container>
      </ThemeProvider>
    </Box>
  )
}
