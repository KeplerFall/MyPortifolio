import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe"
import MySkills from "@/components/MySkills"

export default function Home() {
  return (
    <>
      
      <div>
        <div>
          <ProfileCard></ProfileCard>
          <AboutMe></AboutMe>
        </div>
        <MySkills></MySkills>
      </div>
    </>
  )
}
