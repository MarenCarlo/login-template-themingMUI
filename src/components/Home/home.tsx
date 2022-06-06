import { Container, CssBaseline, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { UserDataContext } from '../../App';

const Home = () => {
    const userData = useContext(UserDataContext);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Typography component="h6" sx={{ mt: 5, textAlign: 'center' }}>
                Bienvenido a Home!!: {userData.name}
            </Typography>
        </Container>
    )
}

export default Home;