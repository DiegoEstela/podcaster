import { useParams } from "react-router"
import { IQueryResultPodcastDetail, IPodcast, IFeed, IAllItunesData } from "../../../app/global/interfaces";
import useGetPodcastDetail from "../../../api/services/getPodcastDetail/useGetPodcastDetail";
import { Container } from "./index.style";
import FullLoader from "../../components/FullLoader";
import PodcastDescription from "../../components/PodcastDescription";
import PodcastEpisodebody from "../../components/PodcastEpisodeBody";

type Params = {
  podcastId: string
  episodeId: string
};

function PodcastDetailEpisode({ podcast }: { podcast: IAllItunesData }) {
  const { podcastId, episodeId } = useParams<Params>()
  const { feed }: { feed: IFeed } = podcast
  const podcastDetail: IQueryResultPodcastDetail = useGetPodcastDetail(podcastId as string)
  return (
    <>
      {feed?.entry?.filter((podcast: IPodcast) => podcast.id.attributes['im:id'] === podcastId)
        .map((item: IPodcast) => (
          <Container key={item.id.attributes['im:id']}>
            <PodcastDescription name={item["im:name"].label} img={item['im:image'][2].label} author={item["im:artist"].label} description={item.summary.label} id={podcastId} />
            {podcastDetail.status === "loading" &&
              <>
                <FullLoader active={true} />
              </>}
            {podcastDetail.status === "success" &&
              <PodcastEpisodebody podcastDetail={podcastDetail?.data?.results} episodeId={episodeId as string} />
            }
          </Container>
        ))}
    </>
  )
}

export default PodcastDetailEpisode