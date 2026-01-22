import { motion } from "framer-motion";
import outline from "../../assets/outline.png";
import dots from "../../assets/Dots.svg";
import { skillsData } from "../../services/Data";

const Skills = () => {
  // Crazy animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const graphicItem = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const skillCard = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(199, 120, 221, 0.3)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const floatingElements = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseDot = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Animated title */}
      <motion.div 
        className="mb-6 md:mb-8 lg:mb-10"
        variants={graphicItem}
      >
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex">
            <motion.span 
              className="text-[#C778DD]"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              #
            </motion.span>
            skills
          </h1>
          <motion.div 
            className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Animated skills section */}
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Crazy graphic container */}
        <motion.div 
          className="w-full lg:w-2/5 h-64 min-h-44 relative p-4 rounded-md overflow-hidden"
          variants={graphicItem}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute w-20 h-20 md:w-24 md:h-24 border border-gray-400 right-4 top-4"
            variants={floatingElements}
            animate="animate"
          />
          
          <motion.img
            src={dots}
            alt="dots"
            className="absolute top-6 left-6 w-8 h-8"
            variants={pulseDot}
            animate="animate"
          />
          
          <motion.img
            src={outline}
            alt="outline"
            className="absolute bottom-0 left-10"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ 
              type: "spring",
              delay: 0.7,
              stiffness: 50
            }}
          />
          
          <motion.img
            src={dots}
            alt="dots"
            className="absolute w-16 h-16 right-1/3 top-1/3 hidden md:block"
            variants={pulseDot}
            animate="animate"
            initial={{ rotate: 45 }}
          />
        </motion.div>

        {/* Wild skills cards */}
        <motion.div 
          className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={container}
        >
          {skillsData.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1A1A] p-4 rounded-md border border-transparent hover:border-[#C778DD]"
              variants={skillCard}
              custom={index}
              whileHover="hover"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;