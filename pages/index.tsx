import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe"
import MyExperiences from "@/components/MyExperiences"
import MyProjects from "../components/MyProjects"


export default function Home() {
  return (
    <>
      
      <div>
        <div>
          <ProfileCard></ProfileCard>
          <AboutMe></AboutMe>
        </div>
        <MyExperiences></MyExperiences>
        <MyProjects></MyProjects>
      </div>
    </>
  )
}
