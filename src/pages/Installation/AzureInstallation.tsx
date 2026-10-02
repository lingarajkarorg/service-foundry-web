import StepsPageLayout from '../../components/Common/StepsPageLayout';

const AzureInstallation = () => {
    const steps = [
        { label: "AKS Cluster", description: "Create an Azure Kubernetes Service cluster." },
        { label: "Ingress setup", description: "Configure Application Gateway or Load Balancer." },
        { label: "Secrets and certificates", description: "Set up Key Vault and Cert Manager." }
    ];

    return (
        <StepsPageLayout
            title="Azure Installation"
            description="Deploy Service Foundry on Microsoft Azure (AKS)."
            steps={steps}
        />
    );
};

export default AzureInstallation;
