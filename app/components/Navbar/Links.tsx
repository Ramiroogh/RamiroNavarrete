"use client"
// UI
import { CircleUserRound, Home, Presentation, School, Wrench } from "lucide-react"

import { usePathname } from "next/navigation"
import Link from "next/link"

const links = [
    {name: 'Inicio', href:'/'},
    {name: 'Sobre Mi', href: '/SobreMi'},
    {name: 'Herramientas', href: '/Herramientas'},
    {name: 'Trabajos', href: '/Trabajos'},
    {name: 'Formacion', href: '/Formacion'}
]

export default function Links() {
    const pathname = usePathname();

    return(
        <nav className="flex gap-5">
            {links.map((link, index) => (
                <div key={index} className="">
                    <Link
                        href={link.href}
                        className={pathname === link.href ? "text-orange-300 font-medium text-lg flex items-center gap-2 px-2"
                        : "flex items-center gap-2 text-lg font-medium px-2 text-white"}
                        >
                            {link.name === 'Inicio' ? <Home className="text-white w-4" /> : link.name === 'Sobre Mi' ? <CircleUserRound className="text-white w-4" /> : link.name === 'Herramientas' ? <Wrench className="text-white w-4" /> : link.name === 'Trabajos' ? <Presentation className="text-white w-4" /> : link.name === 'Formacion' ? <School className="text-white w-4" /> : null} {link.name}
                    </Link>
                </div>
            ))}
        </nav>
    )
}