import { motion } from "framer-motion";
import { ProjectsData } from "../../services/Data";
import { ArrowRightLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      boxShadow: "0 10px 25px -5px rgba(199, 120, 221, 0.2)",
      transition: { type: "spring", stiffness: 200 }
    }
  };

  const titleItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    hover: {
      backgroundColor: "#C778DD",
      color: "#fff",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Animated title */}
      <motion.div className="mb-6">
        <div className="flex items-center w-full sm:w-2/3">
          <motion.h1 
            className="text-white text-2xl sm:text-3xl mr-3 flex"
            variants={titleItem}
          >
            <motion.span 
              className="text-[#C778DD]"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              #
            </motion.span>
            complete-apps
          </motion.h1>
        </div>
      </motion.div>

      {/* Animated projects grid */}
      <motion.div 
        className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
      >
        {ProjectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="border border-gray-400 flex flex-col bg-[#1A1A1A] hover:border-[#C778DD] transition-colors rounded-md"
            variants={item}
            whileHover="hover"
          >
            <div 
              className="overflow-hidden h-48"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full rounded-md ${index !== 1 ? "object-cover" : "object-contain"}`}
              />
            </div>

            {/* tags */}
            <div className="w-full border-b border-gray-400 min-h-6 flex items-center py-3 px-2 flex-wrap">
              {project.stack.map((item, idx) => (
                <motion.p 
                  key={idx} 
                  className="mr-2 text-sm text-gray-300"
                  whileHover={{ color: "#C778DD" }}
                >
                  {item}
                </motion.p>
              ))}
            </div>

            {/* name and desc */}
            <div className="px-2 py-4 flex flex-col justify-between flex-1">
              <h1 className="text-base sm:text-lg text-white mb-2">
                {project.title}
              </h1>
              <p className="text-sm text-gray-300 my-2">{project.shortDesc}</p>

              <div className="flex">
                {index === 0 && (
                  <div >
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      className="flex items-center border text-white border-[#C778DD] hover:border-gray-700 hover:bg-gray-700 text-white! py-1 px-3 w-max mt-auto"
                    >
                      Live <ArrowRightLeft className="ml-2" />
                    </Link>
                  </div>
                )}
                <div >
                  <Link 
                    to={project.gitLink}
                    target="_blank"
                    className={`flex items-center border text-white border-[#C778DD] hover:border-gray-700 hover:bg-gray-700 text-white! py-1 px-3 w-max mt-auto ${index === 3 ? "ml-0" : "ml-2"}`}
                  >
                    Github <FaGithub className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;