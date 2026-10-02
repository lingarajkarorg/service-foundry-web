import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const Architecture = () => {
    const diagrams = [
        "High-Level Architecture Diagram",
        "GitOps Architecture Flow",
        "Module Dependency Diagram",
        "Ingress & Networking Architecture",
        "Observability Architecture",
        "SSO Request Flow"
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Architecture
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Conceptual understanding of the Service Foundry platform.
                </Typography>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {diagrams.map((diagram, index) => (
                        <Grid key={index} size={{ xs: 12, md: 6 }}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 2,
                                    height: 300,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'grey.50'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '200px',
                                        border: '2px dashed #ccc',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2
                                    }}
                                >
                                    <Typography color="text.secondary">Diagram Placeholder</Typography>
                                </Box>
                                <Typography variant="h6">{diagram}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Architecture;
