import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import Link from "next/link";
import Links from "./Links";


export default function Navbar() {

    return(
        <div className="flex justify-around items-center z-20 sticky top-0 bg-blue-600 bg-opacity-80 backdrop-blur-md backdrop-filter backdrop-brightness-75 backdrop-saturate-70 w-full h-16 bg-gradient-to-r from-blue-800 to-blue-500">
            
            <div className="flex justify-center items-center gap-3">
                <div>
                    <Image src="/profile.jpg" width={30} height={30} alt="profile" className="rounded-full"/>
                </div>
                <div className="flex flex-col">
                    <p className="text-base leading-5 text-white">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-orange-400 text-sm leading-4 font-bold">Ver Perfil</p>
                    </Link>
                </div>
                <ModeToggle />
            </div>

            <Links />
            
        </div>
    )
}