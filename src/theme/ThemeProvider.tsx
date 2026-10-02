import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeConfig {
    primaryColor: string;
    mode: 'light' | 'dark';
}

interface ThemeContextType {
    config: ThemeConfig;
    setConfig: (config: ThemeConfig) => void;
    refreshConfig: () => Promise<void>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProviderWrapper');
    }
    return context;
};

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
    const [config, setConfig] = useState<ThemeConfig>({ primaryColor: '#1976d2', mode: 'light' });
    const [loading, setLoading] = useState(true);

    const refreshConfig = async () => {
        try {
            const response = await fetch('/config.json');
            if (response.ok) {
                const data = await response.json();
                if (data.theme) {
                    setConfig(data.theme);
                }
            }
        } catch (error) {
            console.error('Failed to load config', error);
        }
    };

    useEffect(() => {
        refreshConfig().then(() => setLoading(false));
    }, []);

    if (loading) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ config, setConfig, refreshConfig }}>
            {children}
        </ThemeContext.Provider>
    );
};
