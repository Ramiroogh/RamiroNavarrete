import { Github, Linkedin } from "lucide-react";
import Link from "next/link";



export default function Footer() {

    return(
        <div className="w-screen bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 py-2">
            <div className="flex gap-5 ml-10">
                
                    <Link href="https://github.com/Ramiroogh" className="flex gap-3"><Github className="text-white w-5"/> <p className="text-white">Github</p></Link>
                    <Link href="https://www.linkedin.com/in/navarrete369/" target="_blank" className="flex gap-3"><Linkedin className="text-white w-5"/> <p className="text-white">Linkedin</p></Link>
                    <p>Desarrollador Web Fullstack & Diseñador UX UI</p>

            </div>
        </div>
    )
}