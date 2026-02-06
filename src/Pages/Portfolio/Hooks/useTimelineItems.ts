import { useFetchData }      from "../../../_Shared/Hooks/useFetchData";
import { fetchTimelineData } from "../Services/Portfolio.services";

export const useTimelineItems = () => {
    const { data, loading, error } = useFetchData( fetchTimelineData );
    return { timelineItems: data ?? [], loading, error };
};