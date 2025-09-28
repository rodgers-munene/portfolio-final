import { motion } from "framer-motion";
import Hacker from "../../assets/hackerNoBg.png";
import dots from "../../assets/Dots.svg";

const AboutMe = () => {
  // Animation variants
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

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 10,
        mass: 0.5,
      },
    },
    hover: {
      rotate: 1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingDots = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
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
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8 sm:px-4 py-6">
        {/* Text Section */}
        <motion.div className="w-full lg:w-1/2 flex flex-col gap-y-5 items-start mb-8 lg:mb-0">
          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            Hello, I'm{" "}
            <motion.span
              className="font-medium text-[#C778DD]"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Rodgers
            </motion.span>
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            I'm a{" "}
            <motion.span
              className="text-white font-medium"
              whileHover={{ color: "#C778DD" }}
            >
              Software Engineer
            </motion.span>{" "}
            from Kenya.
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            My journey in tech started with curiosity and has grown into a
            passion for building impactful solutions. I enjoy taking ideas from
            concept to deployment, whether it’s sleek, responsive UIs or secure,
            scalable backends.
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            Some of my projects include{" "}
            <motion.strong
              className="text-[#C778DD]"
              whileHover={{ scale: 1.05 }}
            >
              SwiftCart,
            </motion.strong>{" "}
            an e-commerce app built with react and node.js, and{" "}
            <motion.strong
              className="text-[#C778DD]"
              whileHover={{ scale: 1.05 }}
            >
              AgroTrack+,
            </motion.strong>{" "}
            a React Native mobile app that helps farmers track crops and
            optimize farming decisions.
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            I also{" "}
            <motion.strong
              className="text-[#C778DD]"
              whileHover={{ scale: 1.05 }}
            >
              co-founded <a href="ekshop.store">EkShop</a>
            </motion.strong>
            , an e-commerce platform based in Nyeri tailored for students and
            locals. EkShop has already onboarded{" "}
            <span className="text-white font-medium">150+ users</span> and
            manages{" "}
            <span className="text-white font-medium">15+ deliveries daily</span>,
            proving the demand for student-centered delivery solutions.
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            I’m skilled in{" "}
            <span className="text-white font-medium">
              React, Node.js, Tailwind CSS, PostgreSQL
            </span>{" "}
            and always exploring new tech. I thrive in collaborative environments
            like{" "}
            <span className="text-white font-medium">hackathons</span> and enjoy
            tackling problems that matter to people.
          </motion.p>

          <motion.p className="text-gray-300 text-sm md:text-base" variants={textItem}>
            Beyond coding, I’m driven by a vision to create tools that make
            everyday life easier and more connected.
          </motion.p>
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
            initial={{ rotate: -2 }}
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
