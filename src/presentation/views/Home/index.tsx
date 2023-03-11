import { useState } from "react"
import { Grid } from "react-loader-spinner"
import { Container, CardContainer, Title, Loader, Input } from "./index.style"
import { renderPodcast } from "../../../api/services/renderPodcast"
import { primary } from "../../../app/global/styles"
import { IPodcast, IQueryResult } from "../../../app/global/interfaces"
import PodcastCard from "../../components/PodcastCart"



function Home({ podcast }: { podcast: IQueryResult | any }) {
  const [inputSearch, setInputSearch] = useState<string>('')

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
        <>
          <Input value={inputSearch ? inputSearch : ""} onChange={(e) => setInputSearch(e.target.value)} type='text' placeholder="Filter podcasts..." />
          <CardContainer>
            { }
            {renderPodcast(inputSearch, podcast)?.map((entry: IPodcast) => (
              <PodcastCard key={entry?.id.label} entry={entry} />
            ))}
          </CardContainer>
        </>
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