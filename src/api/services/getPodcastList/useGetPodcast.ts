import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from 'react-query'
import { IQueryResult } from '../../../app/global/interfaces';
import { getPodcasts } from './getPodcasts';

    
type QueryOptions = Omit<UseQueryOptions<IQueryResult, QueryKey>, 'queryFn'>
    
/**
* useGetPodcast busca los podcast de la api de Itunes
* 
* @param limit permite delimitar cuantos datos queremos traer
* @returns UseQueryResult<IQueryResult[] | string>
*/

function useGetPodcast( limit: number, queryOptions? : QueryOptions) 
        : UseQueryResult<IQueryResult> {

        const podcast = useQuery(
                ['podcast', limit],
                () => getPodcasts(limit), {
                    staleTime: Infinity,
                    cacheTime: Infinity,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                }) as UseQueryResult<IQueryResult>
        return podcast
    }
    
export default useGetPodcast