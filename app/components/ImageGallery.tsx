"use client"
import Image from "next/image"
import { urlFor } from "@/utils/sanity/imageUrlSanity"
import { useState } from "react"

interface iAppProps {
    images: any;
}

export default function ImageGallery({images}: iAppProps) {

    const [bigImage, setBigImage] = useState(images[0])
    // Alternar imagenes
    const handleChangeImage = (image: any) => {
        setBigImage(image)
    }

    return(
        <>
        <div className="flex gap-28 mt-5 w-4/3 h-heightVistaTrabajo justify-center z-10">

            {/* Previews miniatura */}
            <div className="flex flex-col gap-5">
                {images.map((image: any, index: any) => (
                    <div key={index} className="w-20 overflow-hidden rounded-lg border border-gray-500/30">
                        <Image
                        src={urlFor(image).url()}
                        alt="image"
                        className="h-full w-full object-cover object-center cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:shadow-xl"
                        width={500}
                        height={500}
                        priority
                        onClick={() => handleChangeImage(image)}
                        />
                    </div>
                ))}
            </div>
            
            {/* Vista de la imagen GRANDE */}
            <div className="w-jobImageBig h-jobImageBig">
                {/* La imagen depende del estado useState */}
                <Image
                src={urlFor(bigImage).url()}
                width={1000}
                height={1000}
                alt="image"
                priority
                className="rounded-xl shadow-lg "
                />
            </div>
            
        </div>
        </>
    )
}