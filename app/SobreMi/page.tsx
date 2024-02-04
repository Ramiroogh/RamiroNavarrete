import Image from "next/image";



export default function SobreMi() {

    return(
        <div className="p-10 flex flex-col">

            <section className="flex gap-10 p-5 border border-gray-300 shadow-lg rounded-lg">

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
                
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Servicios</h2>
                <p>Estoy capacitado para llevar a cabo los siguientes trabajos, en base a las especificaciones y necesidades del cliente.</p>
            </section>
            
        </div>
        
    )
}