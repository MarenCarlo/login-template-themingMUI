import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
//import Types 
import { Props } from '../interfaces/LoginProps'
//import Shareds
import { enviarDatos } from '../../shared/enviarDatos';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://traeguate.gt/">
                Traeguate
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
/**
 * Función de Login usando useState()
 * ERROR AQUI EN LA LINEA 26, AVERIGUAR COMO PASAR UNA FUNCION COMO PARAMETRO EN TYPESCRIPT
 */
const Login = ({ user, setUser, loginErrors, setLoginErrors }: Props) => {

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    return (
        <React.StrictMode>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '20vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ color: '#464E47' }}>
                        Administración
                    </Typography>
                    <Box component="form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => enviarDatos(event, loginErrors, setLoginErrors)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="user"
                            label="Usuario"
                            name="user"
                            onChange={handleInputChange}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            onChange={handleInputChange}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, pt: 1, pb: 1, boxShadow: 5 }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </React.StrictMode >
    );
}

export default Login;