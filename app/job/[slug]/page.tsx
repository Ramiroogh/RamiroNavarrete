import ImageGallery from "@/app/components/ImageGallery"
import { client } from "../../../utils/sanity/client"

// UI
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"



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
        <div className="flex flex-col">
            <div className="flex items-center gap-5 px-10 pt-10">
                <p className="text-lg font-medium">{data.name}</p>
            <Sheet >
            <SheetTrigger><Button className="px-2 text-sm">Ver Información</Button></SheetTrigger>
            <SheetContent className="w-96">
                <SheetHeader>
                <SheetTitle className="mt-5">
                    <p>{data.name}</p>
                    <p className="text-orange-500">Categoria: {data.categoryName}</p>
                </SheetTitle>

                <SheetDescription>
                    <p className="text-sm font-bold">Descripción</p>
                    <p>{data.description}</p>
                </SheetDescription>

                <SheetDescription>
                    <p className="text-sm font-bold">Objetivo</p>
                    <p>{data.objetive}</p>
                </SheetDescription>

                    <Link href={data.link}  target="_blank"><Button>Link del Proyecto</Button></Link>
            </SheetHeader>
            </SheetContent>
            </Sheet>
            </div>
            
            <div>
                <ImageGallery images={data.images}/>
            </div>
        </div>
    )
}