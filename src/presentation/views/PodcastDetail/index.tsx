import { useParams } from "react-router"

import { IPodcast, IAllItunesData, IFeed, IPodcastEpisode } from "../../../app/global/interfaces"
import useGetPodcastDetail from "../../../api/services/getPodcastDetail/useGetPodcastDetail";
import { Container, Body } from "./index.style";
import FullLoader from "../../components/FullLoader";
import PodcastDescription from "../../components/PodcastDescription";
import PodcastCounter from "../../components/PodcastCounter";
import PodcastsDetailBody from "../../components/PodcastDetailBody";

type Params = {
  podcastId: string
};

function PodcastDetail({ podcast }: { podcast: IAllItunesData }) {
  const { podcastId } = useParams<Params>()
  const { feed }: { feed: IFeed } = podcast
  const podcastDetail = useGetPodcastDetail(podcastId as string)
  return (
    <>
      {feed?.entry?.filter((podcast: IPodcast) => podcast.id.attributes['im:id'] === podcastId)
        .map((item: IPodcast) => (
          <Container key={item.id.attributes['im:id']}>
            <PodcastDescription name={item["im:name"].label} img={item['im:image'][2].label} author={item["im:artist"].label} description={item.summary.label} />
            {podcastDetail.status === "loading" &&
              <>
                <FullLoader active={true} />
              </>}
            {podcastDetail.status === "success" &&
              <>
                <Body>
                  <PodcastCounter podcastCount={podcastDetail.data?.resultCount as number} />
                  <PodcastsDetailBody podcasts={podcastDetail.data?.results as IPodcastEpisode[]} />
                </Body>
              </>}
          </Container>
        ))}
    </>
  )
}

export default PodcastDetail