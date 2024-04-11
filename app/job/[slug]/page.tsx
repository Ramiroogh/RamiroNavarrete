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
import { Link2, NotebookText, Palette } from "lucide-react"

async function getData(slug: string) {
    const querie = `*[_type == 'job' && slug.current == "${slug}"][0]{
        _id,
        images,
        name,
        description,
        objetive,
        releaseDate,
        technology,
        link,
        "slug": slug.current,
        "categoryName": category->name,
    }`
    const data = client.fetch(querie)
    return data
}

export default async function JobUI({ params }: { params: { slug: string } }) {
    const data: job = await getData(params.slug)
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 mb-10 ">
        
            {/* BLOB */}
            <div
            aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl -right-30 -top-28'>
                <div style={{
                    clipPath: 'polygon(20.1% 44.1%, 2% 80%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%,   45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3daaf8] to-[#3daaf8] opacity-30 sm:left-[calc(50%-10rem)] md:sm:left-[calc(60%-10rem)] sm:w-[72.1875rem]'
                />
            </div>

            <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 mt-52 top-96 transform-gpu overflow-hidden blur-2xl -z-10'>
                <div style={{
                    clipPath: 'polygon( 20.5% 26.9%, 80.7% 2%,  60.2% 62.4%,  47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%,   27.6% 76.8%)',
                    }}
                    className='relative left-[calc(60%-10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-96 rotate-[30deg] bg-gradient-to-tr from-[#3daaf8] to-[#3daaf8] opacity-30 md:left-[calc(80%-36rem)] sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'/>
                </div>

            <div className="container w-3/4 bg-secondary border border-gray-500/20 rounded-lg py-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-start justify-between mt-5">

                    <div className="flex flex-col gap-3">
                        <p className="text-xl w-80 font-medium">{data.name}</p>
                        <p className="text-sm">📅 Fecha: {data.releaseDate}</p>
                    </div>
                    
                    <Sheet>
                        <SheetTrigger asChild className="hover:bg-green-600 transition duration-300">
                            <Button className="px-3 text-sm flex gap-2 text-white bg-primary hover:bg-blue-800 border-0"><NotebookText width={20} height={20} />Ver Información</Button>
                        </SheetTrigger>
                        {/* --- ESTO ES LO QUE SE RENDERIZA, AL CLICKEAR "VER INFORMACIÓN" ---*/}
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <div className="py-5 flex flex-col">
                                        <p className="md:text-md">{data.name}</p>
                                        <p className="text-orange-500 md:text-sm">{data.categoryName}</p>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    <p className="text-lg font-bold md:text-sm">Descripción</p>
                                    <p className="md:text-sm">{data.description}</p>
                                </SheetDescription>
                                <SheetDescription>
                                    <div className="mt-5">
                                        <p className="text-lg font-bold md:text-sm">Objetivo</p>
                                        <p className="md:text-sm">{data.objetive}</p>
                                    </div>
                                </SheetDescription>
                                <SheetDescription>
                                    <div className="mt-5 mb-10">
                                        <p className="text-lg font-bold md:text-sm">Tecnologías Utilizadas</p>
                                        <p className="md:text-sm">{data.technology}</p>
                                    </div>
                                </SheetDescription>
                                {/* CONDITIONAL BUTTON */}
                                {data.link ? (
                                    <Button asChild className="hover:bg-green-600 transition duration-300">
                                        <Link className="text-white" href={data.link}>Link del Proyecto</Link>
                                    </Button>
                                ) : null}
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="mt-10">
                    <ImageGallery images={data.images} />
                </div>
            </div>

            <div className="w-3/4 my-20 flex flex-col gap-3 z-10">
                
                <p className="text-3xl">Aviso</p>
                <div className="flex gap-3 justify-between pt-3 border-t border-gray-500/20">
                    <Link2 width={50} height={50}/>
                    <p className="">Los enlaces de los trabajos, con el tiempo pueden dejar de funcionar, por miles de razones como por ejemplo el renovamiento de dominio.</p>
                </div>
                <div className="flex gap-3 justify-between pt-3 border-t border-gray-500/20">
                    <Palette width={100} height={100}/>
                    <p className="">Con respecto a mis trabajos, siempre valido con el cliente su idea, quizas aveces no me gusta personalmente algun detalle de diseño o implementación, pero siempre respeto lo que el cliente solicita. Es por eso que no existe proyecto perfecto, y el gusto es subjetivo, sin nombrar el nicho, tipos de necesidades, etc.</p>
                </div>
                
                
            </div>

        </div>
    )
}
