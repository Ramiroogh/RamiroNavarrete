import Image from "next/image";



export default function SobreMi() {

    return(
        <div className="p-10 flex flex-col">

            <section className="flex gap-10">

                <div className=" flex flex-col gap-3 max-w-lg">
                    <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Hola, soy ramiro navarrete</h1>
                    <p className="">Soy Desarrollador Web Fullstack y Diseñador UX UI</p>
                    <p className="">Desde pequeño me apasiona la tecnología y sobre todo, como funcionan las cosas. Cuando no estoy trabajando, me encanta entrenar y salir a caminar, es mi equilibrio entre lo laboral y mi salud mental.</p>
                </div>
                
                <Image src="/profile.jpg" className="rounded-md" width={200} height={200} alt="image" priority/>

            </section>
            
        </div>
        
    )
}