import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ProjectsData } from "../../services/Data";


const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ProjectsSection = () => {
  return (
    <section className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <div className="w-full flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center w-full">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex items-center whitespace-nowrap">
            <span className="text-[#C778DD] mr-2">#</span>projects
          </h1>
          <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
        </div>
        <button
          className="flex items-center text-white hover:text-[#C778DD] transition-colors min-w-24 text-sm"
        >
          View all <ArrowRight className="ml-2" size={18} />
        </button>
      </div>

      {/* Compact Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="border border-[#2C2C2C] bg-[#1A1A1A] rounded-lg overflow-hidden"
          >
            {/* Compact content */}
            <div className="p-4">
              {/* Title */}
              <h3 className="text-white font-medium text-base leading-tight mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-3">
                {project.shortDesc}
              </p>

              {/* Stack tags - compact */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-400 px-2 py-0.5 rounded border border-[#2C2C2C] bg-[#0D0D0D]"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-xs text-[#C778DD] px-2 py-0.5">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-sm border border-[#C778DD] text-[#C778DD] hover:text-white py-2 px-4 rounded transition-all flex-1"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-sm border border-[#C778DD] text-[#C778DD] hover:text-white py-2 px-4 rounded transition-all flex-1"
                  >
                    <Github size={14} />
                    Code
                  </a>
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