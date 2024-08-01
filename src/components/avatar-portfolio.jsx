"use client"
import { MotionTransition } from "./transition-component"
import Image from "next/image"

function AvatarPortfolio(){
    return (
        <MotionTransition position="bottom" className=" bottom-0 left-0 hidden md:inline-block md:fixed">
            <Image src="/avatar-works.png" width={300} height={300} className="w-full h-full " alt="Avatar Works"></Image>
        </MotionTransition>
    )
}

export default AvatarPortfolio