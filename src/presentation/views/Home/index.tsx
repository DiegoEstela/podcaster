
import { Grid } from "react-loader-spinner"
import { Container, CardContainer, Title, Loader } from "./index.style"
import { primary } from "../../../app/global/styles"
import { IPodcast } from "../../../app/global/interfaces"
import PodcastCard from "../../components/PodcastCart"



function Home({ podcast }: any) {
  return (
    <Container>
      {
        podcast.status === 'loading' &&
        <Loader>
          <Grid
            height="80"
            width="80"
            color={primary}
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Loader>
      }

      {
        podcast.status === 'success' &&
        <CardContainer>
          {podcast.data.feed.entry.map((entry: IPodcast) => (
            <PodcastCard key={entry?.id.label} entry={entry} />
          ))}
        </CardContainer>
      }
      {
        podcast.status === 'error' &&
        <Title>
          "No se han encontrado Podcats"
        </Title>

      }
    </Container >
  )
}

export default Home