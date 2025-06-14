import React from 'react'
import Hero from '../components/Hero'
import FunnyQuote from '../components/FunnyQuote'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Hero />
        <FunnyQuote />
        <Projects />
    </div>
  )
}

export default Home