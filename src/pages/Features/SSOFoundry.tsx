import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const SSOFoundry = () => {
    const features = [
        "Keycloak + OAuth2 Proxy + Traefik",
        "SSO for web apps (Grafana, Jaeger, custom apps)",
        "Certificate automation",
        "Multi-tenant ingress patterns"
    ];

    return (
        <FeaturePageLayout
            title="SSO Foundry"
            description="Secure Single Sign-On integration for all your services."
            features={features}
        />
    );
};

export default SSOFoundry;
