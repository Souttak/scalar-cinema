import React from 'react';
import '../style/Header.min.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#1565c0',
    },
  },
});

function Header() {
  return (
    <header>
      <h1>SCALAR CINEMA</h1>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2}>
          <Button href="/">Inicio</Button>
          <Button href="/gestor">Gestor</Button>
        </Stack>
      </ThemeProvider>
    </header>
  );
}

export default Header;
