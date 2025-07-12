import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";

const ContactMe = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const pulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const highlight = {
    hidden: { opacity: 0.7 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Animated title */}
      <motion.div className="mb-6 md:mb-8 lg:mb-10">
        <div className="flex items-center w-full">
          <motion.h1 
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mr-3 flex"
            variants={item}
          >
            <motion.span 
              className="text-[#C778DD]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              #
            </motion.span>
            contacts
          </motion.h1>
          <motion.div 
            className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      
      <motion.div 
        className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-6 mt-5 md:mt-10"
        variants={container}
      >
        {/* Text Section */}
        <motion.div 
          className="w-full md:w-96 text-gray-300 text-sm"
          variants={item}
        >
          <motion.p variants={item}>
            I'm open to <motion.span 
              className="text-[#C778DD] font-medium"
              variants={highlight}
              animate="visible"
            >
              freelance opportunities
            </motion.span>. However, if you have any other
            questions or just want to connect, don't hesitate to reach out.
          </motion.p>
        </motion.div>

        
        <motion.div 
          className="w-full md:w-64 border border-gray-600 px-4 py-3 text-sm text-white relative overflow-hidden"
          variants={item}
          whileHover={{ 
            borderColor: "#C778DD",
            boxShadow: "0 0 15px rgba(199, 120, 221, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
         
          <motion.div 
            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#C778DD] opacity-10"
            variants={pulse}
            animate="animate"
          />
          
          <h3 className="mb-3 font-semibold text-white relative z-10">
            Message me here
          </h3>
          
          <div 
            className="flex items-center mb-2 relative z-10"
          >
            <div >
              <FaDiscord className="w-6 h-6 text-[#5865F2]" />
            </div>
            <p className="text-gray-400 ml-2 hover:text-white transition-colors">
              rodgers.dev
            </p>
          </div>
          
          <div 
            className="flex items-center relative z-10"
          >
            <div >
              <Mail className="text-[#C778DD]" />
            </div>
            <p className="text-gray-400 ml-2 hover:text-white transition-colors">
              munenerodgers72@gmail.com
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;