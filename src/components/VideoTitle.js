import React from "react";
import useMovieImages from "../hooks/useMovieImages";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const VideoTitle = ({ title, overview, movieId }) => {
  useMovieImages(movieId);
  const logo = useSelector((store) => store.movies?.movieLogo);
  if (!logo) return;

  return (
    <div className=" pt-[15%] px-14 absolute h-[100vh] text-white bg-gradient-to-r from-black w-full aspect-video z-10  ">
      <img
        className="w-1/4  py-1 origin-left "
        src={IMG_CDN_URL + logo.file_path}
        alt="title_logo"
      />
      {/*<h1 className="font-bold text-2xl">{title}</h1>*/}
      <p className="py-4 text-2xs w-5/12 ">{overview}</p>
      <div className="">
        <button className=" rounded-lg hover:bg-opacity-85 bg-white text-black p-3 px-10 text-lg font-semibold ">
          <label className="font-serif pr-3"> ▶</label>Play
        </button>
        <button className="rounded-lg bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white p-3 px-7 mx-4 text-lg font-semibold ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
