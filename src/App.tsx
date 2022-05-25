import Login from './components/Auth/login';
import Error404 from './components/Errors/error404';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
/**
 * Paleta de Colores
 * https://coolors.co/f1fffa-ccfccb-96e6b3-03b1bb-258db0-464e47
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#03b1bb',
      contrastText: '#f1fffa',
      light: '#6ee4ea',
      dark: '#027379',
    },
    secondary: {
      main: 'rgba(220,10,84,0.94)',
      contrastText: '#f1fffa',
      dark: '#b70042',
      light: '#e23974',
    },
    divider: '#adbebf',
    error: {
      main: '#e84135',
      contrastText: '#f1fffa',
    },
    warning: {
      main: '#f1940a',
      contrastText: '#2c3531',
    },
    info: {
      main: '#2092ec',
      contrastText: '#f1fffa',
    },
    success: {
      main: '#50b554',
      contrastText: '#f1fffa',
    },
    text: {
      primary: '#464e47',
      secondary: '#798c7c',
      disabled: '#9a9a9a',
    },
    background: {
      default: '#F1FFFA',
    },
  },
  typography: {
    fontSize: 12,
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 8,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 550,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 400,
      // recommended when something is leaving screen
      leavingScreen: 250,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/resource_not_found" replace />} />
        <Route path="/resource_not_found" element={<Error404 />} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;