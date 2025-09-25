import { motion } from "framer-motion";
import { ArrowRight, ArrowRightLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { ProjectsData } from "../../services/Data";

// Simplified animation variant (fade up only)
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Static title section (no animation) */}
      <div className="w-full flex items-center justify-between gap-4 mb-12">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex items-center">
            <span className="text-[#C778DD] mr-2">#</span>projects
          </h1>
         <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
        </div>

        <button
          onClick={() => navigate("/projects")}
          className="flex items-center text-white hover:text-[#C778DD] transition-colors min-w-24"
        >
          View all <ArrowRight className="ml-2" size={18} />
        </button>
      </div>

      {/* Projects grid with fade-up only */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.slice(0, 3).map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="border border-[#2C2C2C] bg-[#1A1A1A] rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="relative overflow-hidden h-48 bg-[#2C2C2C]">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${index !== 1 ? "object-cover" : "object-contain"}`}
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.map((item, idx) => (
                  <span key={idx} className="text-xs text-gray-400 bg-[#2C2C2C] px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>

              <h2 className="text-lg font-medium text-white mb-2">{project.title}</h2>
              <p className="text-sm text-gray-400 mb-4 flex-1">{project.shortDesc}</p>

              <div className="flex gap-2 mt-auto">
                {index !== 1 && (
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    className="flex items-center text-sm border border-[#C778DD] text-[#C778DD] hover:bg-gray-700 hover:border-gray-700 hover:text-white! py-2 px-4 rounded transition-colors"
                  >
                    Live <ArrowRightLeft className="ml-2" size={14} />
                  </Link>
                )}
                {index !== 0 && (
                  <Link
                  to={project.gitLink}
                  target="_blank"
                  className="flex items-center text-sm border border-[#C778DD] text-[#C778DD] hover:bg-gray-700 hover:border-gray-700 hover:text-white! py-2 px-4 rounded transition-colors"
                >
                  Code <FaGithub className="ml-2" size={14} />
                </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;