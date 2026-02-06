import IconDivider        from "./IconDivider";

const PageTitle = (
    { title }:
    { title: string } ) => {
    return (
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">{ title }</h2>
            <IconDivider/>
        </div>
    );
};

export default PageTitle;