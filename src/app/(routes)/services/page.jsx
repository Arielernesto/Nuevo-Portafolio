import  CoverParticles  from "@/components/cover-particles";
import { TransitionPage } from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function ServicesPage() {
  return (
   
    <main className="flex  ">
      <TransitionPage />
      <CoverParticles /> 
      <CircleImage />  
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6  mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-[130px] md:mt-[40px] lg:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl  md:mb-5">
            Mis {' '}
            <span className=" font-bold text-secondary "> 
             servicios
            </span>
          </h1>
          <p className="mb-3 text-xl px-3 sm:px-2 md:px-0 lg:px-0  text-gray-300  text-center md:text-left lg:text-left">Ofrezco servicios de desarrollo web FullStack especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea. </p>
          <div className="flex justify-center md:justify-start lg:justify-start">
          <button className="px-3 py-2   rounded-lg  bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
          </div>
        </div>

        <div className="">
          <SliderServices></SliderServices>
        </div>
      </div>
    </main>
  );
}
