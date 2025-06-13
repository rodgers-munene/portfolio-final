import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <div className='w-[90vw] h-14 flex justify-between items-center'>
        {/* Logo */}
        <div className='w-1/3 flex'>
            <img src={logo} alt="logo" className='w-8 h-8'/>
            <h1 className='ml-4 text-white font-medium '>Rodgers</h1>
        </div>
        <div className='w-1/3'>
            <Navbar />
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
