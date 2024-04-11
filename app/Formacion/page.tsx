import Image from "next/image";
import Link from "next/link";
import FormacionItem from "../components/FormacionItem";

const Capacitaciones: GridItemCapacitacion[] = [
    {
        imageUrl: '/microsoft-logo.jpg',
        title: 'Microsoft',
    },
    {
        imageUrl: '/donweb-logo.jpg',
        title: 'Donweb',
    },
    {
        imageUrl: '/google-logo.jpg',
        title: 'Google',
    },
    {
        imageUrl: '/junior-logo.jpg',
        title: 'JAW Argentina',
    },
    {
        imageUrl: '/aleph-logo.jpg',
        title: 'Aleph',
    },
    {
        imageUrl: '/alura-logo.jpg',
        title: 'Alura',
    },
    {
        imageUrl: '/ba-logo.jpg',
        title: 'Buenos Aires Ciudad',
    },
    {
        imageUrl: '/codigof-logo.jpg',
        title: 'Codigo Facilito',
    },
    {
        imageUrl: '/freecodecamp-logo.jpg',
        title: 'FreeCodeCamp',
    },
    {
        imageUrl: '/accenture-logo.jpg',
        title: 'Accenture',
    },
]

const Estudios: React.FC = () => {

    return (
        <div className="my-20 flex flex-col items-center w-screen">
            
            <div className=" flex flex-col gap-3 w-3/4">
                <h1 className="text-4xl font-semibold tracking-normal lg:5xl capitalize">Formación Academica</h1>
                <p className="">Mi formación profesional se basa en mi experiencia laboral en Agencias, y de manera Freelancer. Y sobre todo gracias a mi capacitación por medio de Instituciones Educativas avaladas por el Gobierno Nacional Argentino, cursos ofrecidos por Grandes Empresas Tecnológicas y sobretodo por mi aprendizaje de forma Autodidacta y continua.</p>
            </div>

            <section className="flex mt-20 mb-10 w-3/4 bg-secondary items-center p-10 rounded-lg border-slate-300/40 hover:border-slate-300/80 hover:shadow-md border-8 transition duration-300">
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold tracking-normal scroll-m-20 capitalize">Universidad Tecnológica Nacional UTN</h2>
                    <p className="font-medium mt-10">Diplomado: Desarrollador Web Fullstack</p>
                    <p className="w-3/4">Capacitación formal con una duracion de 9 meses. Fundamentos del Frontend, Html - Javascript - React - Next js. Bases de datos (MySQL & MongoDB), Express, Node, API arquitecture, cURL, Http, Postman, JWT.</p>
                    <i className="text-sm">Noviembre 2022 - Julio 2023</i>
                </div>

                <div>
                    <Link href="https://sceu.frba.utn.edu.ar/e-learning/"  target="_blank">
                        <Image src="/utn-logo.png" width={500} height={500} className="mb-5" alt="diplomatura" priority/>
                        <Image src="/utn.jpg" width={1000} height={1000} className="rounded-sm"  alt="diplomatura" priority/>
                    </Link>
                    
                </div>
            </section> 
            
            <section className="flex flex-col gap-3 w-3/4 mt-10">
                <h2 className="text-4xl text-primary font-semibold tracking-normal lg:5xl capitalize">Certificaciones</h2>
                <p className="">Las empresas que señalo a continuacion, ayudaron a potenciar mis habilidades profesionales mediante cursos, capacitaciones intensivas y desarrollo de proyectos.</p>

                <div className="grid grid-cols-3 grid-rows-4 bg-secondary/20 mt-5 gap-3 p-5 rounded-lg border-2 border-gray-500/30 hover:bg-slate-500/20 shadow-md transition duration-300">
                    {Capacitaciones.map((item, index) => (
                        <FormacionItem key={index} item={item} />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Estudios;