import { Container } from "./index.style"
import { IPodcastEpisode } from "../../../app/global/interfaces"
import { EpisodesFormater } from "../../../utils/EpisodesFormater"
import EpisodesTable from "../EpisodesTable"
function PodcastsDetailBody({ podcasts }: { podcasts: IPodcastEpisode[] }): JSX.Element {

    return (
        <Container>
            <EpisodesTable podcasts={EpisodesFormater(podcasts)} />
        </Container>
    )
}

export default PodcastsDetailBody