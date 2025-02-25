import  CoverParticles  from "@/components/cover-particles";
import { TransitionPage } from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import PortfolioBox from "@/components/portfolio-box";
import { dataPortfolio, dataProjects } from "@/components/services/utils";


export default function PortfolioPage() {
  return (
    <main className="flex min-h-[100vh] justify-center h-full bg-no-repeat bg-gradient-cover ">
    <TransitionPage />
    <CoverParticles />
   
      <CircleImage />
      <section className="flex flex-col justify-center mt-40 sm:mt-40 md:mt-[100px] lg:mt-20">
        <h1 className="text-2xl leading-tight text-center  md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">   Proyectos realizados</span></h1>
        <div className="relative z-10  grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 md:pb-20">
            {
                dataPortfolio.map((data) =>(
                    <PortfolioBox key={data.id} data={data} />
                ))
            }
         
        </div>

        <h1 className="text-2xl leading-tight text-center  md:text-4xl md:mb-5 mt-5 md:mt-0">Mis últimos <span className="font-bold text-secondary">   Trabajos realizados</span></h1>
        <div className="relative z-10  grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 md:pb-20">
            {
                dataProjects.map((data) =>(
                    <PortfolioBox key={data.id} data={data} />
                ))
            }
         
        </div>

        </section>
      
      
      </main>
  );
}
