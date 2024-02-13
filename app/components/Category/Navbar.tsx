"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Computer, DatabaseZap, PenTool, TabletSmartphone } from "lucide-react"

const links = [
    {name: 'Diseño UX UI', href: '/UXUI-Design'},
    {name: 'Web Frontend', href: '/Desarrollo-Frontend'},
    {name: 'Web Backend', href: '/Desarrollo-Backend'},
    {name: 'Web Fullstack', href: '/Desarrollo-Fullstack'},
]

export default function Navbar() {
    const pathname = usePathname()
    return(
        <div>
            <nav className="p-3 bg-gray-800 flex justify-center">
                {links.map((link, index) => (
                    <div key={index}>
                        <Link 
                        href={link.href}
                        className={pathname === link.href ? "text-orange-300 font-medium text-lg flex items-center gap-2 px-2"
                        : "flex items-center gap-2 text-lg font-medium px-2 text-white"}>
                            {link.name === 'Diseño UX UI' ? <PenTool className="text-white w-4"/> : link.name === 'Web Frontend' ? <TabletSmartphone className="text-white w-4"/> : link.name === 'Web Backend' ? <DatabaseZap className="text-white w-4"/> : link.name === 'Web Fullstack' ? <Computer className="text-white w-4"/> : null} {link.name}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}