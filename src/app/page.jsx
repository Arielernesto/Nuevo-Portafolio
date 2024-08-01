import  CoverParticles  from "@/components/cover-particles";
import Image from 'next/image'
import { TransitionPage } from "@/components/transition-page";
import { Introduction } from "@/components/Introduction";

export default function Home() {
  return (
   
    <main className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <TransitionPage />
      <CoverParticles /> 
      <Introduction></Introduction>    
    </main>
  );
}
