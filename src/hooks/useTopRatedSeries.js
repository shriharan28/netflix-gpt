import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topRatedSeries = useSelector((store) => store.movies.topRatedSeries);
  const getTopRatedSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    !topRatedSeries && getTopRatedSeries();
  }, []);
};

export default useTopRatedSeries;
