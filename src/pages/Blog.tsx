import CardLayout from '../components/Common/CardLayout';

const Blog = () => {
    const items = [
        { title: "Announcing Service Foundry v1.0", description: "We are excited to launch the first Community Edition.", actionText: "Read Article" },
        { title: "Why Platform Engineering Matters", description: "Understanding the shift to internal developer platforms.", actionText: "Read Article" },
        { title: "Kubernetes GitOps Best Practices", description: "How to manage your clusters effectively.", actionText: "Read Article" },
    ];

    return (
        <CardLayout
            title="Blog / News"
            description="Latest updates, articles, and announcements."
            items={items}
        />
    );
};

export default Blog;
