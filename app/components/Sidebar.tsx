import Image from "next/image";
import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
import Navbar from "./NavbarFromSidebar";

export default function Sidebar() {

    return(
        <div className="flex flex-col bg-background w-1/4 h-screen border-r-2 border-gray-300">
            
            <div className="flex justify-center gap-3 mt-4">
                <Image src="/profile.jpg" width={40} height={40} alt="profile" className="rounded-full"/>
                <div className="flex flex-col">
                    <p className="text-sm leading-5	">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-primary text-sm leading-4 font-medium">Ver Perfil</p>
                    </Link>
                    
                </div>
                <ModeToggle />
            </div>

            <Navbar />
            
        </div>
    )
}