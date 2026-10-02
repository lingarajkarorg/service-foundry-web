import CardLayout from '../components/Common/CardLayout';

const Examples = () => {
    const items = [
        { title: "Java/Spring Observability demo", description: "Complete source code for a Spring Boot app with O11y.", actionText: "View on GitHub", actionLink: "https://github.com" },
        { title: "Go backend demo", description: "Golang microservice template.", actionText: "View on GitHub", actionLink: "https://github.com" },
        { title: "React + Gateway BFF demo", description: "Frontend integration with BFF pattern.", actionText: "View on GitHub", actionLink: "https://github.com" },
        { title: "SSO-protected web app", description: "Example of a secure web application.", actionText: "View on GitHub", actionLink: "https://github.com" },
        { title: "Airflow data pipeline", description: "Sample DAGs and Spark jobs.", actionText: "View on GitHub", actionLink: "https://github.com" },
    ];

    return (
        <CardLayout
            title="Examples"
            description="Real, concrete examples that you can clone."
            items={items}
        />
    );
};

export default Examples;
