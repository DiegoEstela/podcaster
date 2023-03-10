import { Routes, Route } from "react-router-dom";
import useGetPodcast from "./api/services/useGetPodcast";
import Header from "./presentation/components/Header";
import Home from "./presentation/views/Home";

import PodcastDetail from "./presentation/views/PodcastDetail";


function App() {
  const allPodcasts = useGetPodcast(50)

  return (
    <>
      <Header status={allPodcasts?.status} />
      <Routes>
        <Route path='/' element={<Home podcast={allPodcasts} />} />
        <Route path='/podcast' element={<PodcastDetail />} />
      </Routes>

    </>
  );
}

export default App;
