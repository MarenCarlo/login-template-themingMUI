import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
//import Types 
import { LoginProps, User } from '../interfaces/LoginProps'

const Login = ({ user, setUser, userData, setUserData, loginErrors, setLoginErrors }: LoginProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let user: User = {
            user: String(data.get('user')),
            password: String(data.get('password')),
        }
        setUser(user);
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="user"
                            label="Usuario"
                            name="user"
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
                    <Typography component="p" sx={{ mt: 2, color: '#E84135', textAlign: 'center' }}>
                        {loginErrors.message}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
                    {'Copyright © '}
                    <Link color="inherit" href="https://traeguate.gt/">
                        Traeguate
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </React.StrictMode >
    );
}

export default Login;