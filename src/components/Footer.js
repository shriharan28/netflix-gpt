import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  bg-black  font-mono z-50  ">
      <div className="pt-5  md:mt-0 pb-5 md:pb-0 -mt-1">
        <img
          className="absolute  md:ml-14 ml-2  pt-2 md:scale-[1.0] hidden md:block "
          src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
          alt=""
        />

        <div className=" flex flex-wrap gap-5 justify-center relative text-gray-600 pb-2 md:scale-[1.0] scale-[0.8]">
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
        <div className="origin-top text-center md:scale-[1.0] md:text-sm text-[9px] text-gray-600">
          <p className="  flex justify-center     ">
            <span className="whitespace-nowrap">
              {" "}
              Built with React.js and Tailwind CSS by shriharanstalin
            </span>{" "}
          </p>
          <p className=" flex justify-center   md:pb-[1.5%] font-light ">
            Inspired by Akshay Saini{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
