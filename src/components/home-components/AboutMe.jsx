import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const values = ["Clean architecture", "Clear communication", "Shipping to real users"];

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16 scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.div variants={fadeUp} className="mb-10">
        <p className="text-[#C778DD] text-xs sm:text-sm font-medium tracking-widest uppercase">About</p>
      </motion.div>

      <div className="max-w-3xl flex flex-col gap-5">
        <motion.p variants={fadeUp} className="text-gray-300 text-sm md:text-base leading-relaxed">
          I'm Rodgers, a software engineer based in Kenya. I build web, mobile,
          and backend systems: from clean, responsive UIs to secure, scalable
          APIs.
        </motion.p>

        <motion.p variants={fadeUp} className="text-gray-300 text-sm md:text-base leading-relaxed">
          I co-founded{" "}
          <strong className="text-[#C778DD]">
            <a href="https://ekshop.store" target="_blank" rel="noreferrer">
              EkShop
            </a>
          </strong>
          , a local e-commerce platform serving students and residents in
          Nyeri with M-Pesa payments, now used by{" "}
          <span className="text-white font-medium">150+ users</span> with{" "}
          <span className="text-white font-medium">15+ deliveries daily</span>.
          I also built{" "}
          <strong className="text-[#C778DD]">Agrotrack</strong>, a React
          Native app that helps farmers track crops, soil health, and
          weather, and{" "}
          <strong className="text-[#C778DD]">SwiftCart</strong>, a full-stack
          e-commerce platform with M-Pesa integration.
        </motion.p>

        <motion.p variants={fadeUp} className="text-gray-300 text-sm md:text-base leading-relaxed">
          I work primarily in React, Node.js, and PostgreSQL, and I'm
          comfortable across the stack: from database design to deployment.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-3">
          {values.map((value, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm text-gray-300 bg-[#1A1A1A] border border-[#2C2C2C] px-3 py-1.5 rounded"
            >
              {value}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
