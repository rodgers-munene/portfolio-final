import React from "react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      {/* title */}
      <div className="">
        <div className="flex items-center w-full sm:w-2/3">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
            <span className="text-[#C778DD]">#</span>Contacts{" "}
          </h1>
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
          <div className="flex items-center mb-2">
            <Mail />
            <p className="text-gray-400 ml-1">munenerodgers72@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FaLinkedin  className="w-6 h-6"/>
            <p className="text-gray-400 ml-1">rodgers-munene-19558135b</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
