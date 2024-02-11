import { Button } from "@/components/ui/button";
import { client } from "@/utils/sanity/client"
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
        <div className="w-screen flex flex-col items-center">
            <h2 className="text-5xl font-bold tracing-tight text-primary">Trabajos Recientes</h2>

            <div className='relative isolate mt-10 w-4/5'>
                
                <div
                aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl -right-96 -top-52'>
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef9003] to-[#e7d78d] opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]'
                        />
                    </div>

                    
                    <div className=' flow-root'>
                        <div className=' rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/5 '>

                                <div className="mt-6 grid grid-cols-4 gap-52 p-5 border bg-gray-500/10 border-gray-300 hover:shadow-xl transition duration-300 rounded-lg">
                                    {data.map((job) => (
                                    <div key={job._id} className="group relative border border-gray-300  flex flex-col items-center justify-between w-72 h-cardJobSize  rounded-lg hover:shadow-xl transition duration-300 bg-gray-500/20">
                                        <div className="aspect-square w-60 h-44 m-5 overflow-hidden rounded-lg ">
                                            <Image src={job.imageUrl} alt="image" width={500} height={500} className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"/>
                                        </div>
                                        <div className="py-5 flex flex-col justify-between w-60">
                                            <div className="flex flex-col items-center gap-3">
                                                <h3 className="text-white text-lg justify-between">
                                                    {job.name}
                                                </h3>
                                                <p className="text-lg text-orange-400 font-bold">{job.categoryName}</p>
                                                <Link href={`/job/${job.slug}`}>
                                                    <Button className="px-10 text-white bg-blue-500">Ver Trabajo</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                        </div>
                    </div>

                <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 -top-80 -right-96 -z-10 transform-gpu overflow-hidden blur-2xl '>
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'/>
                    </div>
            </div>
        </div>
    )
}