import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Pricing = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Pricing
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Simple, transparent pricing.
                </Typography>

                <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', borderColor: 'primary.main', borderWidth: 2, borderStyle: 'solid' }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Community
                            </Typography>
                            <Typography variant="h3" color="primary" gutterBottom>
                                Free
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Forever free for individuals and small teams.
                            </Typography>

                            <List>
                                {['Unlimited Users', 'Core Modules (Infra, SSO, O11y)', 'Community Support', 'Single Cluster'].map((item) => (
                                    <ListItem key={item}>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="success" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ mt: 4 }}>
                                <Button variant="contained" size="large" fullWidth href="/downloads">
                                    Download Now
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper elevation={1} sx={{ p: 4, height: '100%', bgcolor: 'grey.50' }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Enterprise
                            </Typography>
                            <Typography variant="h3" color="text.secondary" gutterBottom>
                                Soon
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                For organizations requiring advanced control and auditing.
                            </Typography>

                            <List>
                                {['Everything in Community', 'Multi-cluster support', 'SLA & Priority Support', 'Advanced Security & Auditing', 'Multi-tenant SSO'].map((item) => (
                                    <ListItem key={item}>
                                        <ListItemIcon>
                                            <CheckCircleIcon color="disabled" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ mt: 4 }}>
                                <Button variant="outlined" size="large" fullWidth disabled>
                                    Coming Soon
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Pricing;
