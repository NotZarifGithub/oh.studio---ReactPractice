import Project from "./components/common/Project"
import Navbar from "./components/feature/Navbar"
import Home from "./pages/Home"
import Showcase from "./components/feature/Showcase"

function App() {
  return (
   <main className="flex flex-col ">
    <Navbar />
    <Home />
   </main>
  )
}

export default App
