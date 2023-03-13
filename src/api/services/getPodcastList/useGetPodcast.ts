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
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    retry: false,
                    staleTime: 3600000*24,
                }) as IQueryResult
        return podcast
    }
    
export default useGetPodcast