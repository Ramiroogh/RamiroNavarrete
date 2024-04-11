import { Button } from "@/components/ui/button";
import { client } from "@/utils/sanity/client"
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const query = `*[_type == 'job'][0...4] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl":  images[0].asset->url
    }`
    const data = await client.fetch(query)
    return data;
}

export default async function  TrabajosRecientes() {
    const data: TrabajosRecientes[] = await getData()

    return(
        <div className=" flex flex-col md:py-16 lg:w-4/5 ">
            
            <div className='relative'>
                
                <div
                aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl -right-30 -top-52'>
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2a46ff] to-[#0783dc] opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]'
                        />
                    </div>
                    
                    
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-16 gap-5 transition duration-300 rounded-lg md:mx-3">
                        
                        {/* SE MAPEA CON LOS DATOS CARGADOS, Y RENDERIZAR CADA CARD */}
                        {data.map((job) => (
                            <div key={job._id} className="w-64 md:w-52 relative border border-gray-500/30 flex flex-col items-center justify-between  p-5 h-cardJobSize rounded-lg hover:shadow-xl transition duration-300 bg-secondary/40 filter hover:bg-gray-500/20 z-10">

                                <div className="aspect-square w-full md:w-40 md:h-40 overflow-hidden rounded-lg">
                                    <Image src={job.imageUrl} alt="image" width={800} height={800} className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"/>
                                </div>

                                
                                    <div className="flex flex-col gap-3 justify-between w-40">
                                        <p className="md:text-sm text-md justify-between">
                                            {job.name}
                                        </p>
                                        <p className="text-sm font-bold">{job.categoryName}</p>
                                        <Link href={`/job/${job.slug}`}>
                                            <Button className="md:px-6  px-16 flex gap-2 text-white bg-blue-500 hover:bg-green-600 transition duration-300 text-sm md:text-md"><Eye className="w-3 md:w-5"/>Ver Trabajo</Button>
                                        </Link>
                                    
                                </div>

                            </div>
                        ))}
                    

                </div>
            </div>

            </div>
    )
}