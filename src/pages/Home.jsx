import Hero from "../components/home-components/Hero";
import ProjectsSection from "../components/home-components/ProjectsHome";
import CoreCapabilities from "../components/home-components/CoreCapabilities";
import FunnyQuote from "../components/home-components/FunnyQuote";
import AboutMe from "../components/home-components/AboutMe";
import CTASection from "../components/home-components/CTASection";
import ContactMe from "../components/home-components/ContactMe";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10 flex flex-col gap-2">
        <Hero />
        <ProjectsSection />
        <CoreCapabilities />
        <FunnyQuote />
        <AboutMe />
        <CTASection />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
