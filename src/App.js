import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { homeTheme } from './homeTheme';
import Home from './components/home';
function App() {
  return (
    <ThemeProvider theme={homeTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
