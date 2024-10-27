"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export function Introduction(){
    return (
        <section className=" z-20 w-full overflow-hidden ">
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 '>
                <Image className='mt-0 md:mt-5' src="/home-4.png" priority width="800" height="800" alt="Profile pic"  />

                <div className="flex flex-col justify-center max-w-full lg:max-w-md md-max-w-md  sm:max-w-full">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl sm-text-2xl md:mb-10 text-nowrap">Si puedes pensarlo, <br /> <TypeAnimation sequence={[
                        "puedes programarlo",
                        1000,
                        "puedes optimizarlo",
                        1000,
                        "puedes implementarlo",
                        1000,
                        "puedes desarrollarlo",
                        1000,
                        "puedes hacerlo",
                        1000
                    ]} 
                    wrapper='span'
                    speed={30}
                    repeat={Infinity}
                    className="font-bold text-secondary"></TypeAnimation></h1>

                    <p className='mx-auto mb-4 text-xl md:max-0 md:mb-8  text-center md:text-left lg:text-left'>
                        Como desarrollador fullstack, me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className='flex items-center justify-center md:justify-start md:gap-10'>
                        <Link href="/portfolio" className="px-3 py-2 lg:mr-0 md:mr-0 sm:mr-4 mr-4 transition-all border-2 cursor-pointer md:text-md text-sm text-nowrap  w-fit rounded-xl hover:shadow-xl  hover:shadow-white/50">
                            Ver proyectos
                        </Link>

                        <Link href="https://wa.link/h3aqzm" target="_blank" className="px-3 py-2 transition-all border-2 cursor-pointer md:text-md text-sm text-nowrap w-fit rounded-xl hover:shadow-xl text-secondary border-secondary  hover:shadow-secondary">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}