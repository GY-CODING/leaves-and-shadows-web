/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

export default function ResponsiveDialog({
  open,
  handleClose,
  handleSubmit,
}: {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}): JSX.Element {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: '#0c0a09',
      },
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {'Cerrar sesión'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Estas seguro que deseas cerrar sesión?
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'start',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <Button
              variant="outlined"
              color="success"
              sx={{
                color: 'white',
              }}
              onClick={handleSubmit}
              autoFocus
            >
              Si
            </Button>
            <Button
              color="error"
              variant="outlined"
              sx={{
                color: 'white',
                // backgroundColor: '#ef4444',
                '&:hover': {},
              }}
              autoFocus
              onClick={handleClose}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </React.Fragment>
  );
}
