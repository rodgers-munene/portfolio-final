import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6
    }
  }
};

const iconItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const FloatingLinks = () => {
  return (
    <motion.div
      className='hidden fixed top-0 left-2 lg:left-4 w-10 h-64 md:flex flex-col items-center z-50'
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className='w-0 h-[60%] border-r border-gray-700' />

      <div className='h-[40%] flex flex-col justify-around'>
        <motion.a
          variants={iconItem}
          href="https://github.com/rodgers-munene"
          target='_blank'
          rel="noreferrer"
          className="text-gray-400 hover:text-[#C778DD] transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </motion.a>

        <motion.a
          variants={iconItem}
          href="https://www.linkedin.com/in/rodgers-munene-19558135b/"
          target='_blank'
          rel="noreferrer"
          className="text-gray-400 hover:text-[#C778DD] transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </motion.a>

        <motion.a
          variants={iconItem}
          href="https://discordapp.com/users/1050298085412175902"
          target='_blank'
          rel="noreferrer"
          className="text-gray-400 hover:text-[#C778DD] transition-colors"
        >
          <FaDiscord className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default FloatingLinks;
