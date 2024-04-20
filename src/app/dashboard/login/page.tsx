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
import { Alert, IconButton } from '@mui/material'
import avatar from '../../../assets/images/gylogo.png'
import Image from 'next/image'
import { Button } from '@mymoid/ui-components'
import gif from '../../../assets/video/bg.gif'
import { signIn } from 'next-auth/react'
import GoogleIcon from '@mui/icons-material/Google'

function Copyright (props: any): JSX.Element {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
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
    router.push('/dashboard/')
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: -3 }}>
          <Image
            src={gif}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="blur"
          />
        </Box>
        <Container sx={{
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }} className='rounded-lg mt-4 bg-zinc-900 bg-opacity-60' component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Image className='m-2' src={avatar} alt={''} width={60} height={10} />
            <Typography component="h1" variant="h5" className={`${cinzel.className}`} sx={{ fontFamily: 'cinzel' }}>
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="User"
                label="User"
                name="User"
                autoComplete="User"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#4caf50', color: 'white', '&:hover': { backgroundColor: '#43a047' } }}
              >
                Login
              </Button>
              <Button onClick={handleClickGoogle} startIcon={<GoogleIcon sx={{ color: 'black' }} />} sx={{ width: '100%', bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'white' }, display: 'flex', alignItems: 'center', justifyContent: 'space-eveny' }}>LogIn with Google</Button>
              <br />
              {error == null
                ? ''
                : <Alert sx={{ marginBottom: '10px' }} severity="error">
                  {error}
                </Alert>
              }
              <Grid container>
                <Grid item xs>
                  <Link href="#" className='text-green-500' variant="body2" sx={{ color: '#4caf50' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/dashboard/signup" className='text-green-500' variant="body2" sx={{ color: '#4caf50' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Box>
  )
}
