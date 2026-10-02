import { Box, Typography, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { PageContainer } from '@toolpad/core/PageContainer';

interface StepsPageLayoutProps {
    title: string;
    description: string;
    steps: { label: string; description?: string }[];
}

const StepsPageLayout = ({ title, description, steps }: StepsPageLayoutProps) => {
    return (
        <PageContainer title={title}>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
                {description}
            </Typography>

            <Box sx={{ mt: 2 }}>
                <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.default', border: '1px solid', borderColor: 'divider' }}>
                    <Stepper orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index} active={true}>
                                <StepLabel>
                                    <Typography variant="h6">{step.label}</Typography>
                                </StepLabel>
                                {step.description && (
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                    </StepContent>
                                )}
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
            </Box>
        </PageContainer>
    );
};

export default StepsPageLayout;
