import Link from "next/link"
import TrabajosRecientes from "../components/TrabajosRecientes"
import "../Trabajos/styles.css"

const Trabajos: React.FC = () => {

    return (
        <div className="p-10 flex flex-col w-screen items-center">
            <div className="flex flex-col gap-3 mb-10 w-4/5">
                <h1 className="text-3xl font-semibold tracking-normal capitalize">Trabajos</h1>
                <p className="">En esta sección veras los trabajos y proyectos que me a tocado desarrollar, para distintos clientes segun sus necesidades, tambien proyectos propios para mantenerme actualizado y agilizado en multiples tecnologías.</p>
            </div>

            <div className="flex flex-col gap-3 mb-10 w-4/5">

                
                    <h2 className="text-3xl mb-3">Categorías</h2>
                    <div className="grid grid-cols-4 grid-rows-1 gap-3">
                        <Link href="/UXUI-Design" className="hover:border-orange-500 border-2 rounded-lg bg-slate-600/20 hover:bg-slate-500/40 px-10 py-12 flex items-center justify-center text-lg font-medium transition duration-300">Diseño UX UI</Link>
                        <Link href="/" className="hover:border-orange-500 border-2 rounded-lg bg-slate-600/20 hover:bg-slate-500/40 px-10 py-12 flex items-center justify-center text-lg font-medium transition duration-300">Frontend</Link>
                        <Link href="/" className="hover:border-orange-500 border-2 rounded-lg bg-slate-600/20 hover:bg-slate-500/40 px-10 py-12 flex items-center justify-center text-lg font-medium transition duration-300">Backend</Link>
                        <Link href="/" className="hover:border-orange-500 border-2 rounded-lg bg-slate-600/20 hover:bg-slate-500/40 px-10 py-12 flex items-center justify-center text-lg font-medium transition duration-300">Fullstack</Link>
                    </div>
                

              

                
            </div>

            

            <div className="flex flex-col gap-3 mt-10 w-4/5">
                <h2 className="text-3xl font-bold tracing-tight text-primary">Trabajos Recientes</h2>
            </div>
            <TrabajosRecientes />
        </div>
    )
}

export default Trabajos