import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1&",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 8 movies  , comma separated like the example given ahead. Example results: movie1 , movie2 , movie3 , movie4 , movie5, etc..  ";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        //{ role: "developer", content: "Talk like a pirate." },
        { role: "user", content: gptQuery },
      ],
    });

    console.log(completion.choices[0].message.content);
    const gptMovies = completion.choices[0].message.content.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="md:pt-[10%] pt-[35%] flex justify-center  ">
      <form
        className="backdrop-blur rounded-xl bg-black/50 md:w-1/2 w-full text-white grid grid-cols-12 scale-[0.9]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-4 mr-1 py-3 m-4 rounded-lg col-span-9 bg-gray-800"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="text-white px-4 py-2 m-4 ml-2 bg-red-700 rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
