import ProjectContainer from "@/components/ProjectContainer"
import  CoverParticles  from "@/components/cover-particles";
import { TransitionPage } from "@/components/transition-page";

export default function ProjectPage({params}) {

    return (
    <div>
       <TransitionPage />
       <CoverParticles />
       
      <ProjectContainer id={params.id}/>
    </div>
  )
}
