import "./Styles/AboutMe.css"
import Resume           from "./Components/Resume";
import { useAboutData } from "./Hooks/useAboutMe";
import {
    ErrorDiv,
    LoadingDiv,
}                       from "../../_Shared/Components/FetchDataComponents";
import { PageLayout }   from "../../_Shared/Components/PageLayout";

const AboutMe = () => {
    const { data, loading, error } = useAboutData();
    
    if( loading ) {
        return <LoadingDiv/>;
    }
    
    if( error ) {
        return <ErrorDiv error={ error }/>;
    }
    
    if( !data ) {
        return null;
    }
    
    return (
        <PageLayout title="About Me">
            <Resume
                personalData={ data.personalInfo }
                education={ data.education }
                workExperience={ data.workExperience }
            />
            <div className="container no-print mb-4 text-end export-button">
                <button onClick={ () => window.print() } className="btn btn-primary shadow-sm">
                    <i className="fa-solid fa-file-pdf me-2"></i> Export PDF
                </button>
                <p className="small text-muted mb-2">
                    <i className="fa-solid fa-circle-info me-1"></i>
                    Tip: Select "Save as PDF" as the destination in the next window.
                </p>
            </div>
        </PageLayout>
    );
};

export default AboutMe;