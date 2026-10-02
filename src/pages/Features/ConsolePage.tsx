import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const ConsolePage = () => {
    const features = [
        "Web UI for generating modules",
        "GitOps pipelines",
        "On-cluster operations (cleanup, apply, deploy)",
        "License validation workflow"
    ];

    return (
        <FeaturePageLayout
            title="Service Foundry Console"
            description="A unified console to manage your platform resources."
            features={features}
        />
    );
};

export default ConsolePage;
