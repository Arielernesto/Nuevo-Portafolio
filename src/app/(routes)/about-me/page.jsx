import  CoverParticles  from "@/components/cover-particles";
import { TransitionPage } from "@/components/transition-page";
import ContainerPage from "@/components/containerPage";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";



export default function AboutMePage() {
  return (
   
    <main className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <TransitionPage />
      <CoverParticles />   

      <ContainerPage>
        <Avatar></Avatar>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi {' '}
            <span className="font-bold text-secondary">trayectoria profesional</span>
        </h1>
        <CounterServices />

        <TimeLine />
      </ContainerPage>
    </main>
    
  );
}
