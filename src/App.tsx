// React Imports
import { useEffect, useState, createContext } from "react"
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
import { UserData, Token } from './components/interfaces/HomeProps';
// Styles Imports
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
// import functions
import { callApi } from './shared/enviarDatos';


export const UserDataContext = createContext(JSON.parse(localStorage.getItem('userData')!));

function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useState<Token>({
    token: 'xDfsdsdfD434123454XD'
  })
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
  const loggedM = JSON.parse(localStorage.getItem('logged')!);
  const [isLogged, setLogged] = useState<boolean>(loggedM);
  /**
   * State isAdmin es el estado que se utiliza para validar si el usuario tiene el rol de
   * Administrador para validar si este puede ingresar al sistema
   */
  const adminM = JSON.parse(localStorage.getItem('admin')!);
  const [isAdmin, setAdmin] = useState<boolean>(adminM);


  useEffect(() => {
    if ((user.user !== '' && user.user !== undefined) || (user.password !== '' && user.password !== undefined)) {
      callApi(user, setUser, userData, setUserData, loginErrors, setLoginErrors, isLogged, setLogged, isAdmin, setAdmin);
    }

  }, [user, loginErrors, userData, isLogged, isAdmin]);


  if (isLogged === true) {
    if (isAdmin === true) {
      if (userData.id > 0 && userData.username !== '') {
        if (token.token !== '') {
          return (
            <ThemeProvider theme={theme}>
              <>
                <UserDataContext.Provider value={JSON.parse(localStorage.getItem('userData')!)}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/Home" replace />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="*" element={<Navigate to="/resource_not_found" replace />} />
                    <Route path="/resource_not_found" element={<Error404 />} />
                  </Routes>
                </UserDataContext.Provider>
              </>
            </ThemeProvider>
          );
        } else {
          setLogged(false);
          setAdmin(false);
          localStorage.removeItem('logged');
          localStorage.removeItem('admin');
          localStorage.removeItem('userData');
          setLoginErrors({
            message: 'Token no recibido...'
          })
        }
      } else {
        if (userData.id === 0) {
          if (localStorage.getItem('userData') === null) {
            setLogged(false);
            setAdmin(false);
            localStorage.removeItem('logged');
            localStorage.removeItem('admin');
            setLoginErrors({
              message: 'No se recibio Data del Usuario...'
            })
          } else {
            const userDataM = JSON.parse(localStorage.getItem('userData')!);
            setUserData(userDataM);
          }
        }
      }
    } else if (isLogged === true) {
      setLogged(false);
      setAdmin(false);
      localStorage.removeItem('logged');
      localStorage.removeItem('admin');
      localStorage.removeItem('userData');
    }
  } else if (isAdmin === true) {
    setLogged(false);
    setAdmin(false);
    localStorage.removeItem('logged');
    localStorage.removeItem('admin');
    localStorage.removeItem('userData');
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