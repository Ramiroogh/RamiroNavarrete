import ImageGallery from "@/app/components/ImageGallery"
import { client } from "../../../utils/sanity/client"


async function getData(slug: string) {
    const querie = `*[_type == 'job' && slug.current == "${slug}"][0]{
        _id,
        images,
        name,
        description,
        objetive,
        releaseDate,
        link,
        "slug": slug.current,
        "categoryName": category->name,
    }`
    const data = client.fetch(querie)
    return data
}

export default async function JobUI({ params } : { params: {slug: string} }) {
    const data: job = await getData(params.slug)
    return(
        <div className="flex gap-3">
            <ImageGallery images={data.images}/>

            <div className="relative">
                <div className="fixed top-80 mt-5  right-40">
                <p>{data.name}</p>
                <div className="w-96">
                    <p>{data.description}</p>
                    <p>{data.description}</p>
                </div>
                
            </div>
            </div>
            
            
        </div>
    )
}