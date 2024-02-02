import Image from "next/image";



export default function SobreMi() {

    return(
        <div className="p-10 flex flex-col">

            <section className="flex gap-10">

                <div className=" flex flex-col gap-3 max-w-lg">
                    <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Hola, soy ramiro navarrete</h1>
                    <p className="flex">
                        Neuquén, Patagonia, Argentina.
                        <div className="flex">
                            <Image src="/arg-icon.png"  width={25} height={5} alt="image" priority/>
                            <Image src="/location-icon.png"  width={20} height={10} alt="image" priority/>
                            <Image src="/mate-icon.png"  width={20} height={10} alt="image" priority/>
                        </div>
                        
                    </p>
                    <p className="text-primary">Soy Desarrollador Web Fullstack y Diseñador UX UI</p>
                    <p className="">Desde pequeño me apasiona la tecnología y sobre todo, como funcionan las cosas. Cuando no estoy trabajando, me encanta entrenar y salir a caminar, es mi equilibrio entre lo laboral y mi salud mental.</p>
                </div>
                
                <Image src="/google-logo.jpg" className="rounded-md" width={200} height={200} alt="image" priority/>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Servicios</h2>
                <p>Estoy capacitado para llevar a cabo los siguientes trabajos, en base a las especificaciones y necesidades del cliente.</p>
            </section>
            
        </div>
        
    )
}