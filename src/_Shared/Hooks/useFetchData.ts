import {
    useState,
    useEffect,
} from "react";

export function useFetchData<T>( fetcher: () => Promise<T> ) {
    const [ data, setData ] = useState<T | null>( null );
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ error, setError ] = useState<string | null>( null );
    
    useEffect( () => {
        let isMounted = true;
        
        const loadData = async() => {
            try {
                setLoading( true );
                const result = await fetcher();
                if( isMounted ) {
                    setData( result );
                }
            }
            catch( err ) {
                if( isMounted ) {
                    setError( err instanceof Error ? err.message : "An error occurred" );
                }
            }
            finally {
                if( isMounted ) {
                    setLoading( false );
                }
            }
        };
        
        loadData();
        return () => {
            isMounted = false;
        };
    }, [ fetcher ] );
    
    return { data, loading, error };
}