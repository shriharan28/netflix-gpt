import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="py-[10%] flex justify-center  ">
      <form className="backdrop-blur rounded-xl bg-black/50 w-1/2  grid grid-cols-12 scale-[0.9]">
        <input
          className="px-4 mr-1 py-3 m-4 rounded-lg col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="text-white px-4 py-2 m-4 ml-2 bg-red-700 rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
