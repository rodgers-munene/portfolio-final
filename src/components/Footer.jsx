import React from 'react'
import logo from '../assets/Logo.svg'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full border-t border-gray-500 min-h-44 flex flex-col items-center justify-between pt-4'>
        <div className='w-[90%] flex'>
            <div className='w-1/2'>
               <div className=' w-full flex items-center'>
                    <img src={logo} alt="logo" className='w-8 h-8'/>
                    <h1 className='text-white ml-3 font-medium'>Rodgers</h1>
                    <p className='text-gray-400 ml-8'>munenerodgers72@gmail.com</p>
               </div>
               <div className='mt-5'>
                <p className='text-gray-400'>Software Engineer and Design Specialist</p>
               </div>
            </div>
            <div className='w-1/2 flex justify-end'>
                <div>
                    <h1 className='text-white text-lg'>Socials</h1>
                    <div className='flex w-20 justify-between text-gray-200 mt-5'>
                        <FaGithub className='w-5 h-5 text-gray-400 cursor-pointer' />
                        <FaLinkedin className='w-5 h-5 text-gray-400 cursor-pointer'/>
                        <FaDiscord className='w-5 h-5 text-gray-400 cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <p className='text-gray-300 mb-5'>© Copyright 2022. Rodgers Munene.</p>
        </div>
    </div>
  )
}

export default Footer