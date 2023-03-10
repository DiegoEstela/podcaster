import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from 'react-query'
import { IAllItunesData } from '../../app/global/interfaces';
import { getPodcasts } from './getPodcasts';

    
type QueryOptions = Omit<UseQueryOptions<IAllItunesData, QueryKey>, 'queryFn'>
    
/**
* useGetPodcast busca los podcast de la api de Itunes
* 
* @param limit permite delimitar cuantos datos queremos traer
* @returns UseQueryResult<IAllItunesData[] | string>
*/

function useGetPodcast( limit: number, queryOptions? : QueryOptions) 
        : UseQueryResult<IAllItunesData | string> {

        const podcast = useQuery(
                ['podcast', limit],
                () => getPodcasts(limit), {
                    staleTime: Infinity,
                    refetchOnWindowFocus: false,
                }) as UseQueryResult<IAllItunesData | string>
        return podcast
    }
    
export default useGetPodcast