import { motion } from "framer-motion";
import { capabilitiesData } from "../../services/Data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CoreCapabilities = () => {
  return (
    <section id="expertise" className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16 scroll-mt-20">
      <div className="mb-10">
        <p className="text-[#C778DD] text-xs sm:text-sm font-medium tracking-widest uppercase">Expertise</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        {capabilitiesData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border border-[#2C2C2C] bg-[#1A1A1A] p-4 hover:border-[#C778DD]/50 transition-colors duration-300"
          >
            <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] text-gray-300 bg-[#0B0B0D] border border-[#2C2C2C] px-2 py-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreCapabilities;
