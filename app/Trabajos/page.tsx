import Link from "next/link"
import TrabajosRecientes from "../components/TrabajosRecientes"
import "../Trabajos/styles.css"
import ReseñasCarrousel from "../components/Reseñas/ReseñasCarrousel"
import { Suspense } from "react"
import Loader from "../components/Loading/Loading"
import { Quote } from "lucide-react"

const Trabajos: React.FC = () => {

    return (
        
        <div className="flex flex-col w-screen items-center">
            <Suspense fallback={<Loader />}>
            

                    {/* BANNER */}
            <div className="relative w-screen h-heightHero p-10 flex items-center">
                
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop className="object-cover w-full h-full">
                        <source src="/bg-video-trabajos.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="absolute inset-0 z-10 bg-black opacity-70">
                {/* Background dark effect */}
                </div>

                <div className="relative z-10 w-screen flex px-16 justify-end gap-3">
                    <div className="flex flex-col w-3/4 justify-end text-right gap-10">
                        <h1 className="text-6xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Descubre Mis Trabajos Realizados</h1>
                        <h2 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Adaptado a cualquier nicho, mediante habilidades de <span className="text-blue-400 text-4xl">Desarrollador Web Frontend</span> & <span className="text-blue-400 text-4xl">Diseñador UX UI</span>.</h2>
                        <p className=" text-xl text-white">Desde sitios web elegantes hasta aplicaciones interactivas, cada proyecto refleja mi pasión por la creación digital y la excelencia técnica como visual.</p>
                    </div>
                </div>

            </div>

            {/* SECTION ADEMÁS */}
            <div className="flex w-screen px-32 py-16 gap-10">
                <div className="bg-primary mt-10 w-32 h-32 flex items-center justify-center p-10 rounded-full">
                    <Quote width={50} height={50} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="title-hero3 text-6xl josefin-sans leading-22 tracking-wider break-words mt-10 title-reseñas">Además...</p>
                    <p className=" text-xl pt-5 reseñas-description-responsive-mobile">Para reforzar tu confianza, hecha un vistazo los testimonios de clientes que han solicitado mis servicios. Descubre por qué mis clientes confían en mí una y otra vez, quedando siempre satisfechos.</p>
                    <p className="text-md font-bold">Testimonios</p>
                </div>
            </div>

            <ReseñasCarrousel />

            <div className="w-3/4 ">
                <p className="text-4xl font-semibold tracking-normal scroll-m-20 uppercase">Explora mis Trabajos</p>
            </div>
            
            <TrabajosRecientes />
            
            </Suspense>
        </div>
    )
}

export default Trabajos