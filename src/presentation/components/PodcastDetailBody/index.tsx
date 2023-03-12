import { Container } from "./index.style"
import { IPodcastDetailList } from "../../../app/global/interfaces"
import { EpisodesFormater } from "../../../utils/EpisodesFormater"
import EpisodesTable from "../EpisodesTable"
function PodcastsDetailBody({ podcasts }: { podcasts: IPodcastDetailList }): JSX.Element {



    return (
        <Container>
            <EpisodesTable podcasts={EpisodesFormater(podcasts?.results)} />
        </Container>
    )
}

export default PodcastsDetailBody