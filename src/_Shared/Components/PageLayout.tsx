import { WithChildren } from "../Schemas/Shared.schema";
import PageTitle        from "./PageTitle";

export const PageLayout = (
    { title, children }:
    WithChildren<{ title: string }> ) => {
    return (
        <section className="page-section">
            <div className="container">
                <PageTitle title={ title }/>
            </div>
            { children }
        </section>
    );
};