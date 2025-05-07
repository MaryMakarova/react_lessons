import React from 'react';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider, CssBaseline, Container, Typography } from '@mui/material';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const mode = useSelector((state) => state.theme.mode);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Переключение темы
        </Typography>
        <ThemeToggle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
