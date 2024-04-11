"use client"
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import Links from "./Links";
import { useState } from "react";



export default function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => (
        setMenuOpen(!isMenuOpen)
    )

    return (
        <div className="flex z-50 px-5 md:justify-around justify-between items-center z-5 sticky top-0 w-screen h-16 bg-secondary inset-x-0">
            
            <div className="flex justify-center items-center gap-3">
                <div>
                    <Image src="/sobreMi-profile.png" width={30} height={30} alt="profile" className="rounded-full"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-base leading-5 md:text-sm lg:text-lg">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-blue-400 text-sm leading-4 font-bold">Ver Perfil</p>
                    </Link>
                </div>
                <ModeToggle />
            </div>

            <Links />

            {/* Aca debe aparecer el menu hamburguesa */}
            {/* <div onClick={handleNav} className="md:hidden cursor-pointer p-3">
                <Menu size={25}/>
            </div>

            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-80" : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-50"}>
            </div> */}

            <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                </button>
            </div>

            {isMenuOpen && (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md">
        <div className="px-10pt-2 pb-3 space-y-1 w-screen h-52">
            <p className="text-black">hola</p>
            <p className="text-black">hola</p>
            <p className="text-black">hola</p>
            <p className="text-black">hola</p>
            <p className="text-black">hola</p>
        </div>
    </div>
)}

            
        </div>
      );
    }