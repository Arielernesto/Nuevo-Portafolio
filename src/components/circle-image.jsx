import Image from "next/image"

export function CircleImage(){
    return (
        <section className="bottom-0 right-0 hidden md:inline-block  md:fixed">
            <Image src="/circles.png" width={200} height={200} alt="Circle image" className="w-full h-full"></Image>
        </section>
    )
}

export default CircleImage