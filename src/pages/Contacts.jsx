import ContactSection from '../components/contact-me/ContactSection'


const Contacts = () => {
  return (
    <div className='min-h-[70vh]'>
         <div className='w-full sm:w-[90vw] mt-6 max-w-7xl mx-auto px-4 py-6'>
            <h1 className='text-white text-4xl font-medium'><span className='text-[#C778DD]'>/</span>contacts</h1>
            <p className='text-gray-400 mt-3'>How to reach me?</p>
        </div>

        <ContactSection />

    </div>
  )
}

export default Contacts