import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import { type Navigation } from '@toolpad/core/AppProvider';

export const navigationConfig: Navigation = [
    {
        segment: '', // Home
        title: 'Home',
        icon: <HomeIcon />,
    },
    {
        segment: 'features',
        title: 'Features',
        icon: <StarIcon />,
        children: [
            { segment: 'overview', title: 'Platform Overview' },
            { segment: 'infra', title: 'Infra Foundry' },
            { segment: 'sso', title: 'SSO Foundry' },
            { segment: 'observability', title: 'Observability Foundry' },
            { segment: 'backend', title: 'Backend Foundry' },
            { segment: 'bigdata', title: 'Big Data Foundry' },
            { segment: 'console', title: 'Service Foundry Console' },
        ],
    },
    {
        segment: 'architecture',
        title: 'Architecture',
        icon: <ArchitectureIcon />,
    },
    {
        segment: 'installation',
        title: 'Installation',
        icon: <BuildIcon />,
        children: [
            { segment: 'quick-start', title: 'Quick Start' },
            { segment: 'aws', title: 'AWS' },
            { segment: 'azure', title: 'Azure' },
            { segment: 'docker', title: 'Docker' },
        ]
    },
    {
        segment: 'tutorials',
        title: 'Tutorials',
        icon: <SchoolIcon />,
    },
    {
        segment: 'downloads',
        title: 'Downloads',
        icon: <DownloadIcon />,
    },
    {
        segment: 'documentation',
        title: 'Documentation',
        icon: <DescriptionIcon />,
    },
    {
        segment: 'examples',
        title: 'Examples',
        icon: <CodeIcon />,
    },
    {
        segment: 'pricing',
        title: 'Pricing',
        icon: <AttachMoneyIcon />,
    },
    {
        segment: 'about',
        title: 'About',
        icon: <InfoIcon />,
    },
    {
        segment: 'blog',
        title: 'Blog / News',
        icon: <ArticleIcon />,
    }
];
