import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
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
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // New State for Modal

  // Helper: Categorize projects
  const filteredProjects = ProjectsData.filter((project) => {
    if (activeTab === "all") return true;
    const stackString = project.stack.join(" ").toLowerCase();
    
    if (activeTab === "mobile") return stackString.includes("reactnative") || stackString.includes("expo") || stackString.includes("flutter") || stackString.includes("android");
    if (activeTab === "backend") return stackString.includes("nodejs") || stackString.includes("expressjs") || stackString.includes("python") || stackString.includes("postgress");
    if (activeTab === "web") return stackString.includes("reactjs") || stackString.includes("php");
    return true;
  });

  // Helper: Map icons
  const getProjectIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("agro")) return <Tractor size={28} className="text-[#C778DD]" />;
    if (t.includes("shop") || t.includes("cart")) return <ShoppingBag size={28} className="text-[#C778DD]" />;
    if (t.includes("film") || t.includes("movie")) return <Film size={28} className="text-[#C778DD]" />;
    if (t.includes("event")) return <Calendar size={28} className="text-[#C778DD]" />;
    if (t.includes("portfolio")) return <User size={28} className="text-[#C778DD]" />;
    return <Layout size={28} className="text-[#C778DD]" />;
  };

  return (
    <section className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex items-center whitespace-nowrap">
            <span className="text-[#C778DD] mr-2">#</span>projects
          </h1>
          <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]/40"></div>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          {[ { id: "all", label: "All" }, { id: "mobile", label: "Mobile" }, { id: "backend", label: "Backend" }, { id: "web", label: "Web" } ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm sm:text-base transition-colors relative pb-1 ${activeTab === tab.id ? "text-white font-medium" : "text-gray-500 hover:text-gray-300"}`}
            >
              {tab.label}
              {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C778DD]" />}
            </button>
          ))}
        </div>
      </div>

      {/* --- Grid Layout --- */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeUpVariant}
              onClick={() => setSelectedProject(project)} // 1. CLICK TO OPEN MODAL
              className="cursor-pointer border border-[#2C2C2C] bg-[#1A1A1A] rounded-xl p-6 hover:shadow-[0_0_15px_-5px_rgba(199,120,221,0.15)] hover:border-[#C778DD]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#2C2C2C]/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {getProjectIcon(project.title)}
                </div>
                
                <div className="flex gap-3 text-gray-400">
                   {project.gitLink && (
                    <a 
                      href={project.gitLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()} // 2. PREVENT MODAL OPENING
                      className="hover:text-white transition-colors p-1 hover:bg-[#2C2C2C] rounded-full"
                    >
                      <Code2 size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()} // 2. PREVENT MODAL OPENING
                      className="hover:text-white transition-colors p-1 hover:bg-[#2C2C2C] rounded-full"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-[11px] uppercase tracking-wider text-[#C778DD] bg-[#C778DD]/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[11px] text-gray-500 px-2 py-1">+{project.stack.length - 3} more</span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

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
                      className="flex-1 flex items-center justify-center gap-2 bg-[#2C2C2C] hover:bg-[#3D3D3D] text-white py-3 rounded-lg transition-colors font-medium"
                    >
                      <Code2 size={18} /> View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-[#C778DD] hover:bg-[#a04fa0] text-black py-3 rounded-lg transition-colors font-bold"
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