import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";


const Hamburger = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "works", path: "/projects" },
    { name: "about-me", path: "/about-me" },
    { name: "contact", path: "/contact-me" },
  ];

  return (
    <div className="w-52 h-auto bg-gray-900 flex flex-col rounded-lg">
      {navLinks.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            className={`w-full  pl-4 py-3 ${
              isActive ? "text-white bg-gray-800" : "text-gray-400"
            }`}
          >
            <span className="text-[#C778DD]">#</span>
            {item.name}
          </Link>
        );
      })}

      <div className="flex w-full pl-4 py-3 gap-x-5">
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
  );
};

export default Hamburger;
