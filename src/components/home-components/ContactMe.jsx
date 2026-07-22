import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Mail, Send } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    emailjs
      .sendForm("service_0euws8i", "template_cyrabjn", formRef.current, "vGinEVgiEiBEPcOFP")
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setIsSubmitting(false);
        setError(true);
      });
  };

  return (
    <motion.section
      id="contact"
      className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-12 md:py-16 scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.div variants={fadeUp} className="mb-10">
        <p className="text-[#C778DD] text-xs sm:text-sm font-medium tracking-widest uppercase">Contact</p>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left: info */}
        <motion.div variants={fadeUp} className="w-full md:w-1/3 flex flex-col gap-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm open to freelance and collaborative projects. If you have an
            idea, a role, or just a question, reach out. I read everything
            myself.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:munenerodgers72@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={16} className="text-[#C778DD]" /> munenerodgers72@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rodgers-munene-19558135b/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={16} className="text-[#C778DD]" /> LinkedIn
            </a>
            <a href="https://github.com/rodgers-munene" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <FaGithub size={16} className="text-[#C778DD]" /> GitHub
            </a>
            <a href="https://discordapp.com/users/1050298085412175902" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
              <FaDiscord size={16} /> Discord
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeUp}
          className="w-full md:w-2/3 border border-[#2C2C2C] bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-500 mb-2 text-xs font-medium tracking-wide uppercase" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#2C2C2C] text-white text-sm rounded-lg placeholder-gray-600 outline-none focus:border-[#C778DD] focus:ring-2 focus:ring-[#C778DD]/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-2 text-xs font-medium tracking-wide uppercase" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#2C2C2C] text-white text-sm rounded-lg placeholder-gray-600 outline-none focus:border-[#C778DD] focus:ring-2 focus:ring-[#C778DD]/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-500 mb-2 text-xs font-medium tracking-wide uppercase" htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you're building..."
              className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#2C2C2C] text-white text-sm rounded-lg placeholder-gray-600 outline-none focus:border-[#C778DD] focus:ring-2 focus:ring-[#C778DD]/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-start inline-flex items-center gap-2 border border-[#C778DD] bg-[#C778DD] text-[#0B0B0D] font-medium px-6 py-2.5 text-sm rounded-lg hover:bg-transparent hover:text-[#C778DD] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send size={15} />}
          </button>

          {submitted && <p className="text-green-400 text-sm">Message sent successfully.</p>}
          {error && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactMe;
