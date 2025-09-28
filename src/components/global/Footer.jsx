import logo from "../../assets/Logo.svg";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="w-full border-t max-w-7xl border-gray-500 min-h-44 flex flex-col items-center justify-between pt-4 px-4 sm:px-0">
      <div className="w-full sm:w-[90%]  flex flex-col items-center sm:items-stretch sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h1 className="text-white ml-3 mr-4 font-medium">Rodgers</h1>
            </div>
            <Link to="mailto:munenerodgers72@gmail.com" className="text-gray-400 mt-2  sm:mt-0 sm:ml-8 text-sm md:text-base">
              munenerodgers72@gmail.com
            </Link>
          </div>
          <div className="mt-3 sm:mt-5">
            <p className="text-gray-400 text-sm md:text-base">
              Software Engineer and Design Specialist
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-5 sm:mt-0">
          <div className="flex flex-col items-center sm:items-end">
            <h1 className="text-white text-lg">Socials</h1>
            <div className="flex w-20 justify-between text-gray-200 mt-3 sm:mt-5">
              <Link
                to={"https://discordapp.com/users/1050298085412175902"}
                target="_blank"
                className=""
              >
                <FaDiscord className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/rodgers-munene-19558135b/"}
                target="_blank"
              >
                <FaLinkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />{" "}
              </Link>
              <Link
                to={"https://github.com/rodgers-munene"}
                target="_blank"
                className=""
              >
                <FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5 sm:mt-0">
        <p className="text-gray-300 mb-5 text-sm sm:text-base">
          © Copyright 2025. Rodgers Munene.
        </p>
      </div>
    </div>
  );
};

export default Footer;
