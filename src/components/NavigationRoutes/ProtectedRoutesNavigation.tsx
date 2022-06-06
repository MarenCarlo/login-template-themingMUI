import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext, Fragment } from 'react'
import { UserDataContext } from '../../App';
import { matchPath, Outlet, Link, useLocation, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function useRouteMatch(patterns: any) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

function CurrentRoute(): any {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const location = useLocation();
}

export default function ProtectedRoutesNavigation() {
    const userData = useContext(UserDataContext);
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    // users, users/new, users/edit.
    // Then the order should be ['users/add', 'users/edit', 'users'].
    const routeMatch = useRouteMatch(['/Home', '/Home2']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Fragment>
            <Box sx={{ width: '100%' }}>
                <CssBaseline />
                <Typography component="h1" variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
                    {userData.name}
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Routes>
                        <Route path="*" element={<CurrentRoute />} />
                    </Routes>
                    <Tabs value={currentTab} centered>
                        <Tab label="Home" value="/Home" to="/Home" component={Link} />
                        <Tab label="Home2" value="/Home2" to="/Home2" component={Link} />
                    </Tabs>
                </Box>
            </Box>
            <Outlet />
        </Fragment>
    );
}
