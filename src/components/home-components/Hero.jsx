import outline from "../../assets/outline.png";
import hacker from "../../assets/hackerNoBg.png";
import dots from "../../assets/Dots.svg";
import myResume from "../../assets/rodgers_munene_CV.pdf";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full px-4 sm:px-0 sm:w-[90vw] max-w-7xl flex flex-col sm:flex-row h-auto sm:h-80 mt-8 sm:mt-14 justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* intro section */}
      <div className="w-full sm:w-1/2 min-h-full flex flex-col items-center sm:items-start text-center sm:text-left">
        <motion.h1
          variants={fadeUp}
          className="text-white font-bold text-base sm:text-lg lg:text-2xl"
        >
          {" "}
          <span className="text-[#C778DD]">Software Developer</span>,{" "}
          <span className="text-[#C778DD]">Designer</span>, and a{" "}
          <span className="text-[#C778DD]">Problem Solver</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 mt-4 sm:mt-7 max-w-md text-sm sm:text-base lg:text-lg"
        >
          Turning ideas into scalable solutions, with clean architecture and
          interfaces that just click.
        </motion.p>

        <div className="flex gap-x-3">
          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/contact-me")}
            className="border border-[#C778DD] text-white px-3 py-1 mt-5 sm:mt-7 hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors text-sm sm:text-base lg:text-lg"
          >
            Hire Me!
          </motion.button>
          <motion.a
            href={myResume}
            download="rodgers_munene_CV.pdf"
            variants={fadeUp}
          >
            <button className="border border-[#C778DD] text-white px-3 py-1 mt-5 sm:mt-7 hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors text-sm sm:text-base lg:text-lg">
              Download CV
            </button>
          </motion.a>
        </div>
      </div>

      {/* image section */}
      <div className="relative flex flex-col items-center sm:items-start mt-10 sm:mt-0">
        {/* outline image */}
        <img
          src={outline}
          alt="outline"
          className="absolute top-5 left-5 sm:left-14 w-12 sm:w-20 lg:w-24"
        />

        {/* hacker image with subtle float */}
        <motion.img
          src={hacker}
          alt="hacker"
          className="w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[28rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* dots image */}
        <img
          src={dots}
          alt="dots"
          className="absolute bottom-10 sm:top-32 md:top-24 right-0 w-8 sm:w-10 lg:w-12"
        />

        {/* project working on - bounce in */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          className="flex border border-gray-500 items-center mt-5 sm:mt-0 px-2 py-1"
        >
          <div className="w-3 h-3 sm:w-5 sm:h-5 bg-[#C778DD]"></div>
          <p className="ml-2 text-gray-400 text-xs sm:text-sm">
            Currently working on <span className="text-white">Agrotrack</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
