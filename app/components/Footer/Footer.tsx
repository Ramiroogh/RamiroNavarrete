import { Github, Linkedin } from "lucide-react";
import Link from "next/link";



export default function Footer() {

    return(
        <div className="w-screen bg-black bg-clip-padding backdrop-filter backdrop-blur-sm mt-10 py-2">
            <div className="flex gap-16 md:gap-5 items-center justify-center md:ml-10">
                
                    <Link href="https://github.com/Ramiroogh" className="flex gap-2 items-center"><Github className="text-white w-5"/> <p className="text-white text-sm">Github</p></Link>
                    <Link href="https://www.linkedin.com/in/navarrete369/" target="_blank" className="flex gap-2 items-center"><Linkedin className="text-white w-5"/> <p className="text-white text-sm">Linkedin</p></Link>
                    <p className="hidden md:flex text-primary text-sm gap-2">Desarrollador Web Fullstack<span className="text-white">&</span>Diseñador UX UI</p>

            </div>
        </div>
    )
}