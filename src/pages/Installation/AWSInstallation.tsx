import StepsPageLayout from '../../components/Common/StepsPageLayout';

const AWSInstallation = () => {
    const steps = [
        { label: "CloudShell", description: "Open AWS CloudShell to run the commands." },
        { label: "EKS cluster creation", description: "Provision a new EKS cluster using our Terraform modules." },
        { label: "DNS setup", description: "Configure Route53 for your domain." },
        { label: "GitOps configuration", description: "Bootstrap Argo CD and connect to your Git repository." }
    ];

    return (
        <StepsPageLayout
            title="AWS Installation"
            description="Deploy Service Foundry on Amazon Web Services (EKS)."
            steps={steps}
        />
    );
};

export default AWSInstallation;
