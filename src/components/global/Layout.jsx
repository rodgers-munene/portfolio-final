import Header from './Header'
import Footer from './Footer'
import FloatingLinks from './FloatingLinks'

const Layout = ( {children} ) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <Header />
        <FloatingLinks />
        <main className="w-full">
            {children}
        </main>
        <Footer />

    </div>
  )
}

export default Layout