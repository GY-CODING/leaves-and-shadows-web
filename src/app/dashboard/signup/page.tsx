/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { cinzel } from '@/utils/fonts'
import Image from 'next/image'
import avatar from '../../../assets/images/gylogo.png'
import { useRouter } from 'next/navigation'
import { Alert } from '@mui/material'
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function SignUp (): JSX.Element {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const user = data.get('user') as string
    const email = data.get('email') as string
    const password = data.get('password') as string

    if (!emailRegex.test(email)) {
      setError('Email is not valid')
      return
    }
    const res = await fetch('/api/database/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, email, password })

    })
    if (res.ok) {
      router.push('/dashboard/login')
    } else {
      setError('Ha ocurrido un error')
    }
  }
  const handleClickGoogle = async (): Promise<void> => {
    await signIn('google')
    router.push('/dashboard/')
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="user"
                label="Username"
                name="user"
                autoComplete="Username"
                autoFocus
                required
              />
              <TextField
                margin="normal"
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
                required
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#4caf50', color: 'white', '&:hover': { backgroundColor: '#43a047' } }}
              >
                Sign Up
              </Button>
              <Button onClick={handleClickGoogle} startIcon={<GoogleIcon sx={{ color: 'black' }} />} sx={{ width: '100%', bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#E2E2E2' }, display: 'flex', alignItems: 'center', justifyContent: 'space-eveny' }}>LogIn with Google</Button>
              <br />
              {(error.length > 0) && <Alert severity="error">{error}</Alert>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" className='text-green-500' variant="body2" sx={{ color: '#4caf50' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/dashboard/login" className='text-green-500' variant="body2" sx={{ color: '#4caf50' }}>
                    {'You have an account? Login'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}
