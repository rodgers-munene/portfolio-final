import Hacker from "../../assets/hackerNoBg.png";
import dots from "../../assets/Dots.svg";

const AboutMe = () => {
  return (
    <div className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">

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
