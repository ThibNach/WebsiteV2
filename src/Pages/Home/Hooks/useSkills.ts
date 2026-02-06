import { useFetchData }    from "../../../_Shared/Hooks/useFetchData";
import { fetchSkillsData } from "../Services/home.service";

export const useSkills = () => {
    const { data, loading, error } = useFetchData( fetchSkillsData );
    return { skills: data ?? [], loading, error };
};