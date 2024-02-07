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
        <div className="p-10 flex flex-col w-4/5">
            
             <div className=" flex flex-col gap-3 w-4/5">
                <h1 className="text-4xl font-semibold tracking-normal lg:5xl capitalize">Formación Academica</h1>
                <p className="">Mi formación profesional se basa en mi experiencia laboral en Agencias, y de manera Freelancer. Y sobre todo gracias a mi capacitación por medio de Instituciones Educativas avaladas por el Gobierno Nacional Argentino, cursos ofrecidos por Grandes Empresas Tecnológicas y sobretodo por mi aprendizaje de forma Autodidacta y continua.</p>
            </div>

            <section className="flex gap-3 mt-10 w-4/5 items-center p-5 border rounded-lg border-gray-200 hover:shadow-xl transition duration-300">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold tracking-normal scroll-m-20 capitalize">Universidad Tecnológica Nacional UTN</h2>
                    <p className="font-medium">Diplomado: Desarrollador Web Fullstack</p>
                    <p className="">Capacitación formal con una duracion de 9 meses. Fundamentos del Frontend, Html - Javascript - React - Next js. y profundizando el area de Backend, Bases de datos (MySQL & MongoDB), Express, Node, API arquitecture.</p>
                    <i className="text-sm">Noviembre 2022 - Julio 2023</i>
                </div>

                <div>
                    <Link href="https://sceu.frba.utn.edu.ar/e-learning/"  target="_blank">
                        <Image src="/utn-logo.png" width={500} height={500} className="mb-5" alt="diplomatura" priority/>
                        <Image src="/utn.jpg" width={1000} height={1000} className="rounded-sm"  alt="diplomatura" priority/>
                    </Link>
                    
                </div>
            </section> 
            
            <section className=" flex flex-col gap-3 w-4/5 mt-10">
                <h2 className="text-4xl text-primary font-semibold tracking-normal lg:5xl capitalize">Certificaciones</h2>
                <p className="">Las empresas que señalo a continuacion, ayudaron a potenciar mis habilidades profesionales mediante cursos, capacitaciones intensivas y desarrollo de proyectos.</p>

                <div className="grid grid-cols-3 grid-rows-4 gap-5 p-5 rounded border border-gray-300">
                    {Capacitaciones.map((item, index) => (
                        <FormacionItem key={index} item={item} />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Estudios;