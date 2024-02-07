import Image from "next/image";
import Hero from "../components/SobreMi/Hero";
import Link from "next/link";



export default function SobreMi() {

    return(
        <div className="px-10 flex flex-col justify-center items-center">

            {/* <section className="flex gap-10 p-5 border border-gray-300 hover:shadow-xl transition duration-300 rounded-lg">

                <div className=" flex flex-col gap-3 max-w-lg">
                    <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Hola, soy ramiro navarrete</h1>
                    <p className="flex">
                        Neuquén, Patagonia, Argentina.
                    </p>
                    <p className="text-primary font-medium">Soy Desarrollador Web Fullstack y Diseñador UX UI</p>
                    <p className="">Me apasiona la tecnología y sobre todo comprender como funcionan las cosas. Cuando no estoy trabajando, me encanta entrenar y salir a caminar, es mi equilibrio entre lo laboral y mi salud mental.</p>
                </div>
                <div className="flex items-center">
                    <Image src="/google-logo.jpg" className="rounded-md" width={500} height={500} alt="image" priority/>
                </div>
                
            </section> */}
            <Hero />

            <section className="mt-20 w-3/4">
                <h2 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize border-b-4 border-orange-500 pb-3 inline-block">Habilidades</h2>
                <p className="text-lg mt-5">Desde la escritura de Código Limpio, Modular, Legible y Eficiente, hasta el diseño de interfaces intuitivas y atractivas, siempre priorizo la sensibilidad estética para la retina segun las especificaciónes <Link className="text-blue-500" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG-2</Link>, centrado para el usuario final.<br/>En el lado del desarrollo, sigo los principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo, para evitar deuda tecnica.</p>

                <div className="flex gap-5">
                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500 rounded-md">
                        <div className="flex gap-5">
                            <p>ICON</p>
                            <p>Desarrollo Web</p>
                        </div>
                        <p>principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo</p>
                    </div>
                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500 rounded-md">
                        <div className="flex gap-5">
                            <p>ICON</p>
                        <p>Desarrollo Web</p>
                        </div>
                        <p>principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo</p>
                    </div>
                    <div className="p-5 w-72 flex flex-col gap-3 bg-slate-500 rounded-md">
                    <div className="flex gap-5">
                            <p>ICON</p>
                        <p>Desarrollo Web</p>
                        </div>
                        <p>principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo</p>
                    </div>

                </div>
            </section>

            
            
        </div>
        
    )
}