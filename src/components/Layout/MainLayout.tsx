import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { navigationConfig } from './navigationConfig';
import { useThemeContext } from '../../theme/ThemeProvider';
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { type Router } from '@toolpad/core';
import ToolbarActions from './ToolbarActions';

// Branding configuration
const BRANDING = {
    title: 'Service Foundry',
};

const MainLayout = () => {
    const { config } = useThemeContext();
    const navigate = useNavigate();
    const location = useLocation();

    // Adapt React Router to Toolpad Router
    const router = useMemo<Router>(() => {
        return {
            pathname: location.pathname,
            search: location.search,
            searchParams: new URLSearchParams(location.search),
            navigate: (path) => navigate(path),
        };
    }, [location, navigate]);

    // Re-create theme locally for AppProvider, or we could lift AppProvider up.
    // Since AppProvider handles theming internally usually, but we have our own dynamic theme.
    // Toolpad AppProvider accepts a `theme` prop.
    const theme = useMemo(() => createTheme({
        palette: {
            mode: config.mode,
            primary: {
                main: config.primaryColor,
            },
        },
    }), [config]);

    return (
        <AppProvider
            navigation={navigationConfig}
            branding={BRANDING}
            router={router}
            theme={theme}
        >
            <DashboardLayout slots={{ toolbarActions: ToolbarActions }}>
                <Outlet />
            </DashboardLayout>
        </AppProvider>
    );
};

export default MainLayout;
