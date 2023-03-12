import { IPodcastDetail, IPodcastEpisode, IFormattedPodcast } from "../app/global/interfaces";
import moment from 'moment'

function padTo2Digt(num: number) {
    return num.toString().padStart(2, "0")
}

function convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digt(minutes)}:${padTo2Digt(
        seconds,
    )}`;

}


export function EpisodesFormater(podcasts: IPodcastDetail[] | IPodcastEpisode[]): IFormattedPodcast[] | undefined {
    const formattedPodcast: IFormattedPodcast[] = []
    podcasts?.forEach((podcast) => {
        console.log(podcast)
        let body: IFormattedPodcast = {
            collectionId: podcast?.collectionId,
            trackId: podcast?.trackId,
            title: podcast?.trackName,
            date: moment(podcast?.releaseDate).format('YYYY/MM/DD'),
            duration: convertMsToTime(podcast.trackTimeMillis)
        }
        formattedPodcast.push(body)
    }
    )

    return formattedPodcast.splice(1)

}