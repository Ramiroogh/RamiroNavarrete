import Image from "next/image";
import GridComponent from "../components/Herramientas-GridItem";

const herramientasDesarrolloWeb: GridItem[] = [

]
const herramientasUXUI: GridItem[] = [
    
]
const herramientasProductividad: GridItem[] = [
    
]


export default function Herramientas() {

    return(
        <div className="mt-3 ml-3">
            <div className=" flex flex-col gap-3 ">
                <h1 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize">Mi Stack de Herramientas</h1>
                <p className="">Softwares y Herramientas que utilizo frecuentemente</p>
            </div>
            
            <section>
                <h2>Desarrollo Web</h2>
                <div>
                    {/* GRID */}

                    <div className="flex">
                        <Image src="/profile.jpg" width={10} height={10} alt="image" priority/>
                        <div>
                            <p>title</p>
                            <p>description</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}