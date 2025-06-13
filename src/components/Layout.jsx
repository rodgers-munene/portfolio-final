import React from 'react'
import ThemeToggle from './ToggleTheme'
import Header from './Header'
import Footer from './Footer'

const Layout = ( {children} ) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Header />
        <ThemeToggle />
        <main>
            {children}
        </main>
        <Footer />

    </div>
  )
}

export default Layout