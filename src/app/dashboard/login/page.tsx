'use client'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cinzel } from '@/utils/fonts';
import useLogin from '@/hooks/useLogin';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Alert } from '@mui/material';
import avatar from '../../../assets/images/gylogo.png';
import Image from 'next/image';
import {Button} from '@mymoid/ui-components'
import useSWR from 'swr';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://gycoding.com">
        GYCoding
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SignIn() {

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    useLogin({ user: data.get('User') as string, password: data.get('password') as string })
      .then((response) => {
        if (response != null) {
          const { username = '', email = '', token = '' } = response || {};
          Cookies.set('session', username! , { expires: 1 });
          Cookies.set('email', email!, { expires: 1 });
          Cookies.set('token', token! , { expires: 1 });

          document.cookie = `token=${JSON.stringify(response.token!)}; path=/`;

          router.push('/dashboard/');
          setError(null);
        }else{
          setError("Invalid User or Password")
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className='bg-zinc-900 rounded-lg mt-4' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
              // loading={}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#4caf50', color: 'white', '&:hover': { backgroundColor: '#43a047' } }}
            >
              Login
            </Button>
            {error == null ? '':
            <Alert sx={{marginBottom: "10px"}} severity="error">
              Ha ocurrido un error o su contraseña es incorrecta
          </Alert>
            }
            <Grid container>
              <Grid item xs>
                <Link href="#" className='text-green-500' variant="body2" sx={{ color: "#4caf50" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" className='text-green-500' variant="body2" sx={{ color: "#4caf50" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}