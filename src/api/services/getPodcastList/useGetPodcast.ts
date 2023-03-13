import { QueryKey, UseQueryOptions, useQuery } from 'react-query'
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
        : IQueryResult {

        const podcast = useQuery(
                ['podcast', limit],
                () => getPodcasts(limit), {
                    refetchOnMount: false,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    staleTime: Infinity,
                    cacheTime: 60 * 60 * 24 * 1000,
                }) as IQueryResult
        return podcast
    }
    
export default useGetPodcast