import { useState } from "react"
import { Container, CardContainer, Title } from "./index.style"
import { renderPodcast } from "../../../utils/renderPodcast"
import { IPodcast, IQueryResult } from "../../../app/global/interfaces"
import FullLoader from "../../components/FullLoader"
import InputSearch from "../../components/InputSearch"
import PodcastCard from "../../components/PodcastCart"



function Home({ podcast }: { podcast: IQueryResult }) {
  const [inputSearch, setInputSearch] = useState<string>('')

  return (
    <Container>
      <InputSearch value={inputSearch} setInputSearch={setInputSearch} text='Filter podcasts...' />
      {
        podcast.status === 'loading' && <FullLoader active={true} />
      }

      {
        podcast.status === 'success' &&
        <>
          <CardContainer>
            {renderPodcast(inputSearch, podcast)?.map((entry: IPodcast) => (
              <PodcastCard key={entry?.id?.label} entry={entry} />
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