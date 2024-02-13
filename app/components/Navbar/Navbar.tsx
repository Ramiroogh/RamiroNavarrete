import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import Link from "next/link";
import Links from "./Links";


export default function Navbar() {

    return(
        <div className="flex justify-around items-center z-20 sticky top-0 w-screen h-16 bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-b-2 border-gray-500/20">
            
            <div className="flex justify-center items-center gap-3">
                <div>
                    <Image src="/profile.jpg" width={30} height={30} alt="profile" className="rounded-full"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-base leading-5">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-blue-400 text-sm leading-4 font-bold">Ver Perfil</p>
                    </Link>
                </div>
                <ModeToggle />
            </div>

            <Links />
            
        </div>
    )
}