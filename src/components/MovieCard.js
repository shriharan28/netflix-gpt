import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="md:w-48 w-28  pr-4 ">
      <img className="rounded-md" alt="poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
