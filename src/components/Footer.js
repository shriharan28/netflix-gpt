import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  bg-black  font-mono z-30  ">
      <div className="pt-5 ">
        <img
          className="absolute  ml-14  pt-2"
          src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
          alt=""
        />

        <div className=" flex gap-5 justify-center relative text-gray-600 pb-2">
          <Link to="https://github.com/shriharan28/netflix-gpt">
            <img
              className="w-5  mr-1 mt-1"
              src="https://gross-magenta-8y4my762nw.edgeone.app/pngegg%20(1).png"
              alt="github-logo"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/shriharan-s-1aba20384/">
            <img
              className="w-6"
              src="https://gorgeous-white-ygvujobtnc.edgeone.app/linkedin-logo-png-2048.png"
              alt="linkedin-logo"
            />
          </Link>
          <Link to="https://x.com/reganstalinn">
            <img
              className="w-7"
              src="https://ytterbic-silver-oubhsvjccs.edgeone.app/pngimg.com%20-%20x_logo_PNG19.png"
              alt="twitter-logo"
            />
          </Link>
        </div>

        <p className=" text-sm flex justify-center  font-mono   text-gray-600">
          <label className=" text-gray-100 pr-1 "> </label> Built with React.js
          and Tailwind CSS by shriharanstalin{" "}
        </p>
        <p className=" text-sm flex justify-center pb-[1.5%] font-light  text-gray-600 ">
          <label className=" text-gray-100 pr-1 "> </label> Inspired by Akshay
          Saini{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
