import React from 'react'
import ProjectsSection from '../components/projects/ProjectsSection'
import SmallProjects from '../components/projects/SmallProjects'

const Projects = () => {
  return (
    <div className='min-h-screen'>
        {/* title */}
        <div className='w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6'>
            <h1 className='text-white text-4xl font-medium'><span className='text-[#C778DD]'>/</span>projects</h1>
            <p className='text-gray-400 mt-3'>List of My Projects</p>
        </div>

        {/* Major project */}
        <ProjectsSection />

        {/* Small Projects */}
        <SmallProjects />
        
    </div>
  )
}

export default Projects