import { Box, Typography } from '@mui/material';

interface PagePlaceholderProps {
    title: string;
}

const PagePlaceholder = ({ title }: PagePlaceholderProps) => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1">
                Content for {title} will be implemented here.
            </Typography>
        </Box>
    );
};

export default PagePlaceholder;
