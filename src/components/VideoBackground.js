import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);

  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <div className=" absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 scale-[1.3]">
        <iframe
          className=" w-full h-full"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&rel=0&controls=0&loop=1&modestbranding=1&showinfo=0&showsearch=0&fs=0&iv_load_policy=3&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
