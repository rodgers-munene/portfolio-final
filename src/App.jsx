import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/global/Layout"
import Home from "./pages/Home"


function App() {

  return (
    <div className='bg-[#282C33] w-screen min-h-screen flex flex-col items-center transition-colors duration-500'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}/>
        </Routes>
      </Router>     
    </div>
  )
}

export default App
