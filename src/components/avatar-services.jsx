import { MotionTransition } from "./transition-component"
import Image from "next/image"

function AvatarServices(){
    return (
        <MotionTransition position="right" className="bottom-0 left-0 hidden md:hidden lg:inline-block md:absolute">
            <Image src="/services1.png" width={250} height={300} className="w-[300] h-full" alt="Avatar Services "></Image>
        </MotionTransition>
    )
}

export default AvatarServices