import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Hamburger = () => {
  return (
    <div className="w-52 h-auto bg-gray-900 flex flex-col rounded-lg overflow-hidden">
      {navLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="w-full pl-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          {item.name}
        </a>
      ))}

      <div className="flex w-full pl-4 py-3 gap-x-5">
        <a href="https://github.com/rodgers-munene" target="_blank" rel="noreferrer">
          <FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/rodgers-munene-19558135b/" target="_blank" rel="noreferrer">
          <FaLinkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </a>
        <a href="https://discordapp.com/users/1050298085412175902" target="_blank" rel="noreferrer">
          <FaDiscord className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Hamburger;
