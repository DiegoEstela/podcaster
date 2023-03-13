import { Routes, Route } from "react-router-dom";
import useGetPodcast from "./api/services/getPodcastList/useGetPodcast";
import { IQueryResult, TFetchStatus, IAllItunesData } from "./app/global/interfaces";
import Header from "./presentation/components/Header";
import Home from "./presentation/views/Home";
import PodcastDetail from "./presentation/views/PodcastDetail";
import PodcastDetailEpisode from "./presentation/views/PodcastDetailEpisode";


function App() {
  const allPodcasts: IQueryResult = useGetPodcast(100)
  const { data } = allPodcasts
  return (
    <>
      <Header status={allPodcasts?.status as TFetchStatus} />
      <Routes>
        <Route path='/' element={<Home podcast={allPodcasts} />} />
        <Route path='/podcast/:podcastId' element={<PodcastDetail podcast={data as IAllItunesData} />} />
        <Route path='/podcast/:podcastId/episode/:episodeId' element={<PodcastDetailEpisode podcast={data as IAllItunesData} />} />
      </Routes>

    </>
  );
}

export default App;
