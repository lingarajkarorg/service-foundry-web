import FeaturePageLayout from '../../components/Common/FeaturePageLayout';

const BigDataFoundry = () => {
    const features = [
        "Airflow, Spark, MinIO",
        "Data pipelines",
        "Python/SQL notebooks",
        "Data lake architecture"
    ];

    return (
        <FeaturePageLayout
            title="Big Data Foundry"
            description="Scalable data platforms for processing and analytics."
            features={features}
        />
    );
};

export default BigDataFoundry;
