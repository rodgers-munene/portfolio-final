import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/global/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contacts from "./pages/Contacts"

function App() {

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    currentTarget.style.setProperty("--mouse-x", `${clientX}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className='relative bg-[#111] w-screen min-h-screen overflow-x-hidden flex flex-col items-center transition-colors duration-500'
    >
      
      {/* 1. BACKGROUND GRID (Stays Absolute so it scrolls with content) */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. SPOTLIGHT (Changed to FIXED so it stays with mouse on scroll) */}
      <div 
        className="pointer-events-none fixed inset-0 z-1 transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at var(--mouse-x, 50% 50%) var(--mouse-y, 50% 50%), rgba(29, 78, 216, 0.4), transparent 80%)`
        }}
      ></div>
      
      {/* 3. VIGNETTE (Optional - kept absolute to darken page edges) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#000000_120%)]"></div>

      {/* 4. CONTENT */}
      <div className="relative z-10 w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>}/>
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/about-me" element={<Layout><About /></Layout>} />
            <Route path="/contact-me" element={<Layout><Contacts /></Layout>} />
          </Routes>
        </Router>     
      </div>
    </div>
  )
}

export default App