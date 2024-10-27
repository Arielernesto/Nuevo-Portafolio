"use client"
import { dataPortfolio, dataProjects } from "./services/utils"
import Image from "next/image"
import { MotionTransition } from "./transition-component"
import Link from "next/link"

export default function ProjectContainer({ id }) {
    const project = dataPortfolio.find(item => item.id == id) ?? dataProjects.find(item => item.id == id)
    return (
    <div className="w-full justify-center flex h-full"> 

    <div className=" mt-36 md:mt-28  flex absolute w-[80%] 2lg:w-[100%] lg:flex-row flex-col overflow-hidden">
      <div className="w-[100%] flex 2lg:justify-end justify-center">
        <MotionTransition position="bottom" className="w-full md:w-[80%] 2lg:w-auto">
        <Image src={project.image} alt={project.title} width={500} height={500} className="rounded-2xl object-cover 3lg:ms-24 "/>
        </MotionTransition>
      </div>
      
      <MotionTransition position="right" className="w-[100%] flex 2lg:block justify-center 2lg:justify-normal ">
        <section className="flex 2lg:justify-center flex-col 2lg:w-[100%] md:w-[80%] w-full">
           <h2 className=" font-bold 2lg:ms-5  sm:text-4xl text-2xl">{project.title}</h2>

           <div className=" flex gap-2 mt-2 flex-wrap 2lg:ms-5">
                {
                    project.tecnologies.map((data,index) => (
                        <span key={index} className={`p-1 rounded-md font-bold text-[10px] ${data.color}  border`}>{data.name}</span>
                    ))
                }
            </div>

            <div className="flex gap-5  mt-5 2lg:ms-5">
                <Link href={project.urlGithub} target="_blank" className=" p-2 px-4 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/60">
                    Github
                </Link>
                <Link href={project.urlDemo} className=" p-2 px-4 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/60   ">
                    Demo
                </Link>
            </div>
      
            <div className="2lg:mx-5  flex w-auto mt-3  text-base">
                <p classname="text-wrap   truncate overflow-hidden break-words whitespace-normal">
                 {project.description}
                </p>
            </div>
        </section>
        </MotionTransition>

    </div>

    </div>
  )
}
