import Header         from "./Components/Header";
import { PageLayout } from "../../_Shared/Components/PageLayout";
import SkillGrid      from "./Components/SkillGrid";
import { useSkills }  from "./Hooks/useSkills";
import {
    ErrorDiv,
    LoadingDiv,
}                     from "../../_Shared/Components/FetchDataComponents";

const Home = () => {
    const { skills, loading, error } = useSkills();
    
    if( loading ) {
        return <LoadingDiv/>
    }
    
    if( error ) {
        return <ErrorDiv error={ error }/>
    }
    return (
        <PageLayout title="Welcome">
            <Header/>
            <SkillGrid
                title="My expertise"
                skills={ skills }
            />
        </PageLayout>
    )
}

export default Home;