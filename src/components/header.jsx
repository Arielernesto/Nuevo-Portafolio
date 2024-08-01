import { socialNetworks } from "./services/utils"
import { MotionTransition } from "./transition-component"
import Link from "next/link"
import Image from "next/image"

export const Header = () =>{
    return ( 
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full px-20">
            <header>
                <div className=" container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/" className="flex justify-center md:justify-start mt-2 flex-row mb-4 md:mb-0">
                    <Image src="/logo.png" width={60} height={50} alt="logo" className=""></Image>
                      <h1 className="text-secondary my-3 text-4xl font-bold text-center  md:text-left"> 
                      Exo
                      <span className=" text-white">
                      Code
                      </span>
                      </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({icon, link, id}) => (
                            <Link key={id} href={link} target="_blank" className="transition-all duration-100 hover:text-secondary">
                            {icon}
                            </Link>
                        ) ) }
                    </div>
                </div>
            </header>
        </MotionTransition>
    )
} 