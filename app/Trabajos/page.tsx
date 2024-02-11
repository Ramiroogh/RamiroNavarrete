
import TrabajosRecientes from "../components/TrabajosRecientes"


const Trabajos: React.FC = () => {

    return (
        <div className="p-10 flex flex-col w-screen items-center">

            <div className="flex flex-col gap-3 mb-10 w-4/5">
                <h1 className="text-3xl font-semibold tracking-normal capitalize">Trabajos</h1>
                <p className="">En esta sección veras los trabajos y proyectos que me a tocado desarrollar, para distintos clientes segun sus necesidades, tambien proyectos propios para mantenerme actualizado y agilizado en multiples tecnologías.</p>
            </div>

            <TrabajosRecientes />
        </div>
    )
}

export default Trabajos