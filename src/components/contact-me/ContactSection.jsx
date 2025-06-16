import { useRef, useState } from "react";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { Mail } from "lucide-react";
import emailjs from 'emailjs-com'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.sendForm(
      'service_0euws8i', //service id    
      'template_cyrabjn', //template id
      formRef.current,       // form reference
      'vGinEVgiEiBEPcOFP'   // public key
    ).then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 4000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
    });
};

  return (
    <div className="w-full sm:w-[90vw] max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10">
      {/* title */}
      <div className="flex items-center w-full sm:w-2/3">
        <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
          <span className="text-[#C778DD]">#</span>Contacts
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-6 mt-5 md:mt-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-gray-300 text-sm">
          <p className="mb-6">
            I’m open to freelance opportunities. However, if you have any other
            questions or just want to connect, don’t hesitate to reach out.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#C778DD]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#C778DD] text-white rounded-md hover:bg-opacity-80 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Right Contact Card */}
        <div className="w-full md:w-64 border border-gray-600 px-4 py-3 text-sm text-white">
          <h3 className="mb-3 font-semibold">Message me here</h3>

          <div className="flex items-center mb-2">
            <FaDiscord className="w-6 h-6" />
            <p className="text-gray-400 ml-2">rodgers.dev</p>
          </div>

          <div className="flex items-center mb-2">
            <Mail />
            <p className="text-gray-400 ml-2">munenerodgers72@gmail.com</p>
          </div>

          <div className="flex items-center">
            <FaLinkedin className="w-6 h-6" />
            <p className="text-gray-400 ml-2">rodgers-munene-19558135b</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
