import  CoverParticles  from "@/components/cover-particles";
import Image from 'next/image'

export default function Home() {
  return (
   
    <main className="inline-block min-h-[100vh]  bg-no-repeat bg-gradient-cover">
      <h1>Hola, esta es la sección Sobre Mí</h1>
      <Image src="/FONDO.jpeg" alt="sdasd" width={500} height={100} />
       <CoverParticles /> 
    </main>
  );
}
