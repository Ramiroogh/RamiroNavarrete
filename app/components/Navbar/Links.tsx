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
        <nav className="hidden md:flex gap-2">
            {links.map((link, index) => (
                <div key={index} className="">
                    <Link
                        href={link.href}
                        className={pathname === link.href ? "text-blue-400 font-medium md:text-sm lg:text-lg flex items-center md:gap-2 gap-2 px-2"
                        : "flex items-center md:gap-2 gap-1 md:text-sm lg:text-lg  font-medium px-1"}
                        >
                            {link.name === 'Inicio' ? <Home className=" w-4" /> : link.name === 'Sobre Mi' ? <CircleUserRound className="w-4" /> : link.name === 'Herramientas' ? <Wrench className="w-4" /> : link.name === 'Trabajos' ? <Presentation className="w-4" /> : link.name === 'Formacion' ? <School className="w-4" /> : null} {link.name}
                    </Link>
                </div>
            ))}
        </nav>
    )
}