import React from 'react'
import Hero from '../components/home-components/Hero'
import FunnyQuote from '../components/home-components/FunnyQuote'
import Projects from '../components/home-components/Projects'
import Skills from '../components/home-components/Skills'
import AboutMe from '../components/home-components/AboutMe'
import Contacts from '../components/home-components/Contacts'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Hero />
        <FunnyQuote />
        <Projects />
        <Skills />
        <AboutMe />
        <Contacts />
    </div>
  )
}

export default Home