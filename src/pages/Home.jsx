import React from 'react'
import Hero from '../components/home-components/Hero'
import FunnyQuote from '../components/home-components/FunnyQuote'
import ProjectsSection from '../components/home-components/ProjectsHome'
import Skills from '../components/home-components/Skills'
import AboutMe from '../components/home-components/AboutMe'
import ContactMe from '../components/home-components/ContactMe'


const Home = () => {
  return (
    <div className='min-h-screen'>
        <Hero />
        <FunnyQuote />
        <ProjectsSection />
        <Skills />
        <AboutMe />
        <ContactMe />
    </div>
  )
}

export default Home