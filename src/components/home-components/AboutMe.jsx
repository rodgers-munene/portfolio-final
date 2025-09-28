import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hacker from "../../assets/hackerNoBg.png";
import dots from "../../assets/Dots.svg";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
    hover: {
      rotate: 2,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingDots = {
    animate: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const highlightText = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Animated title */}
      <motion.div className="mb-6 md:mb-8 lg:mb-10" variants={container}>
        <div className="flex items-center w-full">
          <motion.h1
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex"
            variants={titleItem}
          >
            <motion.span
              className="text-[#C778DD]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              #
            </motion.span>
            about-me
          </motion.h1>
          <motion.div
            className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Animated content */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 sm:px-4 py-6">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-y-5 items-start mb-8 lg:mb-0"
          variants={container}
        >
          <motion.p
            className="text-gray-300 text-sm md:text-base"
            variants={textItem}
          >
            Hello, I'm{" "}
            <motion.span
              className="text-[#C778DD] font-medium"
              variants={highlightText}
              animate="visible"
            >
              Rodgers
            </motion.span>
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base"
            variants={textItem}
          >
            I'm a{" "}
            <motion.span
              className="text-white font-medium"
              whileHover={{ color: "#C778DD" }}
            >
              Software Engineer 
            </motion.span>{" "}
            {/* and self-driven{" "}
            <motion.span
              className="text-white font-medium"
              whileHover={{ color: "#C778DD" }}
            >
              full-stack developer */}
            {/* </motion.span>{" "} */}
            from Kenya.
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm md:text-base"
            variants={textItem}
          >
            Crafting digital solutions, from intuitive UIs to secure backend
            systems, has been my passion for years. I've developed real-world
            projects like{" "}
            <motion.strong
              className="text-[#C778DD]"
              whileHover={{ scale: 1.05 }}
            >
              <a href="ekshop.store">ekshop.store</a>
            </motion.strong>
            , an e-commerce platform built to serve students and locals around Nyeri, and{" "}
            <motion.strong
              className="text-[#C778DD]"
              whileHover={{ scale: 1.05 }}
            >
              Agrotrack
            </motion.strong>
            , a mobile app built to support farmers by providing tools for crop monitoring, soil health tracking, pest detection, and weather updates
          </motion.p>

          <motion.button
            onClick={() => navigate("/about-me")}
            className="flex items-center border text-white px-4 py-2 border-[#C778DD] hover:bg-[#C778DD] transition-colors duration-300 text-sm mt-2"
            variants={textItem}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(199, 120, 221, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Read More{" "}
            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center"
          variants={imageItem}
          whileHover="hover"
        >
          <motion.img
            src={Hacker}
            alt="hacker"
            className="w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] object-contain"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{
              type: "spring",
              delay: 0.5,
              stiffness: 50,
            }}
          />
          <motion.img
            src={dots}
            alt="decorative dots"
            className="absolute top-6 sm:top-24 left-6 sm:left-10 w-6 sm:w-8 md:w-10 opacity-80 pointer-events-none"
            variants={floatingDots}
            animate="animate"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
