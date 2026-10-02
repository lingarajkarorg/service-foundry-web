import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../theme/ThemeProvider';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';

const ToolbarActions = () => {
    const { config, setConfig } = useThemeContext();
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleThemeToggle = () => {
        setConfig({
            ...config,
            mode: config.mode === 'light' ? 'dark' : 'light',
        });
    };

    const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = (lang?: string) => {
        if (lang) {
            i18n.changeLanguage(lang);
        }
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Switch Language">
                <IconButton color="inherit" onClick={handleLanguageMenuOpen}>
                    <TranslateIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleLanguageMenuClose()}
            >
                <MenuItem onClick={() => handleLanguageMenuClose('en')}>English</MenuItem>
                <MenuItem onClick={() => handleLanguageMenuClose('ko')}>한국어</MenuItem>
                <MenuItem onClick={() => handleLanguageMenuClose('fr')}>Français</MenuItem>
            </Menu>

            <Tooltip title="Toggle Theme">
                <IconButton color="inherit" onClick={handleThemeToggle}>
                    {config.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Tooltip>
        </>
    );
};

export default ToolbarActions;
