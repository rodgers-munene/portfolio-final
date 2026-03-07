import { smallProjects } from '../../services/Data';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2 } from 'lucide-react';

const SmallProjects = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <div className="">
      <motion.div
        className="sm:w-[95vw] max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Enhanced title section */}
        <div className="mb-16 relative">
          <div
            className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <span
                className="text-[#C778DD] text-4xl sm:text-5xl font-bold mr-4"
              >
                #
              </span>
              <div>
                <h1 className="text-white text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text">
                  Small Projects
                </h1>
                <div
                  className="h-1 bg-gradient-to-r from-[#C778DD] to-purple-400 rounded-full mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {smallProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              variants={fadeUpVariant}
              className="cursor-pointer border border-[#2C2C2C] bg-[#1A1A1A] rounded-xl overflow-hidden hover:shadow-[0_0_15px_-5px_rgba(199,120,221,0.15)] hover:border-[#C778DD]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#2C2C2C]/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Code2 size={28} className="text-[#C778DD]" />
                  </div>

                  <div className="flex gap-3 text-gray-400">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition-colors p-1 hover:bg-[#2C2C2C] rounded-full"
                    >
                      <Github size={20} />
                    </a>
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
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <div
          className="w-full mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 text-gray-500 border h-12 rounded-3xl">
            <div className="ml-3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16" />
            <span className="text-sm">More experiments in the lab</span>
            <div className="mr-3 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmallProjects;
