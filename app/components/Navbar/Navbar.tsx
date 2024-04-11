"use client"
import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import Link from "next/link";
import Links from "./Links";
import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => (
        setMenuOpen(!menuOpen)
    )

    return(
        <div className="flex justify-around items-center z-20 sticky top-0 w-screen h-16 bg-secondary ">
            
            <div className="flex justify-center items-center gap-3">
                <div>
                    <Image src="/sobreMi-profile.png" width={30} height={30} alt="profile" className="rounded-full"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-base leading-5 md:text-sm">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-blue-400 text-sm leading-4 font-bold">Ver Perfil</p>
                    </Link>
                </div>
                <ModeToggle />
            </div>

            <Links />

            <div className="flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}