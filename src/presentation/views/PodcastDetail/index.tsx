import { useParams } from "react-router-dom"
import { IQueryResult, IPodcast } from "../../../app/global/interfaces"
import PodcastDescription from "../../components/PodcastDescription";
import { Container } from "./index.style";

type Params = {
  podcastId: string;
};

function PodcastDetail({ podcast }: { podcast: IQueryResult | string | undefined }) {
  const { podcastId } = useParams<Params>()
  const { feed }: any = podcast
  console.log(podcast)
  return (
    <>
      {feed.entry
        .filter((podcast: IPodcast) => podcast.id.attributes['im:id'] === podcastId)
        .map((item: IPodcast) => (
          <Container key={item.id.attributes['im:id']}>
            <PodcastDescription name={item["im:name"].label} img={item['im:image'][2].label} author={item["im:artist"].label} description={item.summary.label} />
          </Container>
        ))}
    </>
  )
}

export default PodcastDetail