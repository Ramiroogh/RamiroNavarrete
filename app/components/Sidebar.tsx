import Image from "next/image";
import { ModeToggle } from "./ToggleTheme";
import Link from "next/link";
import Navbar from "./NavbarFromSidebar";

export default function Sidebar() {

    return(
        <div className="flex flex-col sticky top-0 bg-blue-600 min-w-56 max-w-56 h-screen">
            
            <div className="flex justify-center items-center gap-3 mt-4">
                <div>
                    <Image src="/profile.jpg" width={40} height={40} alt="profile" className="rounded-full"/>
                </div>
                
                <div className="flex flex-col">
                    <p className="text-sm leading-5	">Ramiro Navarrete</p>
                    <Link href="/SobreMi">
                        <p className="text-white text-sm leading-4 font-medium">Ver Perfil</p>
                    </Link>
                    
                </div>
                <ModeToggle />
            </div>

            <Navbar />
            
        </div>
    )
}