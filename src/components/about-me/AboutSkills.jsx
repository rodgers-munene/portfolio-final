import React from "react";
import { skillsData } from "../../services/Data";

const AboutSkills = () => {
  return (
    <div className="w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6">
      <div className="">
        <div className="flex items-center w-full sm:w-2/3">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
            <span className="text-[#C778DD]">#</span>skills{" "}
          </h1>
        </div>
      </div>

      {/* skills details */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-md overflow-hidden"
          >
            <h1 className="text-white font-medium text-lg bg-[#282C33] px-4 py-2 border-b border-gray-600">
              {item.title}
            </h1>
            <div className="flex flex-wrap gap-1 p-4">
              {item.details.map((data, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base text-[#ABB2BF] px-3 py-1 rounded"
                >
                  {data}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
