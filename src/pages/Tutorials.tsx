import CardLayout from '../components/Common/CardLayout';

const Tutorials = () => {
    const items = [
        { title: "Deploy Keycloak with SSO Foundry", description: "Step-by-step guide to setting up Keycloak.", actionText: "Start Tutorial" },
        { title: "Secure Grafana and Jaeger with SSO", description: "Integrate observability tools with your identity provider.", actionText: "Start Tutorial" },
        { title: "Deploy a Java microservice", description: "Learn how to use Backend-Foundry for Java.", actionText: "Start Tutorial" },
        { title: "Enable OpenTelemetry for Spring Boot", description: "Zero-code instrumentation guide.", actionText: "Start Tutorial" },
        { title: "Build a GitOps pipeline", description: "Promote changes across environments.", actionText: "Start Tutorial" },
        { title: "Big-Data workflow with Airflow", description: "Create your first data pipeline.", actionText: "Start Tutorial" }
    ];

    return (
        <CardLayout
            title="Tutorials"
            description="Short, focused guides to help you build."
            items={items}
        />
    );
};

export default Tutorials;
