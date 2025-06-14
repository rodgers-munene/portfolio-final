import React from "react";
import outline from "../assets/outline.png";
import hacker from "../assets/hackerNoBg.png";
import dots from "../assets/Dots.svg";

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-0 sm:w-[85vw] flex flex-col sm:flex-row h-auto sm:h-80 border-pink-500 mt-8 sm:mt-14 justify-between">
      {/* intro section */}
      <div className="w-full sm:w-1/2 min-h-full flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-white font-bold text-base sm:text-lg lg:text-2xl">
          Rodgers is a{" "}
          <span className="text-[#C778DD]">Software Developer</span> and a{" "}
          <span className="text-[#C778DD]">Design Specialist</span>
        </h1>

        <p className="text-gray-300 mt-4 sm:mt-7 max-w-md text-sm sm:text-base lg:text-lg">
          He develops scalable, user-centric solutions with clean architecture
          and thoughtful interfaces
        </p>

        <button className="border border-[#C778DD] text-white px-3 py-1 mt-5 sm:mt-7 hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors text-sm sm:text-base lg:text-lg">
          Contact me!!
        </button>
      </div>

      {/* image section */}
      <div className="relative flex flex-col items-center sm:items-start mt-10 sm:mt-0">
        {/* outline image */}
        <img
          src={outline}
          alt="outline"
          className="absolute top-5 left-5 sm:left-14 w-12 sm:w-20 lg:w-24"
        />

        {/* hacker image */}
        <img
          src={hacker}
          alt="hacker"
          className="w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[28rem]"
        />

        {/* dots image */}
        <img
          src={dots}
          alt="outline"
          className="absolute bottom-10 sm:top-32 md:top-24 right-0 w-8 sm:w-10 lg:w-12"
        />

        {/* project working on */}
        <div className="flex border border-gray-500 items-center mt-5 sm:mt-0 px-2 py-1">
          <div className="w-3 h-3 sm:w-5 sm:h-5 bg-[#C778DD]"></div>
          <p className="ml-2 text-gray-400 text-xs sm:text-sm">
            Currently working on{" "}
            <span className="text-white">Web Chat Application</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
