import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Box sx={{ my: 8, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {t('home_page.hero_title')}
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<DownloadIcon />}
                        component={RouterLink}
                        to="/downloads"
                    >
                        {t('home_page.cta_download')}
                    </Button>
                </Stack>
            </Box>

            {/* Value Statements */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }} elevation={2}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            GitOps
                        </Typography>
                        <Typography>
                            {t('home_page.value_gitops')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }} elevation={2}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Modular
                        </Typography>
                        <Typography>
                            {t('home_page.value_modular')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }} elevation={2}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Production Ready
                        </Typography>
                        <Typography>
                            {t('home_page.value_prod_ready')}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Architecture Diagram Placeholder */}
            <Box sx={{ mb: 8, textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Architecture
                </Typography>
                <Box sx={{
                    height: 300,
                    border: '2px dashed grey',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'action.hover'
                }}>
                    <Typography color="text.secondary">Architecture Diagram</Typography>
                </Box>
            </Box>

            {/* Quick Links */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    {t('home_page.quick_links')}
                </Typography>
                <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                    <Button variant="outlined" startIcon={<ArticleIcon />} component={RouterLink} to="/documentation">
                        {t('home_page.docs')}
                    </Button>
                    <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/service-foundry" target="_blank">
                        {t('home_page.github')}
                    </Button>
                    <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://youtube.com" target="_blank">
                        {t('home_page.youtube')}
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Home;
