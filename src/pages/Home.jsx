import Hero from "../components/common/Hero"
import { heroCTA, heroMain } from "../constant"
import Showcase from "../components/feature/Showcase"
import Footer from "../components/common/Footer"
import Button from "../components/common/Button"

const Home = () => {
  return (
    <main className="flex flex-col justify-center">
      <Hero 
      section={heroMain}
      index={0}/>
      <Showcase />
      <Hero 
      section={heroCTA}
      index={0}/>
      <Footer /> 
      <Button />
   </main>
  )
}

export default Home