import Link from "next/link"
import Image from "next/image"
import {client} from "../../utils/sanity/client"
import { Button } from "@/components/ui/button"

async function getData(category: string) {
    const query = `*[_type == 'job' && category->name == "${category}"] {
    _id,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl":  images[0].asset->url
    }`
    const data = await client.fetch(query)
    return data;
}

export default async function Category({params} : {params: {category: string}}) {
    const data: TrabajosRecientes[] = await getData(params.category)
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold tracing-tight text-gray-900">Productos de la categoria {params.category}</h2>

                </div>

                <div className="mt-6 grid frid-cols-1 gap-x-6 gap-y-10 sm:frid-cols2 lg:grid-cols-4 xl:gap-x-8">
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
    )
}