import { useFetchData }     from "../../_Shared/Hooks/useFetchData";
import { fetchNavBarItems } from "../Services/NavBar.service";

export const useNavBarItems = () => {
    const { data, loading, error } = useFetchData( fetchNavBarItems );
    return { navBarItems: data ?? [], loading, error };
};