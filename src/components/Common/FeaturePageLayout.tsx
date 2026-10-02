import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PageContainer } from '@toolpad/core/PageContainer';

interface FeaturePageLayoutProps {
    title: string;
    description: string;
    features: string[];
}

const FeaturePageLayout = ({ title, description, features }: FeaturePageLayoutProps) => {
    return (
        <PageContainer title={title}>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
                {description}
            </Typography>

            <Box sx={{ mt: 2 }}>
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="h5" gutterBottom>
                        Key Capabilities
                    </Typography>
                    <List>
                        {features.map((feature, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CheckCircleIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={feature} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </PageContainer>
    );
};

export default FeaturePageLayout;
