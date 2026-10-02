import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import PlatformOverview from './pages/Features/PlatformOverview';
import InfraFoundry from './pages/Features/InfraFoundry';
import SSOFoundry from './pages/Features/SSOFoundry';
import ObservabilityFoundry from './pages/Features/ObservabilityFoundry';
import BackendFoundry from './pages/Features/BackendFoundry';
import BigDataFoundry from './pages/Features/BigDataFoundry';
import ConsolePage from './pages/Features/ConsolePage';
import Architecture from './pages/Architecture';
import QuickStart from './pages/Installation/QuickStart';
import AWSInstallation from './pages/Installation/AWSInstallation';
import AzureInstallation from './pages/Installation/AzureInstallation';
import DockerInstallation from './pages/Installation/DockerInstallation';
import Tutorials from './pages/Tutorials';
import Downloads from './pages/Downloads';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Blog from './pages/Blog';

// For now using Placeholders, but properly routed
// We can lazily load real pages as we create them

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'features',
                children: [
                    { path: 'overview', element: <PlatformOverview /> },
                    { path: 'infra', element: <InfraFoundry /> },
                    { path: 'sso', element: <SSOFoundry /> },
                    { path: 'observability', element: <ObservabilityFoundry /> },
                    { path: 'backend', element: <BackendFoundry /> },
                    { path: 'bigdata', element: <BigDataFoundry /> },
                    { path: 'console', element: <ConsolePage /> },
                ]
            },
            {
                path: 'architecture',
                element: <Architecture />,
            },
            {
                path: 'installation',
                children: [
                    { path: 'quick-start', element: <QuickStart /> },
                    { path: 'aws', element: <AWSInstallation /> },
                    { path: 'azure', element: <AzureInstallation /> },
                    { path: 'docker', element: <DockerInstallation /> },
                ]
            },
            { path: 'tutorials', element: <Tutorials /> },
            { path: 'downloads', element: <Downloads /> },
            { path: 'documentation', element: <Documentation /> },
            { path: 'examples', element: <Examples /> },
            { path: 'pricing', element: <Pricing /> },
            { path: 'about', element: <About /> },
            { path: 'blog', element: <Blog /> },
        ],
    },
]);

export default router;
