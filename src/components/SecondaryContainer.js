import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black ">
      <div className="relative md:pl-10 pl-3 md:-mt-40 -mt-[35%] z-20">
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />

        <MovieList title={"Top Rated Series "} movies={movies.topRatedSeries} />
        <MovieList title={"On The Air Series"} movies={movies.onTheAirSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
