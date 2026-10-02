import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const ObservabilityFoundry = () => {
    const features = [
        "OpenTelemetry Collector",
        "Jaeger, Loki, Tempo, Mimir",
        "Dashboards, alerts",
        "JVM, Go, container, K8s metrics instrumentation"
    ];

    return (
        <FeaturePageLayout
            title="Observability Foundry"
            description="Comprehensive observability stack with logs, metrics, and traces."
            features={features}
        />
    );
};

export default ObservabilityFoundry;
