import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe"
import MySkills from "@/components/MySkills"
import MyProjects from "../components/MyProjects"


export default function Home() {
  return (
    <>
      
      <div>
        <div>
          <ProfileCard></ProfileCard>
          <AboutMe></AboutMe>
        </div>
        <MySkills></MySkills>
        <MyProjects></MyProjects>
      </div>
    </>
  )
}
