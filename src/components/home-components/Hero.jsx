import myResume from "../../assets/RodgersMunene_resume.pdf";
import { motion } from "framer-motion";
import { Code2, Smartphone, Server, ShoppingBag } from "lucide-react";

const bgImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&q=60&auto=format&fit=crop",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const specializations = [
  { label: "Full-Stack Development", icon: Code2 },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "Backend & APIs", icon: Server },
  { label: "E-commerce & Payments", icon: ShoppingBag },
];

const Hero = () => {
  return (
    <div className="relative left-1/2 w-screen -ml-[50vw] overflow-hidden">
      {/* Background collage, pushed back visually behind the text */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-5 auto-rows-fr gap-0.5 pointer-events-none select-none">
        {bgImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-20 blur-[1px] scale-105"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/90 to-[#0B0B0D]/95" />

      <motion.div
        className="relative z-10 w-full px-4 sm:px-0 sm:w-[90vw] max-w-7xl mx-auto flex flex-col items-center text-center mt-10 sm:mt-20 pb-10 sm:pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
      <motion.div
        variants={fadeUp}
        className="border border-[#2C2C2C] text-gray-400 text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide"
      >
        Available for new projects
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight"
      >
        Building software that{" "}
        <span className="text-[#C778DD]">works in production</span>, not just
        in demos.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-gray-400 mt-5 max-w-xl text-sm sm:text-base lg:text-lg"
      >
        I design and build web, mobile, and backend systems: from clean
        architecture to interfaces people actually enjoy using.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-3 gap-y-3 mt-8">
        <a
          href="#work"
          className="border border-[#C778DD] bg-[#C778DD] text-[#0B0B0D] font-medium px-5 py-2 text-sm sm:text-base hover:bg-transparent hover:text-[#C778DD] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-[#C778DD] bg-transparent text-[#C778DD] px-5 py-2 text-sm sm:text-base hover:bg-[#C778DD] hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          Start a Project
        </a>
      </motion.div>

      <motion.a
        variants={fadeUp}
        href={myResume}
        download="rodgers_munene_CV.pdf"
        className="text-gray-500 hover:text-gray-300 text-xs sm:text-sm mt-4 underline underline-offset-4 transition-colors"
      >
        Download Résumé
      </motion.a>

      <motion.div
        variants={fadeUp}
        className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 border-t border-[#2C2C2C] pt-8 w-full max-w-2xl"
      >
        {specializations.map(({ label, icon: Icon }, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <Icon size={16} className="text-[#C778DD]" />
            {label}
          </div>
        ))}
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
