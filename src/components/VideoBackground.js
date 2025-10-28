import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);

  return (
    <div className="w-screen aspect-video overflow-hidden relative">
      <div className="absolute top-[-5%] scale-[1.5] w-full h-full">
        <iframe
          className="w-full h-full"
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
