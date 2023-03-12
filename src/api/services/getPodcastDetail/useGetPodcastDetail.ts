import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from 'react-query'
import { IQueryResultPodcasDetail } from '../../../app/global/interfaces';
import { getPodcastDetail } from './getPodcastDetail';

    
type QueryOptions = Omit<UseQueryOptions<IQueryResultPodcasDetail, QueryKey>, 'queryFn'>
    
/**
* useGetPodcastDetail busca un podcats de Itune por id
* 
* @param id permite encontrar el podcast solicitado
* @returns UseQueryResult<IQueryResultPodcasDetail[] | string>
*/

function useGetPodcastDetail( id: string, queryOptions? : QueryOptions) 
        : UseQueryResult<IQueryResultPodcasDetail> {
        const podcast = useQuery(
                ['podcast', id],
                () => getPodcastDetail(id), {
                    staleTime: Infinity,
                    cacheTime: Infinity,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                }) as UseQueryResult<IQueryResultPodcasDetail>
        return podcast
    }
    
export default useGetPodcastDetail