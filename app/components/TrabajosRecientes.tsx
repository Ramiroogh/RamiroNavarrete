import { client } from "@/utils/sanity/client"
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const query = `*[_type == 'job'][0...4] | order(_createdAt desc) {
    _id,
    name,
    releaseDate,
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
        <div className="mt-5">
            <h2 className="text-2lg font-bold tracing-tight text-primary">Trabajos Recientes</h2>

            <div className="mt-6 grid frid-cols-1 gap-x-6 gap-y-10 sm:grid-cols2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((job) => (
                        <div key={job._id} className="group relative">
                            <div className="aspect-square w-52 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image src={job.imageUrl} alt="image" width={1000} height={1000} className="w-full h-full object-cover object-center lg:h-full lg:w-full"/>
                            </div>

                            <div className="mt-4 flex justify-between">
                                <div >
                                    <h3 className="text-lg text-gray-700 justify-between">
                                        <Link href={`/trabajo/${job.slug}`}>
                                        {job.name}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-gray-700">{job.categoryName}</p>
                                </div>
                                <p className="font-medium">{job.releaseDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}