export const ErrorDiv = (
    { error }:
    { error: string } ) => {
    
    return (
        <div className="alert alert-danger">Error loading CV: { error }</div>
    );
};

export const LoadingDiv = () => {
    return (
        <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-primary" role="status">Loading...</div>
        </div>
    );
};
