import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-4 ">
      <h1 className=" text-2xl py-3 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-transparent">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movies.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
