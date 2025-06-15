import React from 'react'
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FloatingLinks = () => {
  return (
    <div className='hidden fixed top-0 left-2 lg:left-4 w-10 h-64 md:flex flex-col items-center'>
        <div className='w-0 h-[60%] border-r border-gray-300'></div>
        <div className='h-[40%] flex flex-col justify-around'>
            <Link to={"https://discordapp.com/users/1050298085412175902"} target='_blank' className=''><FaDiscord className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" /></Link>
            <Link to={"https://www.linkedin.com/in/rodgers-munene-19558135b/"} target='_blank'><FaLinkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" /> </Link>
            <Link to={"https://github.com/rodgers-munene"} target='_blank' className=''><FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" /> </Link>
        </div>
    </div>
  )
}

export default FloatingLinks