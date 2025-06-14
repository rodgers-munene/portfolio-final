import React from 'react'
import Hero from '../components/Hero'
import FunnyQuote from '../components/FunnyQuote'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'

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