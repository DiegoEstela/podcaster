import { Routes, Route } from "react-router-dom";
import useGetPodcast from "./api/services/getPodcastList/useGetPodcast";
import Header from "./presentation/components/Header";
import Home from "./presentation/views/Home";
import PodcastDetail from "./presentation/views/PodcastDetail";
import PodcastDetailEpisode from "./presentation/views/PodcastDetailEpisode";


function App() {
  const allPodcasts = useGetPodcast(100)
  const { data } = allPodcasts

  return (
    <>
      <Header status={allPodcasts?.status} />
      <Routes>
        <Route path='/' element={<Home podcast={allPodcasts} />} />
        <Route path='/podcast/:podcastId' element={<PodcastDetail podcast={data} />} />
        <Route path='/podcast/:podcastId/episode/:episodeId' element={<PodcastDetailEpisode podcast={data} />} />
      </Routes>

    </>
  );
}

export default App;
