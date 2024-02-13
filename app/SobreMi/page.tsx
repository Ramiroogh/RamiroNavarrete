import Image from "next/image";
import Hero from "../components/SobreMi/Hero";
import Link from "next/link";



export default function SobreMi() {

    return(
        <div className="px-10 flex flex-col justify-center items-center">

            <Hero />

            <section className="mt-20 w-3/4">
                <h2 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize border-b-4 border-blue-600 pb-3 inline-block">Habilidades</h2>
                <p className="text-lg mt-5">Desde la escritura de Código Limpio, Modular, Legible y Eficiente, hasta el diseño de interfaces intuitivas y atractivas, siempre priorizo la sensibilidad estética para la retina segun las especificaciónes <Link className="text-blue-500" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG-2</Link>, centrado para el usuario final.<br/>En el lado del desarrollo, sigo los principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo, para evitar deuda tecnica.</p>

                <div className="flex gap-5 mt-10 mb-10">

                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500/10 border-2 border-gray-400 rounded-md">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <Image src="/design.png" width={50} height={50} alt="image" priority/>
                            </div>
                            <p className="text-lg font-medium">Diseño UX UI</p>
                        </div>
                        <p>Soy capaz de crear protoipos funcionales en Figma, para validar el diseño final de un producto o servicio, totalmente funcional con interacciones, tanto para Desktop como para Mobile.</p>
                    </div>
                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500/10 rounded-md border-2 border-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <Image src="/code.png" width={50} height={50} alt="image" priority/>
                            </div>
                            <p className="text-lg font-medium">Desarrollo Web</p>
                        </div>
                        <p>Puedo desarrollar aplicaciones web totalmente escalables, con excelente estructura MVC o la que deba aplicarse, configurando las rutas, sanitizar entradas y todas las buenas practicas de desarrollo de software.</p>
                    </div>
                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500/10 rounded-md border-2 border-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="">
                                <Image src="/comunicacion.png" width={50} height={50} alt="image" priority/>
                            </div>
                            <p className="text-lg font-medium">Comunicación</p>
                        </div>
                        <p>Algo que me destaca ademas de mis habilidades tecnicas, es la manera de comunicarme y transmitir mi punto de vista, esto es importante para trabajar en conjunto y validar el tipo de trabajo en cada Sprint.</p>
                    </div>

                </div>
            </section>

            
            
        </div>
        
    )
}