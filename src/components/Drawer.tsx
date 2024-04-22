import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { cinzel } from '@/utils/fonts'
import { Avatar, Button, FormControl, TextField, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'
import { useSession } from 'next-auth/react'

interface TemporaryDrawerProps {
  logout: () => void
}
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function TemporaryDrawer ({ logout }: TemporaryDrawerProps): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const { data: session } = useSession()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const DrawerList = (
    <Box sx={{
      width: 450,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      backdropFilter: 'blur(10px)',
      gap: 2,
      '&.MuiBox-root': { backgroundColor: 'rgb(9 9 11)' }
    }}
      role="presentation" onClick={toggleDrawer(false)}>

      <FormControl sx={{
        width: 450,
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        gap: 2
      }}>
        <ThemeProvider theme={darkTheme}>
          <Avatar
          alt={(session?.user?.name) ?? ''}
          src={(session?.user?.image) ?? ''}
          sx={{ width: '100px', height: '100px' }} />
          <Typography sx={{ color: 'white' }} variant='h4' className={cinzel.className}>User Details</Typography>
          <TextField
            id="Username"
            label="Username"
            InputLabelProps={{
              shrink: true
            }}
            disabled
            fullWidth
            variant="outlined"
            sx={{ width: '90%' }}
            defaultValue={(session?.user?.name) ?? 'No session'}
            value={(session?.user?.name) ?? 'No session'}
          />
          <TextField
            id="email"
            label="Email"
            InputLabelProps={{
              shrink: true
            }}
            disabled
            fullWidth
            variant="outlined"
            sx={{ width: '90%' }}
            defaultValue={(session?.user?.email) ?? 'No session'}
            value={(session?.user?.email) ?? 'No session'}
            type='email'
          />
        </ThemeProvider>
      </FormControl>

      <button onClick={logout} className={`w-40 h-12 rounded bg-zinc-800 flex text-white text-center justify-center items-center ${cinzel.className} hover:bg-green-500 transition duration-500 ease-in-out justify-self-end`}>
        Logout
      </button>

    </Box>
  )

  return (

    <>
      {/* <button onClick={toggleDrawer(true)} className={`${cinzel.className} w-40 h-12 bg-zinc-950 text-white hover:bg-green-500 hover:text-white rounded text-center items-center justify-center flex transition duration-500 ease-in-out"`}>{(session?.user?.name)}</button> */}
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          fontFamily: cinzel.className,
          width: '10rem',
          height: '3rem',
          backgroundColor: '#09090b',
          color: 'white',
          transitionDuration: '500ms',
          '&:hover': {
            backgroundColor: '#22c55e',
            color: 'white',
            transitionDuration: '500ms'

          },
          borderRadius: 'rounded',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
        startIcon={<Avatar sx={{ width: 24, height: 24 }} alt={session?.user?.name?.toString()} src={session?.user?.image?.toString()} />
        }>{(session?.user?.name)?.toString().split(' ')[0] ?? ''}</Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}
