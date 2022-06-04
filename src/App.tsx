// React Imports
import { useEffect, useState } from 'react';
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
import { LoginErrors, User, UserData } from './components/interfaces/LoginProps';
// Styles Imports
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
// import functions
import { callApi } from './shared/enviarDatos';

function App() {
  /**
   * State user es para el estado de los inputs del login
   * username y password
   */
  const [user, setUser] = useState<User>({
    user: '',
    password: ''
  });
  /**
   * State userData es el estado para almacenar la data del usuario
   * que inicia una sesión.
   */
  const [userData, setUserData] = useState<UserData>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    }
  });
  /**
   * State loginErrors es el estado con el que se manejan todos los errores
   * al momento de intentar iniciar una sesión
   */
  const [loginErrors, setLoginErrors] = useState<LoginErrors>({
    message: ''
  });
  /**
   * State isLogged es el estado que se utiliza para validar si se muestra el login
   * o nuestras rutas protegidas
   */
  const [isLogged, setLogged] = useState<boolean>(false);
  /**
   * State isAdmin es el estado que se utiliza para validar si el usuario tiene el rol de
   * Administrador para validar si este puede ingresar al sistema
   */
  const [isAdmin, setAdmin] = useState<boolean>(false);


  useEffect(() => {
    if ((user.user !== '' && user.user !== undefined) || (user.password !== '' && user.password !== undefined)) {
      callApi(user, setUser, userData, setUserData, loginErrors, setLoginErrors, isLogged, setLogged, isAdmin, setAdmin);
    }
  }, [user, loginErrors, userData]);

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
              userData={userData}
              setUserData={setUserData}
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