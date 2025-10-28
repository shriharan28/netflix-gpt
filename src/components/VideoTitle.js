import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-[26%] px-14 absolute text-white bg-gradient-to-r from-black/80 w-screen aspect-video z-10">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-4 text-sm w-1/4">{overview}</p>
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
