import { motion } from "framer-motion";

const bgImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=60&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=400&q=60&auto=format&fit=crop",
];

const CTASection = () => {
  return (
    <motion.div
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden border border-[#C778DD]/30 bg-[#0B0B0D] px-6 py-12 sm:py-16 flex flex-col items-center text-center">

        {/* Background collage of project-type imagery, pushed back visually */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-7 auto-rows-fr gap-0.5 pointer-events-none select-none">
          {bgImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-35 blur-[1px] scale-105"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/55 via-[#0B0B0D]/60 to-[#0B0B0D]/75" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium max-w-xl">
            Have a project in mind? Let's build it right.
          </h2>
          <a
            href="#contact"
            className="border border-[#C778DD] bg-[#C778DD] text-[#0B0B0D] font-medium px-6 py-2.5 mt-8 text-sm sm:text-base hover:bg-transparent hover:text-[#C778DD] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CTASection;
