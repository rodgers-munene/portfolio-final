import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Hamburger = () => {
    const location = useLocation()
    const navLinks = [
    {name: "Home", path: "/"},
    {name: "works", path: "/projects"},
    {name: "about-me", path: "/about-me"},
    {name: "contact", path: "/contact-me"},
  ]

  return (
    <div className='w-52 h-auto bg-gray-900 flex flex-col rounded-lg'>
        {navLinks.map((item, index) => {
            const isActive = location.pathname === item.path

            return(
                <Link 
                key={index}
                to={item.path}
                className={`w-full  pl-4 py-3 ${isActive? "text-white bg-gray-800": "text-gray-400"}`}>
                    <span className='text-[#C778DD]'>#</span>{item.name}</Link>
            )
        })}

    </div>
  )
}

export default Hamburger