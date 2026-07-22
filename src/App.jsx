import Layout from "./components/global/Layout"
import Home from "./pages/Home"

function App() {
  return (
    <div className='relative bg-[#0B0B0D] w-screen min-h-screen overflow-x-hidden flex flex-col items-center'>
      <div className="relative z-10 w-full">
        <Layout>
          <Home />
        </Layout>
      </div>
    </div>
  )
}

export default App
