import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Code2,
  ShoppingBag,
  Tractor,
  Film,
  Calendar,
  User,
  Layout,
  X // Added Close Icon
} from "lucide-react";
import { ProjectsData } from "../../services/Data";

// Animation Variants for Grid
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

// Animation Variants for Modal
const modalVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } }
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null); // New State for Modal

  // Helper: Map icons
  const getProjectIcon = (title, size = 28) => {
    const t = title.toLowerCase();
    if (t.includes("agro")) return <Tractor size={size} className="text-[#C778DD] flex-shrink-0" />;
    if (t.includes("shop") || t.includes("cart")) return <ShoppingBag size={size} className="text-[#C778DD] flex-shrink-0" />;
    if (t.includes("film") || t.includes("movie")) return <Film size={size} className="text-[#C778DD] flex-shrink-0" />;
    if (t.includes("event")) return <Calendar size={size} className="text-[#C778DD] flex-shrink-0" />;
    if (t.includes("portfolio")) return <User size={size} className="text-[#C778DD] flex-shrink-0" />;
    return <Layout size={size} className="text-[#C778DD] flex-shrink-0" />;
  };

  return (
    <section id="work" className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16 scroll-mt-20">

      {/* --- Header Section --- */}
      <div className="mb-12">
        <p className="text-[#C778DD] text-xs sm:text-sm font-medium tracking-widest uppercase">Work</p>
      </div>

      {/* --- Grid Layout --- */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {ProjectsData.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeUpVariant}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="cursor-pointer border border-[#2C2C2C] bg-[#1A1A1A] hover:border-[#C778DD]/50 transition-colors duration-300 flex flex-col gap-3 p-4 group"
            >

              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  {getProjectIcon(project.title, 18)}
                  <h3 className="text-white font-medium text-sm truncate">{project.title}</h3>
                </div>

                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1 text-gray-500 hover:text-white transition-colors flex-shrink-0"
                  >
                    <Code2 size={15} />
                  </a>
                )}
              </div>

              <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                {project.description}
              </p>

              <div className="flex items-end justify-between gap-2 mt-auto pt-1">
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider text-[#C778DD] bg-[#C778DD]/10 px-1.5 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/visit inline-flex items-center gap-1 text-[#C778DD] text-xs font-medium underline underline-offset-2 flex-shrink-0 hover:gap-1.5 transition-all"
                  >
                    Visit
                    <ArrowRight size={13} />
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ backdropFilter: "blur(5px)" }} // Blur the background
          >
            {/* Dark Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80"
            />

            {/* Modal Content */}
            <motion.div 
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#2C2C2C] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#2C2C2C] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#C778DD]/50"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-[#C778DD] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Image (Using the image from your Data) */}
              <div className="w-full h-48 sm:h-64 bg-[#2C2C2C] relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {getProjectIcon(selectedProject.title)}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Full Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-white text-sm font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, idx) => (
                      <span key={idx} className="text-xs sm:text-sm text-[#C778DD] bg-[#C778DD]/10 px-3 py-1.5 rounded-full border border-[#C778DD]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 pt-6 border-t border-[#2C2C2C]">
                  {selectedProject.gitLink && (
                    <a
                      href={selectedProject.gitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-[#2C2C2C] bg-[#2C2C2C] text-white py-3 rounded-lg hover:bg-transparent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium"
                    >
                      <Code2 size={18} /> View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-[#C778DD] bg-[#C778DD] text-[#0B0B0D] py-3 rounded-lg hover:bg-transparent hover:text-[#C778DD] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-bold"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectsSection;