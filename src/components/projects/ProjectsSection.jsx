import React, { useState } from 'react';
import { ProjectsData } from '../../services/Data';
import {Github, Eye, Code, Info } from 'lucide-react';

// Mock ProjectsData for demonstration

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  
  return (
    <div className="min-h-screen">
      <div 
        className="w-screen sm:w-[95vw] max-w-7xl mx-auto px-6 py-12"
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
                  Featured Projects
                </h1>
                <div 
                  className="h-1 bg-gradient-to-r from-[#C778DD] to-purple-400 rounded-full mt-2"                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Enhanced projects grid */}
        <div 
          className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"

        >
          {ProjectsData.map((project, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card background glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 transition duration-1000" />
              
              <div className="relative w-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Image section with overlay */}
                <div className="relative overflow-hidden h-56 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300" />
                  
                  {/* Floating action buttons */}
                  <div 
                    className="absolute top-4 right-4 flex gap-2"
                  
                  >
                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-purple-600/60 transition-colors"
                    >
                      <Info size={18} />
                    </button>
                  </div>
                </div>

                {/* Tech stack pills */}
                <div className="p-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-4 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Expandable description */}
                  <section>
                    {expandedProject === index && (
                      <div
                        className="overflow-hidden"
                      >
                        <div className="bg-gray-800/50 rounded-lg p-4 mb-4 border border-gray-700/30">
                          <h4 className="text-purple-300 font-medium mb-2 flex items-center">
                            <Code size={16} className="mr-2" />
                            Project Details
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </section>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-pink-500  text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 shadow-lg"
                      >
                        <Eye size={16} />
                        Live Demo
                      </a>
                    )}
                    
                    {index !== 0  && (
                      <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveLink ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 shadow-lg`}                    
                    >
                      <Github size={16} />
                      Code
                    </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div 
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4 text-gray-500">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
            <span className="text-sm">More projects coming soon</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;