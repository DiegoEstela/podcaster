import { QueryKey, UseQueryOptions, useQuery } from 'react-query'
import { IQueryResultPodcastDetail } from '../../../app/global/interfaces';
import { getPodcastDetail } from './getPodcastDetail';

    
type QueryOptions = Omit<UseQueryOptions<IQueryResultPodcastDetail, QueryKey>, 'queryFn'>
    
/**
* useGetPodcastDetail busca un podcats de Itune por id
* 
* @param id permite encontrar el podcast solicitado
* @returns UseQueryResult<IQueryResultPodcastDetail[] | string>
*/

function useGetPodcastDetail( id: string, queryOptions? : QueryOptions) 
        : IQueryResultPodcastDetail {
        const podcast = useQuery(
                ['podcast', id],
                () => getPodcastDetail(id), {
                    refetchOnMount: false,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    staleTime: Infinity,
                    cacheTime: 60 * 60 * 24 * 1000,
                }) as IQueryResultPodcastDetail
        return podcast
    }
    
export default useGetPodcastDetail