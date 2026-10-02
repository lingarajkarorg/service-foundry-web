import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const BackendFoundry = () => {
    const features = [
        "Spring Boot templates",
        "OpenTelemetry enabled by default",
        "Kubernetes config watcher",
        "API Gateway routing",
        "Secure backend-for-frontend patterns"
    ];

    return (
        <FeaturePageLayout
            title="Backend Foundry"
            description="Accelerate backend development with production-ready templates and patterns."
            features={features}
        />
    );
};

export default BackendFoundry;
