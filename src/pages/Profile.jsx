import Hero from "../components/common/Hero"
import { heroCTA, heroMain } from "../constant"
import Project from "../components/common/Project"
import Experience from "../components/feature/Experience"
import Clients from "../components/feature/Clients"
import Footer from "../components/common/Footer"
import Button from "../components/common/Button"

const Profile = () => {
  return (
    <main className="flex flex-col justify-center">
      <Hero 
      section={heroMain}
      index={1}
      />
      <Project 
      index1={13}
      index2={13}
      />
      <Hero 
      section={heroMain}
      title={"About"}
      index={2}
      /> 
      <Hero 
      section={heroMain}
      title={"Experience"}
      index={3}
      /> 
      <Experience />
      <Hero 
      section={heroMain}
      title={"Clients"}
      index={4}
      />
      <Clients />
      <Hero 
      section={heroCTA}
      index={0}/>
      <Footer /> 
      <Button />
    </main> 
  )
}

export default Profile