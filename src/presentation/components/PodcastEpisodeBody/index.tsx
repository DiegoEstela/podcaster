import { IPodcastEpisode } from '../../../app/global/interfaces'
import { Title, Body, DescripcionBody, Footer, AudioPlayer } from './index.style'

function PodcastEpisodebody({ podcastDetail, episodeId }: { podcastDetail: IPodcastEpisode[], episodeId: string }) {

    return (
        <>
            {
                podcastDetail
                    .filter((episode: IPodcastEpisode) => episode?.trackId.toString() === episodeId)
                    .map((episode: IPodcastEpisode) => (
                        <Body key={episode.trackId}>
                            <Title>{episode.trackName} </Title>
                            <DescripcionBody>
                                <p> {episode.description}</p>
                            </DescripcionBody>
                            <Footer>
                                <AudioPlayer controls>
                                    <source src={episode?.episodeUrl} type={`${episode.episodeContentType}/${episode.episodeFileExtension}`} />
                                </AudioPlayer>
                            </Footer>
                        </Body>
                    ))
            }
        </>

    )
}

export default PodcastEpisodebody

