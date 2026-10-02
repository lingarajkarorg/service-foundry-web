import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const InfraFoundry = () => {
    const features = [
        "Automated cluster configuration",
        "Argo CD bootstrapping",
        "Namespaces, secrets, configs, registries",
        "Helm & Kustomize orchestration"
    ];

    return (
        <FeaturePageLayout
            title="Infra Foundry"
            description="Manage your infrastructure as code with automated cluster configuration."
            features={features}
        />
    );
};

export default InfraFoundry;
