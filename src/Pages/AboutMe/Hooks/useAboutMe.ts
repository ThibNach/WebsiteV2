import { useCallback } from 'react';
import { useFetchData } from '../../../_Shared/Hooks/useFetchData';
import { FullCVSchema, FullCV } from '../Schemas/AboutMe.schema';
import aboutDataRaw from '../Data/AboutMe.json';

export const useAboutData = () => {
    const fetcher = useCallback(async (): Promise<FullCV> => {
        return FullCVSchema.parse(aboutDataRaw);
    }, []);
    
    return useFetchData<FullCV>(fetcher);
};