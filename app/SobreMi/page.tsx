import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loader from "../components/Loading/Loading";
import CardHability from "../components/Card/SobreMi-Habilidades.tsx";

export default function SobreMi() {

    return(
      <div className="my-20 flex flex-col justify-center items-center gap-10">
        
        <Suspense fallback={<Loader />}>

          <div className="flex flex-col gap-10 items-center p-10 w-3/4 bg-secondary/50 rounded-xl border border-gray-500/30 hover:shadow-md tansition duration-300 backdrop-blur-md">
            
            <div className="flex flex-col items-center md:flex-row md:gap-10 lg:gap-52">
              <div className="w-48">
                <Image src='/sobreMi-profile.png' alt="image" width={500} height={500} priority/>
              </div>
              
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-medium uppercase">Ramiro Navarrete</p>
                <p className="flex text-lg font-light">📍 Neuquén, Patagonia, Argentina.🌎</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg text-primary uppercase">Soy Desarrollador Web Fullstack y Diseñador UX UI</p>
              <p className="text-md">Me Apasiona la Tecnología y sobre todo comprender el como funcionan las cosas. Cuando no estoy trabajando, me encanta entrenar y salir a caminar, es mi equilibrio entre el entorno laboral y mi salud mental.</p>
            </div>
          </div>
          
          <section className="w-3/4 flex flex-col items-center justify-center">

          <div className="">
            <div
              aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-20'>
              <div style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1842ce] to-[#89d2fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                />
              </div>
            </div>

            <h2 className="text-4xl w-full font-semibold tracking-normal scroll-m-20 capitalize border-b-4 border-blue-600 pb-3 inline-block">Habilidades</h2>
            <p className="text-md mt-5">Desde la escritura de Código Limpio, Modular, Legible y Eficiente, hasta el diseño de interfaces intuitivas y atractivas, siempre priorizo la sensibilidad estética para la retina segun las especificaciónes <Link className="text-blue-500" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG-2</Link>, centrado para el usuario final.<br/>En el lado del desarrollo, sigo los principios DRY, puedo adaptarme a cualquier logica de proyecto con su respectiva arquitectura, personalmente priorizo la escalabilidad por sobre el tiempo, para evitar deuda tecnica.</p>
          </section>

          <div className="flex mt-10 jutify-center items-center gap-3 w-3/4">
            <CardHability
              title="Diseño UX UI"
              description="Soy capaz de crear protoipos funcionales en Figma, para validar el diseño final de un producto o servicio, totalmente funcional con interacciones."
              image="/sobreMi-icon1.png"
            />
            <CardHability
              title="Desarrollo Web"
              description="Totalmente escalables, con excelente estructura MVC o la que deba aplicarse, configurando las rutas, sanitizar entradas y todas las buenas practicas de desarrollo frontend."
              image="/sobreMi-icon2.png"
            />
            <CardHability
              title="Comunicación"
              description="Tengo una excelente manera de comunicarme y transmitir mi punto de vista, esto es importante para trabajar en conjunto y validar el tipo de progreso en cada Sprint o ticket."
              image="/sobreMi-icon3.png"
            />
          </div>
        </Suspense>

        </div>
    )
}


