import StepsPageLayout from '../../components/Common/StepsPageLayout';

const QuickStart = () => {
    const steps = [
        { label: "Download Community Edition", description: "Get the latest release from the Downloads page." },
        { label: "Run bootstrap script", description: "Execute the setup script to initialize the environment." },
        { label: "Access the console", description: "Open your browser and navigate to the local console URL." }
    ];

    return (
        <StepsPageLayout
            title="Quick Start"
            description="Get up and running with Service Foundry in 5 minutes."
            steps={steps}
        />
    );
};

export default QuickStart;
