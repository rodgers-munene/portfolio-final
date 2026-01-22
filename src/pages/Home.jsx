import Hero from "../components/home-components/Hero";
import FunnyQuote from "../components/home-components/FunnyQuote";
import ProjectsSection from "../components/home-components/ProjectsHome";
import Skills from "../components/home-components/Skills";
import AboutMe from "../components/home-components/AboutMe";
import ContactMe from "../components/home-components/ContactMe";
import EducationSection from "../components/home-components/EducationSection";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
     

      <div className="relative z-10 flex flex-col gap-2">
        <Hero />
        <FunnyQuote />
        <AboutMe />
        <EducationSection />
        <ProjectsSection />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
