import React from "react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      <div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex">
            <span className="text-[#C778DD]">#</span>contacts
          </h1>
          <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-6 mt-5 md:mt-10">
        {/* Text Section */}
        <div className="w-full md:w-96 text-gray-300 text-sm">
          <p>
            I’m open to freelance opportunities. However, if you have any other
            questions or just want to connect, don’t hesitate to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full md:w-64 border border-gray-600 px-4 py-3 text-sm text-white">
          <h3 className="mb-3 font-semibold text-white">Message me here</h3>
          <div className="flex items-center mb-2">
            <FaDiscord  className="w-6 h-6"/>
            <p className="text-gray-400 ml-1">rodgers.dev</p>
          </div>
          <div className="flex items-center">
            <Mail />
            <p className="text-gray-400 ml-1">munenerodgers72@gmail.com</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contacts;
