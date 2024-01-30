import Image from "next/image";
import GridComponent from "../components/Herramientas-GridItem";
import { Code2 } from "lucide-react";

const herramientasDesarrolloWeb: GridItem[] = [
    {
        imageUrl: '/javascript-icon.png',
        title: 'Javascript',
        description: 'Lenguaje'
    },
    {
        imageUrl: '/nextjs-icon.png',
        title: 'Next JS',
        description: 'Framework'
    },
    {
        imageUrl: '/typescript-icon.png',
        title: 'Typescript',
        description: 'Lenguaje'
    },
    {
        imageUrl: '/stripe-icon.png',
        title: 'Stripe',
        description: 'Metodo de Pago'
    },
    {
        imageUrl: '/tailwind-icon.png',
        title: 'Tailwind',
        description: 'Estilos'
    },
    {
        imageUrl: '/vercel-icon.png',
        title: 'Vercel',
        description: 'Hosting & Deploy'
    },
    {
        imageUrl: '/prisma-icon.png',
        title: 'Prisma',
        description: 'ORM'
    },
    {
        imageUrl: '/vscode-icon.png',
        title: 'VS Code',
        description: 'Editor de codigo'
    },
    {
        imageUrl: '/chrome-icon.png',
        title: 'Chrome',
        description: 'Navegador Web'
    }
]
const herramientasUXUI: GridItem[] = [
    {
        imageUrl: '/figma-icon.png',
        title: 'Figma',
        description: 'Prototipo y Diseño'
    },
    {
        imageUrl: '',
        title: 'Playground AI',
        description: 'Imagenes Generadas AI'
    },
    {
        imageUrl: '',
        title: 'Microsoft Designer',
        description: 'Imagenes Generadas AI'
    },
    {
        imageUrl: '',
        title: 'Playground AI',
        description: 'Imagenes Generadas AI'
    },
    {
        imageUrl: '/deviceshot-icon.png',
        title: 'Device Shots',
        description: 'Generador de Mockups'
    },
    {
        imageUrl: '/oddcontrast-icon.png',
        title: 'Odd Contrast',
        description: 'Validador de colores, según WCAG 2'
    }
]
const herramientasProductividad: GridItem[] = [
    
]


export default function Herramientas() {

    return(
        <div className="mt-3 ml-3">
            <div className=" flex flex-col gap-3 ">
                <h1 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize">Mi Stack de Herramientas</h1>
                <p className="">Softwares y Herramientas que utilizo frecuentemente</p>
            </div>
            
            <section className="flex flex-col gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <h2 className="text-3xl font-semibold tracking-normal scroll-m-20 capitalize text-primary">Desarrollo Web</h2>
                    <Code2 className="text-primary" width={40} height={40}/>
                </div>
                

                <div className="grid grid-cols-3 grid-rows-3 gap-4 p-3 rounded border border-gray-300">
                    {/* GRID */}
                    {herramientasDesarrolloWeb.map((item, index) => (
                        <GridComponent key={index} item={item} />
                    ))}
                </div>
            </section>
        </div>
    )
}