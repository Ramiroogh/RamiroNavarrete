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
        <div className="mt-2">
            <h2 className="text-2xl font-bold tracing-tight text-primary">Trabajos Recientes</h2>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 ">
                    {data.map((job) => (
                        <div key={job._id} className="group relative border border-gray-300 bg-white flex flex-col items-center w-80  rounded-md hover:shadow-xl">
                            <div className="aspect-square w-50 h-50 overflow-hidden rounded-lg lg:h-80">
                                <Image src={job.imageUrl} alt="image" width={500} height={500} className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-110"/>
                            </div>

                            <div className="py-5 flex flex-col justify-between w-60">
                                <div className="flex flex-col items-center gap-3">
                                    <h3 className="text-lg text-gray-700 justify-between">
                                        {job.name}
                                    </h3>
                                    <p className="text-sm text-primary font-medium">{job.categoryName}</p>
                                    <Link href={`/job/${job.slug}`}>
                                        <Button className="px-10 text-white">Ver Trabajo</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}