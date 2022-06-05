import { Container, CssBaseline, Typography } from '@mui/material';
import React from 'react'
import { HomeProps } from '../interfaces/HomeProps';

const Home = ({ userData, setUserData }: HomeProps) => {
    return (
        <React.StrictMode>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>Bienvenido a Home!!</div>

                <Typography component="h6" sx={{ mt: 2, color: '#E84135', textAlign: 'center' }}>
                    {userData.name}
                </Typography>
            </Container>
        </React.StrictMode>
    )
}

export default Home;