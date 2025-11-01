import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useOnTheAirSeries from "../hooks/useOnTheAirSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopRatedSeries();
  useOnTheAirSeries();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <div className="flex-grow flex flex-col ">
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            {" "}
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Browse;
