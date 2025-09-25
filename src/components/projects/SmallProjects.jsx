import { smallProjects } from '../../services/Data';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Zap, Star } from 'lucide-react';

const SmallProjects = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8
      }
    }
  };

  const titleItem = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Color variants for cards
  const cardColors = [
    'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    'from-green-500/20 to-emerald-500/20 border-green-500/30',
    'from-orange-500/20 to-red-500/20 border-orange-500/30',
    'from-violet-500/20 to-purple-500/20 border-violet-500/30',
    'from-teal-500/20 to-blue-500/20 border-teal-500/30'
  ];

  const accentColors = [
    'text-purple-400',
    'text-blue-400', 
    'text-green-400',
    'text-orange-400',
    'text-violet-400',
    'text-teal-400'
  ];

  const buttonColors = [
    'bg-purple-600 shadow-purple-500/25',
    'bg-blue-600 shadow-blue-500/25',
    'bg-green-600 shadow-green-500/25', 
    'bg-orange-600 shadow-orange-500/25',
    'bg-violet-600 shadow-violet-500/25',
    'bg-teal-600 shadow-teal-500/25'
  ];

  return (
    <div className="">
      <motion.div 
        className="sm:w-[95vw] max-w-7xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        {/* Enhanced title section */}
        <motion.div className="mb-16 relative">
          {/* Background decoration */}
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
          
          <div className="relative flex items-center justify-between flex-wrap gap-4">
            <motion.div className="flex items-center" variants={titleItem}>
              <motion.span 
                className="text-[#C778DD] text-4xl sm:text-5xl font-bold mr-4"
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                #
              </motion.span>
              <div>
                <h1 className="text-white text-3xl sm:text-4xl font-bold">
                  Small Projects
                </h1>
                <motion.div 
                  className="h-1 bg-gradient-to-r from-[#C778DD] to-purple-400 rounded-full mt-2"
                />
                <p className="text-gray-400 mt-3 text-lg">
                  Quick experiments and useful utilities
                </p>
              </div>
            </motion.div>

            {/* Stats badge */}
            <motion.div 
              className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700/50"
              variants={titleItem}
            >
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} />
                <span className="text-sm font-medium">{smallProjects.length}</span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-1 text-purple-400">
                <Code2 size={16} />
                <span className="text-sm font-medium">Projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced projects grid */}
        <motion.div 
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
        >
          {smallProjects.map((project, index) => {
            const colorIndex = index % cardColors.length;
            return (
              <motion.div 
                key={index}
                className={`relative group bg-gradient-to-br ${cardColors[colorIndex]} backdrop-blur-sm border rounded-2xl overflow-hidden shadow-xl`}
                variants={item}
              >
                {/* Top accent bar */}
                <div className={`h-1 bg-gradient-to-r ${cardColors[colorIndex].includes('purple') ? 'from-purple-500 to-pink-500' : 
                  cardColors[colorIndex].includes('blue') ? 'from-blue-500 to-cyan-500' :
                  cardColors[colorIndex].includes('green') ? 'from-green-500 to-emerald-500' :
                  cardColors[colorIndex].includes('orange') ? 'from-orange-500 to-red-500' :
                  cardColors[colorIndex].includes('violet') ? 'from-violet-500 to-purple-500' :
                  'from-teal-500 to-blue-500'}`} />

                {/* Tech stack section */}
                <div className="p-5 pb-3">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className={`p-1.5 bg-gray-800/50 rounded-lg ${accentColors[colorIndex]}`}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Zap size={16} />
                    </motion.div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, idx) => (
                        <motion.span 
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium bg-gray-800/60 ${accentColors[colorIndex]} rounded-full border border-gray-600/30`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="px-5 pb-6">
                  <h3 className={`text-xl font-bold text-white mb-3 ${accentColors[colorIndex]}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action button */}
                  <motion.a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 border border-pink-400 text-white py-2.5 px-6 rounded font-medium text-sm transition-all duration-200 shadow-lg w-full`}
                    
                  >
                    <Github size={18} />
                    View Source
                  </motion.a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Code2 size={24} className="text-white" />
                </div>
                
                {/* Bottom glow effect */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r ${cardColors[colorIndex].includes('purple') ? 'from-purple-500/30 to-pink-500/30' : 
                  cardColors[colorIndex].includes('blue') ? 'from-blue-500/30 to-cyan-500/30' :
                  cardColors[colorIndex].includes('green') ? 'from-green-500/30 to-emerald-500/30' :
                  cardColors[colorIndex].includes('orange') ? 'from-orange-500/30 to-red-500/30' :
                  cardColors[colorIndex].includes('violet') ? 'from-violet-500/30 to-purple-500/30' :
                  'from-teal-500/30 to-blue-500/30'} rounded-full blur-lg`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom section */}
        <motion.div 
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 text-gray-500 bg-gray-800/30 px-6 py-3 rounded-full border border-gray-700/50">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16" />
            <span className="text-sm whitespace-nowrap">More experiments in progress</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SmallProjects;
