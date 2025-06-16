import React from 'react'
import { smallProjects } from '../../services/Data'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SmallProjects = () => {
  return (
    <div className='sm:w-[90vw] max-w-7xl mx-auto px-4 py-6'>
        {/* title section */}
      <div className="">
        <div className="flex items-center w-full sm:w-2/3">
          <h1 className="text-white text-2xl sm:text-3xl mr-3 flex">
            <span className="text-[#C778DD]">#</span>small-projects </h1>
        </div>
      </div>

      {/* small projects  */}
       <div className="grid gap-6 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {smallProjects.map((project, index) => (
                    <div key={index} className="border border-gray-400 flex flex-col">
                          
                      {/* tags */}
                      <div className="w-full border-b border-gray-400 min-h-6 flex items-center py-3 px-2 flex-wrap">
                        {project.stack.map((item, idx) => (
                          <p key={idx} className="mr-2 text-sm text-gray-300">
                            {item}
                          </p>
                        ))}
                      </div>
      
                      {/* name and desc */}
                      <div className="px-2 py-4 flex flex-col justify-between flex-1 ">
                        <h1 className="text-base sm:text-lg text-white">
                          {project.title}
                        </h1>
                        <p className="text-sm text-gray-300 my-2">
                          {project.description}
                        </p>
      
                        <Link 
                        to={project.gitLink}
                        target='_blank'k
                        className="flex items-center border text-white border-[#C778DD] hover:bg-[#C778DD] py-1 px-3 w-max mt-auto">
                          Github <FaGithub className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
    </div>
  )
}

export default SmallProjects