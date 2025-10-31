import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return;
  //const movieNames = useSelector((store) => store.gpt.movieNames);
  //const movieResults = useSelector((store) => store.gpt.movieResults);

  return (
    <div className="p-4 m-4 backdrop-blur-md bg-black/30  rounded-lg text-white z-20">
      <div className="">
        {movieNames.map((movieName, index) =>
          movieResults[index].length ? (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default GptSuggestions;
