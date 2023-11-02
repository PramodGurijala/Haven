import './App.css';
import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/system';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import theme from './Theme/theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;