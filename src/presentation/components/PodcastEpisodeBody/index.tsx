import { IPodcastEpisode } from '../../../app/global/interfaces'
import { Title, Body, Footer, AudioPlayer } from './index.style'

function PodcastEpisodebody({ podcastDetail, episodeId }: { podcastDetail: IPodcastEpisode[], episodeId: string }) {
    console.log(podcastDetail)
    return (

        <Body>
            {podcastDetail
                .filter((episode: IPodcastEpisode) => episode?.trackId.toString() === episodeId)
                .map((episode: IPodcastEpisode) => (
                    <>
                        <Title>{episode.trackName} </Title>
                        <Footer>
                            <AudioPlayer controls>
                                <source src={episode?.episodeUrl} type={`${episode.episodeContentType}/${episode.episodeFileExtension}`} />
                            </AudioPlayer>

                        </Footer>

                    </>
                ))}
        </Body>

    )
}

export default PodcastEpisodebody

