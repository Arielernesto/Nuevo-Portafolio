import  CoverParticles  from "@/components/cover-particles";
import Image from 'next/image'


export default function Home() {
  return (
   
    <main className="flex min-h-[50vh] b-full bg-no-repeat bg-gradient-cover">
      <h1>Hola Mundo</h1>
      <Image src="/FONDO.jpeg" alt="sdasd" width={500} height={100} />
       <CoverParticles /> 
    </main>
  );
}
