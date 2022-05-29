// React Imports
import { useState } from 'react';
// Router Imports
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// Components Imports
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Error404 from './components/Errors/Error404';
// Interfaces Imports
import { LoginErrors, User } from './components/interfaces/LoginProps';
// Styles Imports
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

function App() {
  const [user, setUser] = useState<User>({
    user: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState<LoginErrors>({
    message: 'loggeado correctamente!!'
  });
  const [isLogged, setLogged] = useState<boolean>(true);
  const [isAdmin, setAdmin] = useState<boolean>(false);

  if (isLogged === true) {
    if (isAdmin === true) {
      return (
        <ThemeProvider theme={theme}>
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="*" element={<Navigate to="/resource_not_found" replace />} />
              <Route path="/resource_not_found" element={<Error404 />} />
            </Routes>
          </>
        </ThemeProvider>
      );
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes>
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/" element={
            <Login
              user={user}
              setUser={setUser}
              loginErrors={loginErrors}
              setLoginErrors={setLoginErrors}
            />
          } />
          <Route path="*" element={<Navigate to="/resource_not_found" replace />} />
          <Route path="/resource_not_found" element={<Error404 />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;