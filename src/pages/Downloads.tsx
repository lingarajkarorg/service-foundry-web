import { Box, Container, Typography, Button, Stack, Paper, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';

const Downloads = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Downloads
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Get the latest version of Service Foundry.
                </Typography>

                <Paper sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Community Edition v1.0.0
                    </Typography>
                    <Typography paragraph>
                        The core platform including Infra, SSO, and Observability foundries.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                        <Button variant="contained" startIcon={<DownloadIcon />}>
                            Download .zip
                        </Button>
                        <Button variant="contained" startIcon={<DownloadIcon />}>
                            Download .tar.gz
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="h6" gutterBottom>
                        Bootstrap Scripts
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" startIcon={<DescriptionIcon />}>
                            install.sh
                        </Button>
                        <Button variant="outlined" startIcon={<DescriptionIcon />}>
                            bootstrap.py
                        </Button>
                    </Stack>
                    <Divider sx={{ my: 4 }} />

                    <Typography variant="body2" color="text.secondary">
                        Release Notes | Changelog
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Downloads;
