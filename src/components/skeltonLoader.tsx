import './CustomCss/skeltonLoader.css'; // Add appropriate styles for the skeleton loader

const SkeletonLoader = () => {
    return (
        <div className="skeleton-table">
            {[...Array(5)].map((_, index) => (
                <div className="skeleton-row" key={index}>
                    {[...Array(4)].map((_, cellIndex) => (
                        <div className="skeleton-cell" key={cellIndex}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
