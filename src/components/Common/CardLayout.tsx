import { PageContainer } from '@toolpad/core/PageContainer';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface CardItem {
    title: string;
    description: string;
    actionText?: string;
    actionLink?: string;
}

interface CardLayoutProps {
    title: string;
    description: string;
    items: CardItem[];
}

const CardLayout = ({ title, description, items }: CardLayoutProps) => {
    return (
        <PageContainer title={title}>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
                {description}
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {items.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" href={item.actionLink || '#'}>
                                    {item.actionText || 'OverView'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    );
};

export default CardLayout;
