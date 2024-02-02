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

export default function Navbar() {
    const pathname = usePathname();

    return(
        <nav className=" mt-3">
            {links.map((link, index) => (
                <div key={index} className="p-1">
                    <Link
                        href={link.href}
                        className={pathname === link.href ? "bg-secondary flex gap-2 p-2 rounded"
                        : "bg-background flex gap-2 p-2 hover:bg-secondary rounded"}
                        >
                            {link.name === 'Inicio' ? <Home className="text-primary" /> : link.name === 'Sobre Mi' ? <CircleUserRound className="text-primary" /> : link.name === 'Herramientas' ? <Wrench className="text-primary" /> : link.name === 'Trabajos' ? <Presentation className="text-primary" /> : link.name === 'Formacion' ? <School className="text-primary" /> : null} {link.name}
                    </Link>
                </div>
            ))}
        </nav>
    )
}