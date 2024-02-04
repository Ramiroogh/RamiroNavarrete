
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TrabajosRecientes from "./components/TrabajosRecientes";
import TypedHero from "./components/Typed-Home";

export default function Home() {
  

  return (
    <div>
      <div className="relative w-full md:w-auto h-72 p-10 flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/video-home.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 bg-black opacity-60">
        {/* Background dark effect */}
        </div>

        <div className="relative z-10 w-4/5 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize text-white">Bienvenido a mi sitio sobre mis habilidades profesionales</h1>
          <p className="lg:w-[80%] text-lg text-sky-500 font-semibold">Soy Desarrollador Web y Diseñador UX UI</p>
          
         
          <div className="flex items-center gap-3">
            <Link href="/SobreMi">
              <Button className="flex bg-primary items-center gap-2">
                <CircleUserRound /> Acerca de Mi
              </Button>
            </Link>
            <TypedHero />
          </div>
        </div>

      </div>

      <div className="p-10">
        <TrabajosRecientes />
      </div>
      
    </div>
  );
}
