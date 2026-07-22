import { useState } from 'react'
import Navbar from './Navbar'
import { Menu, XIcon } from 'lucide-react'
import logo from '../../assets/Logo.svg'
import Hamburger from './Hamburger'

const Header = () => {
  const [isHamMenu, setIsHamMenu] = useState(false)

  const toggleNavbar = () => {
    setIsHamMenu((prev) => !prev);
  }

  return (
    <div id="top" className='relative w-[90vw] max-w-7xl h-14 flex justify-between items-center'>
        {/* Logo */}
        <a href='#top' className='flex cursor-pointer'>
            <img src={logo} alt="logo" className='w-8 h-8'/>
            <h1 className='ml-4 text-white font-medium'>Rodgers <span className='text-[#C778DD]'>Munene</span></h1>
        </a>

        <div className='md:w-1/2 lg:w-1/3 hidden md:block'>
            <Navbar />
        </div>

        <a
          href='#contact'
          className='hidden md:inline-block border border-[#C778DD] text-[#C778DD] px-4 py-1.5 text-sm hover:bg-[#C778DD] hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300'
        >
          Let's Talk
        </a>

        {/* hamburger menu */}
        <div className='block md:hidden'>
          <button
          onClick={toggleNavbar}
          className=''>
            {isHamMenu? <XIcon className='text-white'/> : <Menu className='text-white'/>}
          </button>


          <div
          onClick={toggleNavbar}
          className={`absolute right-0 transition-transform duration-500 ${isHamMenu? "top-12": "-top-60"}`}>
            <Hamburger />
          </div>
        </div>


    </div>
  )
}

export default Header
