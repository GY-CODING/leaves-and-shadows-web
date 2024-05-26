/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { cinzel } from '@/utils/fonts';
import {
  Avatar,
  Button,
  FormControl,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

interface TemporaryDrawerProps {
  logout: () => void;
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function TemporaryDrawer({
  logout,
}: TemporaryDrawerProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const { user } = useUser();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: isMobileDevice ? '100%' : '450px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backdropFilter: 'blur(10px)',
        gap: 2,

        '&.MuiBox-root': { backgroundColor: 'rgb(9 9 11)' },
      }}
      role="presentation"
    >
      <Button
        sx={{
          color: 'white',
          width: '24px',
          position: 'absolute',
          top: '24px',
          right: '24px',
        }}
      >
        <CloseIcon onClick={toggleDrawer(false)} />
      </Button>
      <FormControl
        sx={{
          width: isMobileDevice ? '100vw' : '450px',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          gap: 2,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <Avatar
            alt={user?.nickname ?? ''}
            src={user?.picture ?? ''}
            sx={{ width: '100px', height: '100px' }}
          />
          <Typography
            sx={{ color: 'white' }}
            variant="h4"
            className={cinzel.className}
          >
            User Details
          </Typography>
          <TextField
            id="Username"
            label="Username"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
            fullWidth
            variant="outlined"
            sx={{ width: '90%' }}
            defaultValue={user?.nickname ?? 'No session'}
            value={user?.nickname ?? 'No session'}
          />
          <TextField
            id="email"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
            disabled
            fullWidth
            variant="outlined"
            sx={{ width: '90%' }}
            defaultValue={user?.email ?? 'No session'}
            value={user?.email ?? 'No session'}
            type="email"
          />
          <Button
            startIcon={<EmojiEventsIcon sx={{ position: 'relative' }} />}
            onClick={toggleDrawer(false)}
            sx={{
              width: '90%',
              height: '56px',
              fontFamily: cinzel.className,
              color: 'white',
              backgroundColor: '#27272a',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: '#22c55e',
                color: 'white',
                transitionDuration: '500ms',
              },
            }}
          >
            <Link
              className="w-10/12 h-full text-center flex items-center justify-center"
              href="/dashboard/achievements"
            >
              Achievements
            </Link>
          </Button>
        </ThemeProvider>
      </FormControl>

      <button
        onClick={logout}
        className={`w-40 h-12 rounded bg-zinc-800 flex text-white text-center justify-center items-center ${cinzel.className} hover:bg-green-500 transition duration-500 ease-in-out justify-self-end`}
      >
        Logout
      </button>
    </Box>
  );

  return (
    <>
      {/* <button onClick={toggleDrawer(true)} className={`${cinzel.className} w-40 h-12 bg-zinc-950 text-white hover:bg-green-500 hover:text-white rounded text-center items-center justify-center flex transition duration-500 ease-in-out"`}>{(session?.user?.name)}</button> */}
      <Button
        className="pointer-events-auto"
        onClick={toggleDrawer(true)}
        sx={{
          fontFamily: cinzel.className,
          width: '10rem',
          height: '3rem',
          backgroundColor: '#09090b',
          color: 'white',
          pointerEvents: 'auto',
          zIndex: 1,
          transitionDuration: '500ms',
          '&:hover': {
            backgroundColor: '#22c55e',
            color: 'white',
            transitionDuration: '500ms',
          },
          borderRadius: 'rounded',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginRight: '1rem',
        }}
        startIcon={
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt={user?.nickname?.toString()}
            src={user?.picture?.toString()}
          />
        }
      >
        {user?.nickname}
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
