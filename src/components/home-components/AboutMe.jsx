import { ArrowRight } from "lucide-react";
import React from "react";
import Hacker from "../../assets/hackerNoBg.png";
import dots from "../../assets/Dots.svg";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      {/* title */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex">
            <span className="text-[#C778DD]">#</span>about-me
          </h1>
          <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
        </div>
      </div>

      {/* details Section  */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 sm:px-4 py-6">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5 items-start mb-8 lg:mb-0">
          <p className="text-gray-300 text-sm md:text-base">
            Hello, I'm Rodgers
          </p>

          <p className="text-gray-300 text-sm md:text-base">
            I'm a computer science student and self-driven full-stack developer
            from Kenya. I specialize in building responsive, high-performance
            web applications using modern technologies like React, Node.js, and
            MongoDB.
          </p>

          <p className="text-gray-300 text-sm md:text-base">
            Crafting digital solutions—from intuitive UIs to secure backend
            systems—has been my passion for years. I've developed real-world
            projects like <strong>SwiftCart</strong>, an e-commerce platform
            with M-Pesa integration, and <strong>FilmSage</strong>, a smart
            movie recommendation tool. I’m always exploring new frameworks and
            tools to push my skills further and deliver clean, impactful code.
          </p>

          <button 
          onClick={() => {
            navigate('/about-me')
          }}
          className="flex items-center border text-white px-4 py-2 border-[#C778DD] hover:bg-[#C778DD] transition-colors duration-300 text-sm mt-2">
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center">
          <img
            src={Hacker}
            alt="hacker"
            className="w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] object-contain"
          />
          <img
            src={dots}
            alt="decorative dots"
            className="absolute top-6 sm:top-24 left-6 sm:left-10 w-6 sm:w-8 md:w-10 opacity-80 pointer-events-none"
          />
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
