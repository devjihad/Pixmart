import Hero from "./Components/Hero"
import Hero2 from "./Components/Hero2"
import Navbar from "./Components/Navbar"
import Spotlight from "./Components/Spotlight"

function App() {


  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar/>
     <Hero/>
     <Hero2/>
     <Spotlight/>
    </div>
    </>
  )
}

export default App
