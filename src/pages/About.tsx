import { Box, Container, Typography, Paper, Stack, Link } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    About Service Foundry
                </Typography>

                <Paper sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        Our Mission
                    </Typography>
                    <Typography paragraph>
                        To democratize Platform Engineering by providing a production-ready, modular, and automated foundation for Kubernetes environments.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                        Story
                    </Typography>
                    <Typography paragraph>
                        Service Foundry was born out of the frustration of re-inventing the wheel for every new Kubernetes platform. We believe that 80% of platform requirements are common across organizations, and should be automated.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                        Roadmap
                    </Typography>
                    <Typography paragraph>
                        We are currently focusing on expanding our module ecosystem to include AI/ML workloads and edge computing support.
                    </Typography>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom> Connect with us </Typography>
                        <Stack direction="row" spacing={2}>
                            <Link href="#" underline="hover">LinkedIn</Link>
                            <Link href="#" underline="hover">Twitter</Link>
                            <Link href="#" underline="hover">GitHub</Link>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default About;
