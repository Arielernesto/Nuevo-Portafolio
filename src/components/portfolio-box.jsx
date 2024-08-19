import Image from "next/image"
import Link from "next/link"
function PortfolioBox({ data }){
    return (
        <article className="p-4 border border-teal-50  rounded-xl overflow-hidden">
            <h3 className="mb-4 text-xl text-nowrap">
                {data.title}
            </h3>
            <Image src={data.image} alt="Image product" width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-[150px] object-cover"></Image>
            <div className=" flex gap-2 mt-2 flex-wrap justify-center">
                {
                    data.tecnologies.map((data,index) => (
                        <span key={index} className={`p-1 rounded-md font-bold text-[10px] ${data.color}  border`}>{data.name}</span>
                    ))
                }
                {/* <span className=" p-1 rounded-md  text-blue-600 font-bold text-[10px] border-blue-600 border">React</span>  
                
                <span className=" p-1 rounded-md text-secondary font-bold text-[10px] border-secondary border">Laravel</span>
                <span className=" p-1 rounded-md text-secondary  font-bold text-[10px] border-secondary border">Laravel</span> */}
            </div>
            
            <div className="flex gap-5  mt-5 justify-center">
                <Link href={data.urlGithub} target="_blank" className=" p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/60">
                    Github
                </Link>
                <Link href={data.urlDemo} target="_blank" className=" p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/60   ">
                    Demo
                </Link>
            </div>
        </article>
    )
}

export default PortfolioBox