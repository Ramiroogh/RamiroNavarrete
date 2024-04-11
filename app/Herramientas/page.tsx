import GridComponent from "../components/Herramientas-GridItem";
import { Clock10, Code2, PenTool } from "lucide-react";

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
        description: 'Metodo de Pagos'
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
    },
    {
        imageUrl: '/sanity-icon.png',
        title: 'Sanity',
        description: 'CMS'
    },
    {
        imageUrl: '/wordpress-icon.png',
        title: 'Wordpress',
        description: 'CMS'
    },
    {
        imageUrl: '/elementor-icon.png',
        title: 'Elementor',
        description: 'Estilos'
    }
]
const herramientasUXUI: GridItem[] = [
    {
        imageUrl: '/figma-icon.png',
        title: 'Figma',
        description: 'Herramienta de Diseño'
    },
    {
        imageUrl: '/playgroundai-icon.png',
        title: 'Playground AI',
        description: 'Imagenes Generadas AI'
    },
    {
        imageUrl: '/microsoftdesigner-icon.jpg',
        title: 'Microsoft Designer',
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
    {
        imageUrl: '/chatgpt-icon.png',
        title: 'Chat GPT',
        description: 'Inteligencia Artificial'
    },
    {
        imageUrl: '/meet-icon.png',
        title: 'Google Meet',
        description: 'Videollamadas en linea'
    },
    {
        imageUrl: '/googlekeep-icon.png',
        title: 'Google Keep',
        description: 'Notas'
    },
    {
        imageUrl: '/spotify-icon.png',
        title: 'Spotify',
        description: 'Musica'
    },
    {
        imageUrl: '/calendar-icon.png',
        title: 'Google Calendar',
        description: 'Calendario'
    },
    {
        imageUrl: '/notion-icon.png',
        title: 'Notion',
        description: 'Organización'
    }
]

export default function Herramientas() {

    return(
        <div className="my-20 flex flex-col items-center">

            <div className=" flex flex-col gap-3 w-3/4">
                <h1 className="text-4xl font-semibold tracking-normal scroll-m-20 capitalize">Mi Stack de Herramientas</h1>
                <p className="text-lg">Softwares, herramientas, lenguajes que utilizo frecuentemente, impulsan mi eficiencia como desarrollador de aplicaciónes web.</p>
            </div>
            
            <section className="flex flex-col gap-3 mt-10 w-3/4">
                <div className="flex items-center gap-5">
                    <h2 className="text-3xl font-semibold tracking-normal capitalize text-primary">Desarrollo Web</h2>
                    <Code2 className="text-primary" width={40} height={40}/>
                </div>
                <div className="grid grid-cols-3 grid-rows-4 bg-secondary/20 gap-4 p-5 rounded-lg border-2 border-gray-500/20 hover:bg-slate-500/20 shadow-md transition duration-300">
                    {herramientasDesarrolloWeb.map((item, index) => (
                        <GridComponent key={index} item={item} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-3 mt-10 w-3/4">
                <div className="flex items-center gap-5">
                    <h2 className="text-3xl font-semibold tracking-normal capitalize text-primary">Diseño UX UI</h2>
                    <PenTool className="text-primary" width={40} height={40}/>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 bg-secondary/20 gap-4 p-5 rounded-lg border-2 border-gray-500/20 hover:bg-slate-500/20 shadow-md transition duration-400 ">
                    {herramientasUXUI.map((item, index) => (
                        <GridComponent key={index} item={item} />
                    ))}
                </div>
            </section>
            
            <section className="flex flex-col gap-3 mt-10 w-3/4">
                <div className="flex items-center gap-5">
                    <h2 className="text-3xl font-semibold tracking-normal scroll-m-20 capitalize text-primary">Productividad</h2>
                    <Clock10 className="text-primary" width={40} height={40}/>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-secondary/20 p-5 rounded-lg border-2 border-gray-500/20 hover:bg-slate-500/20 shadow-md transition duration-300">
                    {herramientasProductividad.map((item, index) => (
                        <GridComponent key={index} item={item} />
                    ))}
                </div>
            </section> 

        </div>
    )
}