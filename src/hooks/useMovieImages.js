import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieLogo } from "../utils/moviesSlice";

const useMovieImages = (movieId) => {
  const dispatch = useDispatch();
  const movieLogo = useSelector((store) => store.movies.movieLogo);
  const getMovieImages = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/images",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.logos.filter((logo) => logo.iso_639_1 === "en");
    const logo = filterData[0];

    dispatch(addMovieLogo(logo));
  };

  useEffect(() => {
    !movieLogo && getMovieImages();
  }, []);
};

export default useMovieImages;
