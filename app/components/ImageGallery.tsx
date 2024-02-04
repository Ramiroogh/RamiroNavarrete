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
        <div className="flex gap-3 p-10">

            <div className=" flex flex-col gap-5  ">
                {images.map((image: any, index: any) => (
                    <div key={index} className="w-40 overflow-hidden rounded-lg">
                        <Image
                        src={urlFor(image).url()}
                        alt="image"
                        className="h-full w-full object-cover object-center cursor-pointer"
                        width={500}
                        height={500}
                        priority
                        onClick={() => handleChangeImage(image)}
                        />
                    </div>
                ))}
            </div>
            
            {/* Vista de la imagen GRANDE */}
            <div className="fixed right-10 top-10 w-1/2   ">
                <Image
                src={urlFor(bigImage).url()}
                width={1000}
                height={1000}
                alt="image"
                priority
                className="rounded-lg"
                />
            </div>
            
        </div>
        </>
    )
}