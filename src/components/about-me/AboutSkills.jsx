import { motion } from "framer-motion";
import { skillsData } from "../../services/Data";

const AboutSkills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillCard = {
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

  return (
    <motion.div
      className="w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      {/* Title */}
      <motion.div
        className="flex items-center w-full sm:w-2/3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
          <motion.span
            className="text-[#C778DD] mr-1"
            animate={{
              scale: [1, 1.1, 1],
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
          skills
        </h1>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5"
        variants={container}
      >
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-600 rounded-md overflow-hidden bg-[#282C33]"
            variants={skillCard}
            whileHover={{
              borderColor: "#C778DD",
              boxShadow: "0 10px 20px -5px rgba(199, 120, 221, 0.2)",
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <h1 className="text-white font-medium text-lg bg-[#1E2227] px-4 py-2 border-b border-gray-600">
              {item.title}
            </h1>
            <div className="flex flex-wrap gap-1 p-4">
              {item.details.map((data, i) => (
                <motion.span
                  key={i}
                  className="text-sm md:text-base text-[#ABB2BF] px-3 py-1 rounded hover:bg-[#2C2C2C]"
                  whileHover={{
                    color: "#C778DD",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {data}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;
