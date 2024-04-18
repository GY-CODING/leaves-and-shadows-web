import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { cinzel } from '@/utils/fonts';
import { getSession } from '@/utils/types';
import { session } from '@/utils/types';
import { FormControl, IconButton, SwipeableDrawer, TextField, ThemeProvider, Tooltip, Typography, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { ContentCopyIcon, InputAdornment } from '@mymoid/ui-components';
import { Visibility, VisibilityOff } from '@mui/icons-material';


interface TemporaryDrawerProps {
    logout: () => void;
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export default function TemporaryDrawer({ logout }: TemporaryDrawerProps) {
    const [open, setOpen] = React.useState(false);
    const [session, setSession] = useState<session | null>(getSession());
    const [showToken, setShowToken] = useState<Boolean>(false);


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setShowToken(!showToken);
    };

    const handleSetClipboardId = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        navigator.clipboard.writeText(session!.user.token as string);
    };


    const DrawerList = (
        <Box sx={{
            width: 450,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backdropFilter: "blur(10px)",
            gap: 2,
            '&.MuiBox-root': { backgroundColor: "rgb(9 9 11)" }
        }}
            role="presentation" onClick={toggleDrawer(false)}>

            <FormControl sx={{
                width: 450,
                height: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                gap:2
            }}>
            <ThemeProvider theme={darkTheme}>
                <Typography sx={{ color: "white" }} variant='h4' className={cinzel.className}>User Details</Typography>
                <TextField
                    id="Username"
                    label="Username"
                    InputLabelProps={{
                        shrink: true
                    }}
                    disabled
                    fullWidth
                    variant="outlined"
                    sx={{ width: "90%" }}
                    defaultValue={session ? session!.user.username : 'No session'}
                    value={session ? session!.user.username : 'No session'}
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
                    sx={{ width: "90%" }}
                    defaultValue={session ? session!.user.email : 'No session'}
                    value={session ? session!.user.email : 'No session'}
                    type='email'
                />
                <TextField
                    id="token"
                    label="Token"
                    disabled
                    fullWidth
                    variant="outlined"
                    sx={{ width: "90%" }}
                    defaultValue={session ? session!.user.token : 'No session'}
                    value={session ? session!.user.token : 'No session'}
                    type={showToken ? 'text' : 'password'}
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Tooltip title="Copy">
                                <IconButton
                                    size="small"
                                    onClick={(event) => handleSetClipboardId(event)}
                                    edge="end">
                                    <ContentCopyIcon fontSize='small' />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title={showToken? 'hide token': 'show token'}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showToken ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </Tooltip>

                            </InputAdornment>
                        ),
                    }}
                />
            </ThemeProvider>
            </FormControl>

            <button onClick={logout} className={`w-40 h-12 rounded bg-zinc-800 flex text-white text-center justify-center items-center ${cinzel.className} hover:bg-green-500 transition duration-500 ease-in-out justify-self-end`}>
                Logout
            </button>

        </Box>
    );

    return (

        <>
            <button onClick={toggleDrawer(true)} className={`${cinzel.className} w-40 h-12 bg-zinc-950 text-white text-green-40 0bg-zinc-950 hover:bg-green-500 hover:text-white rounded text-center items-center justify-center flex transition duration-500 ease-in-out"`}>{session!.user.username}</button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}