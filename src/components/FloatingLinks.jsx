import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const FloatingLinks = () => {
  return (
    <div className='hidden fixed top-0 left-2 lg:left-4 w-10 h-64 md:flex flex-col items-center'>
        <div className='w-0 h-[60%] border-r border-gray-300'></div>
        <div className='h-[40%] flex flex-col justify-around'>
            <FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <FaLinkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <FaDiscord className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </div>
    </div>
  )
}

export default FloatingLinks