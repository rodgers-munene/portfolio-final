import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FloatingLinks = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 1.5
      }
    }
  };

  const iconAnimation = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: delay
      }
    },
    hover: {
      y: -5,
      scale: 1.3,
      color: "#C778DD",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  });

  const floatingEffect = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className='hidden fixed top-0 left-2 lg:left-4 w-10 h-64 md:flex flex-col items-center z-50'
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* Animated vertical line */}
      <div 
        className='w-0 h-[60%] border-r border-gray-300'
        
      />

      {/* Animated icons container */}
      <motion.div 
        className='h-[40%] flex flex-col justify-around'
        variants={floatingEffect}
        animate="animate"
      >
        <motion.div variants={iconAnimation(0.3)} whileHover="hover">
          <Link to={"https://discordapp.com/users/1050298085412175902"} target='_blank'>
            <FaDiscord className="w-5 h-5 cursor-pointer text-blue-500" />
          </Link>
        </motion.div>
        
        <motion.div variants={iconAnimation(0.6)} whileHover="hover">
          <Link to={"https://www.linkedin.com/in/rodgers-munene-19558135b/"} target='_blank'>
            <FaLinkedin className="w-5 h-5 cursor-pointer text-blue-500" />
          </Link>
        </motion.div>
        
        <motion.div variants={iconAnimation(0.9)} whileHover="hover">
          <Link to={"https://github.com/rodgers-munene"} target='_blank'>
            <FaGithub className="w-5 h-5 cursor-pointer text-blue-500" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingLinks;