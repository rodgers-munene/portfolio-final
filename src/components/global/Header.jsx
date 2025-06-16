import React, { useState } from 'react'
import Navbar from './Navbar'
import { Menu, XIcon } from 'lucide-react'
import logo from '../../assets/Logo.svg'
import Hamburger from './Hamburger'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isHamMenu, setIsHamMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleNavbar = () => {
    setIsHamMenu((prev) => !prev);
  }
 
  return (
    <div className='relative w-[90vw] max-w-7xl h-14 flex justify-between items-center'>
        {/* Logo */}
        <div
        onClick={() => {
          if(location.pathname !== '/'){
             navigate('/')
          }
        }}
         className='flex cursor-pointer'>
            <img src={logo} alt="logo" className='w-8 h-8'/>
            <h1 className='ml-4 text-white font-medium'>Rodgers</h1>
        </div>
        <div className='md:w-1/2 lg:w-1/3 hidden md:block'>
            <Navbar />
        </div>
        {/* hamburger menu */}
        <div className='block md:hidden'>
          <button
          onClick={toggleNavbar}
          className=''>
            {isHamMenu? <XIcon className='text-white'/> : <Menu className='text-white'/>}
          </button>

    
          <div className={`absolute right-0 transition-tranform duration-500 ${isHamMenu? "top-12": "-top-52"}`}>
            <Hamburger />
          </div>
        </div>


    </div>
  )
}

export default Header
/* Header */

/* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: flex-end;
// padding: 32px 0px 8px;
// gap: 555px;

// position: absolute;
// width: 1024px;
// height: 61px;
// left: 171px;
// top: 0px;

/* background */
// background: #282C33;
