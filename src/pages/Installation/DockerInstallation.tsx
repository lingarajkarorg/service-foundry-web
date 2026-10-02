import StepsPageLayout from '../../components/Common/StepsPageLayout';

const DockerInstallation = () => {
    const steps = [
        { label: "Minimal cluster", description: "Ensure Docker Desktop Kubernetes is enabled." },
        { label: "Local TLS", description: "Generate local certificates for secure access." },
        { label: "Running Foundry Console locally", description: "Start the console container." }
    ];

    return (
        <StepsPageLayout
            title="Docker Desktop (Local)"
            description="Run Service Foundry locally for development and testing."
            steps={steps}
        />
    );
};

export default DockerInstallation;
