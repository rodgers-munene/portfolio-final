import { motion } from "framer-motion";
import { funFacts } from "../../services/Data";
import outline from "../../assets/outline.png";
import dots from "../../assets/Dots.svg";

// Variants
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

const factItem = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(199, 120, 221, 0.1)",
    borderColor: "#C778DD",
    color: "#fff",
    rotate: [0, 2, -2, 0],
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FunFacts = () => {
  return (
    <motion.div
      className="w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Title */}
      <motion.div
        className="mb-8 flex items-center w-full sm:w-2/3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
          <span className="text-[#C778DD] mr-1">#</span>my-fun-facts
        </h1>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full mt-5 gap-6">
        {/* Fun Facts */}
        <motion.div className="flex md:w-1/2 flex-wrap gap-4" variants={container}>
          {funFacts.map((fact, index) => (
            <motion.p
              key={index}
              className="text-gray-200 border border-gray-400 py-2 px-3 text-sm rounded cursor-default"
              variants={factItem}
              whileHover="hover"
            >
              {fact}
            </motion.p>
          ))}
        </motion.div>

        {/* Decorative Image */}
        <motion.div className="relative md:w-1/2 min-h-40 w-full flex">
          <motion.img
            src={outline}
            alt="outline"
            className="absolute right-0 bottom-0 opacity-70"
            variants={floatingAnimation}
            animate="animate"
          />
          <motion.img
            src={dots}
            alt="decorative dots"
            className="w-14 z-10"
            variants={floatingAnimation}
            animate="animate"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FunFacts;
