const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
]

const Navbar = () => {
  return (
    <div className='flex w-full h-full justify-between items-center'>
      {navLinks.map((item, index) => (
        <a key={index} href={item.href} className='text-gray-400 hover:text-white transition-colors'>
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Navbar
