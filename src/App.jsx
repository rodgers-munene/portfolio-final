import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/global/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contacts from "./pages/Contacts"


function App() {

  return (
    <div className='bg-[#282C33] w-screen min-h-screen flex flex-col items-center transition-colors duration-500'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}/>
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/about-me" element={<Layout><About /></Layout>} />
          <Route path="/contact-me" element={<Layout><Contacts /></Layout>} />
        </Routes>
      </Router>     
    </div>
  )
}

export default App
