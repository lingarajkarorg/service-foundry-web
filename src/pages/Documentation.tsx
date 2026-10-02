import { Box, Container, Typography, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Documentation = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Documentation
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Everything you need to know about Service Foundry.
                </Typography>

                <Paper sx={{ p: 4, mt: 4 }}>
                    <Typography gutterBottom>
                        Our full documentation is hosted on GitHub Pages.
                    </Typography>
                    <Button variant="contained" endIcon={<OpenInNewIcon />} href="https://github.com" target="_blank" sx={{ mt: 2 }}>
                        Visit Documentation Site
                    </Button>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Popular Topics
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Installation Guide" secondary="Step-by-step setup instructions" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="CLI Reference" secondary="Command line tools usage" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Module Specification" secondary="How to create custom modules" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="API Reference" secondary="Console backend API" />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Documentation;
