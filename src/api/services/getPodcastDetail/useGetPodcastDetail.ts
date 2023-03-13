import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from 'react-query'
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
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    retry: false,
                    staleTime: 3600000*24,
                }) as IQueryResultPodcastDetail
        return podcast
    }
    
export default useGetPodcastDetail