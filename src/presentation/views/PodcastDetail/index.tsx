import { useParams } from "react-router-dom"
import { IQueryResult, IPodcast, IQueryResultPodcasDetail } from "../../../app/global/interfaces"
import useGetPodcastDetail from "../../../api/services/getPodcastDetail/useGetPodcastDetail";
import PodcastDescription from "../../components/PodcastDescription";
import PodcastCounter from "../../components/PodcastCounter";
import { Container } from "./index.style";

type Params = {
  podcastId: string | any
};

function PodcastDetail({ podcast }: { podcast: IQueryResult | string | undefined }) {
  const { podcastId } = useParams<Params>()
  const { feed }: any = podcast
  const podcastDetail: IQueryResultPodcasDetail | any = useGetPodcastDetail(podcastId)
  console.log(podcastDetail)
  return (
    <>
      {feed.entry
        .filter((podcast: IPodcast) => podcast.id.attributes['im:id'] === podcastId)
        .map((item: IPodcast) => (
          <Container key={item.id.attributes['im:id']}>
            <PodcastDescription name={item["im:name"].label} img={item['im:image'][2].label} author={item["im:artist"].label} description={item.summary.label} />
            {podcastDetail.status === "loading" &&
              <>
                <PodcastCounter podcastCount={podcastDetail?.data?.resultCount} />

              </>}

            {podcastDetail.status === "success" &&
              <>
                <PodcastCounter podcastCount={podcastDetail?.data?.resultCount} />

              </>}



          </Container>

        ))}
    </>
  )
}

export default PodcastDetail