import React from "react";
import outline from "../../assets/outline.png";
import dots from "../../assets/Dots.svg";

const skillsData = [
  {
    title: "Languages",
    details: ["Java", "JavaScript", "Python", "TypeScript", "Kotlin"],
  },
  {
    title: "Databases",
    details: ["MySql", "MongoDB", "FireBase Firestore", "PostgreSql"],
  },
  {
    title: "other",
    details: ["HTML", "CSS", "Tailwind"],
  },
  {
    title: "Tools",
    details: ["VSCode", "Android Studio", "Linux", "Anaconda", "Github"],
  },
  {
    title: "Frameworks",
    details: ["React", "Springboot", "Django", "NodeJs", "ExpressJs"],
  },
];

const Skills = () => {
  return (
    <div className="w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      {/* title */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex">
            <span className="text-[#C778DD]">#</span>skills
          </h1>
          <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
        </div>
      </div>

      {/* skills section */}
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* graphic container */}
        <div className="w-full lg:w-2/5 h-64 min-h-44 relative bg-[#282C33] p-4 rounded-md">
          <div className="absolute w-20 h-20 md:w-24 md:h-24 border border-gray-400 right-4 top-4"></div>
          <img
            src={dots}
            alt="dots"
            className="absolute top-6 left-6 w-8 h-8"
          />
          <img
            src={outline}
            alt="outline"
            className="absolute bottom-0 left-10 "
          />
          <img
            src={dots}
            alt="dots"
            className="absolute w-16 h-16 right-1/3 top-1/3 hidden md:block"
          />
        </div>

        {/* skills details */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2">
          {skillsData.map((item, index) => (
            <div key={index} className="bg-[#282C33] p-4 rounded-md">
              <h1 className="text-white font-medium text-lg mb-3">
                {item.title}
              </h1>
              <div className="flex flex-wrap gap-1">
                {item.details.map((data, i) => (
                  <span
                    key={i}
                    className="text-sm md:text-base text-[#ABB2BF] bg-[#1E2227] px-3 py-1 rounded"
                  >
                    {data}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
