import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const PlatformOverview = () => {
    // In a real app, these would come from the translation file or API
    // For now, hardcoding english structure to test, but using t() for Title at least

    const features = [
        "GitOps workflow",
        "Module composition",
        "Kubernetes-first design",
        "Supported cloud providers (AWS, Azure, Docker Desktop, etc.)"
    ];

    return (
        <FeaturePageLayout
            title="Platform Overview"
            description="High-level explanation of the Service Foundry platform."
            features={features}
        />
    );
};

export default PlatformOverview;
