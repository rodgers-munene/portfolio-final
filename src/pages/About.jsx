import { useEffect } from 'react'
import AboutMe from '../components/about-me/AboutMe'
import AboutSkills from '../components/about-me/AboutSkills'
import FunFacts from '../components/about-me/FunFacts'
import { useLocation } from 'react-router-dom'

const About = () => {
   const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className='min-h-screen'>
         <div className='w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6'>
            <h1 className='text-white text-4xl font-medium'><span className='text-[#C778DD]'>/</span>about-me</h1>
            <p className='text-gray-400 mt-3'>Who am I?</p>
        </div>

        <AboutMe />
        <AboutSkills />
        <FunFacts />

    </div>
  )
}

export default About