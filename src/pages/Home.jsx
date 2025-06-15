import React from 'react'
import Hero from '../components/home-components/Hero'
import FunnyQuote from '../components/home-components/FunnyQuote'
import ProjectsSection from '../components/home-components/ProjectsHome'
import Skills from '../components/home-components/Skills'
import AboutMe from '../components/home-components/AboutMe'
import Contacts from '../components/home-components/Contacts'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Hero />
        <FunnyQuote />
        <ProjectsSection />
        <Skills />
        <AboutMe />
        <Contacts />
    </div>
  )
}

export default Home