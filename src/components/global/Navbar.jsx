import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navLinks = [
    {name: "Home", path: "/"},
    {name: "works", path: "/projects"},
    {name: "about-me", path: "/about-me"},
    {name: "contact", path: "/contact-me"},
  ]
 
  return (
    <div className='flex w-full h-full justify-between'>
        {navLinks.map((item, index) => {
        const isActive = location.pathname === item.path
        return (
           <Link 
           key={index} 
           to={item.path}
           className={`text-gray-400 ${isActive? "text-white" : ""}`}
           ><span className='text-[#C778DD]'>#</span>{item.name}</Link>
        )})}
    </div>
  )
}

export default Navbar