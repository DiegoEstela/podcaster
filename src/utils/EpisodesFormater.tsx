import { IPodcastEpisode, IFormattedPodcast } from "../app/global/interfaces";
import moment from 'moment'

export function EpisodesFormater(podcasts: IPodcastEpisode[]): IFormattedPodcast[] | undefined {
    const formattedPodcast: IFormattedPodcast[] = []
    podcasts?.forEach((podcast) => {
        let body: IFormattedPodcast = {
            collectionId: podcast?.collectionId,
            trackId: podcast?.trackId,
            title: podcast?.trackName,
            date: moment(podcast?.releaseDate).format('YYYY/MM/DD'),
            duration: moment.utc(podcast?.trackTimeMillis).format('HH:mm:ss')
        }
        formattedPodcast.push(body)
    }
    )

    return formattedPodcast.splice(1)

}