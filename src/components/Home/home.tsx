import { Container, CssBaseline } from '@mui/material';
import React from 'react'

const Home = () => {
    return (
        <React.StrictMode>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>Bienvenido a Home!!</div>
            </Container>
        </React.StrictMode>
    )
}

export default Home;