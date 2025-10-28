import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieLogo } from "../utils/moviesSlice";

const useMovieImages = (movieId) => {
  const dispatch = useDispatch();
  const getMovieImages = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/images",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.logos.filter((logo) => logo.iso_639_1 === "en");
    const logo = filterData[0];
    console.log(filterData);
    dispatch(addMovieLogo(logo));
  };

  useEffect(() => {
    getMovieImages();
  }, []);
};

export default useMovieImages;
