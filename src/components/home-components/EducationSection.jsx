import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

// Sample education data
const educationData = [
  {
    degree: "High School Diploma",
    institution: "Meru School",
    location: "Meru, Kenya",
    period: "2018 - 2022",
    description: "Completed secondary education with focus on sciences and mathematics.",
    achievements: ["Final Grade A-"]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Dedan Kimathi University of Technology",
    location: "Nyeri, Kenya",
    period: "2022 - Present",
    description: "Pursuing degree in Computer Science with focus on software engineering and mobile development.",
    achievements: ["Final Year Project: AgroTrack+"]
  }
];

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

const EducationSection = () => {
  return (
    <section className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <div className="w-full flex items-center mb-12">
        <h1 className="text-white text-2xl sm:text-3xl mr-3 flex items-center whitespace-nowrap">
          <span className="text-[#C778DD] mr-2">#</span>education
        </h1>
        <div className="hidden sm:block flex-grow max-w-lg border-b h-0 border-[#C778DD]"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-[29px] top-8 bottom-8 w-0.5 bg-[#C778DD]"></div>

        {/* Education items */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-[60px] h-[60px] items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#C778DD] border-4 border-[#0D0D0D] z-10"></div>
              </div>

              {/* Content card */}
              <div className="md:ml-[90px] border border-[#2C2C2C] bg-[#1A1A1A] rounded-lg p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-1 flex items-start gap-2">
                      <GraduationCap className="text-[#C778DD] mt-1 flex-shrink-0" size={20} />
                      {edu.degree}
                    </h3>
                    <p className="text-[#C778DD] font-medium">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-col gap-1 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <p className="text-white text-sm font-medium mb-2">Key Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-400 px-3 py-1.5 rounded border border-[#2C2C2C] bg-[#0D0D0D]"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Arrow connector for mobile */}
              {index < educationData.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-[#C778DD]"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Current status indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="relative mt-8"
        >
          {/* <div className="hidden md:flex absolute left-0 top-3 w-[60px] items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#C778DD] animate-pulse border-4 border-[#0D0D0D] z-10"></div>
          </div>
          
          <div className="md:ml-[90px] border border-[#C778DD] bg-[#1A1A1A] rounded-lg p-4">
            <p className="text-white font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C778DD] animate-pulse"></span>
              Currently pursuing degree - Expected graduation 2026
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;