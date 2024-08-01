import { MotionTransition } from "./transition-component"
import Image from "next/image"

function Avatar(){
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:fixed">
            <Image src="/avatar1.png" width={400} height={400} className="w-full h-full md:w-[300px] lg:w-[400px]" alt="Avatar"></Image>
        </MotionTransition>
    )
}
export default Avatar