import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useOnTheAirSeries = () => {
  const dispatch = useDispatch();
  const onTheAirSeries = useSelector((store) => store.movies.onTheAirSeries);

  const getOnTheAirSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addOnTheAirSeries(json.results));
  };

  useEffect(() => {
    !onTheAirSeries && getOnTheAirSeries();
  }, []);
};

export default useOnTheAirSeries;
