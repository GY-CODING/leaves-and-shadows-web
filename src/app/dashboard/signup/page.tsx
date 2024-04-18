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
import useRegister from '@/hooks/useRegister'
import Image from 'next/image'
import avatar from '../../../assets/images/gylogo.png'
import { useRouter } from 'next/navigation'
import { Alert } from '@mui/material'
import gif from '../../../assets/video/bg.gif'

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      void useRegister({ user: data.get('user') as string, email: data.get('email') as string, password: data.get('password') as string })
        .then((response) => {
          if (response === '0') {
            router.push('/dashboard/login')
          } else {
            setError('Invalid User or Password')
          }
        })
    } catch (error) {
      console.error(error)
    }
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
          className="blur pr-40"
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
            />
            <TextField
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
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
              Sign Up
            </Button>
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
