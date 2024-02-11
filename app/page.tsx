
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TrabajosRecientes from "./components/TrabajosRecientes";
import TypedHero from "./components/Typed-Home";

export default function Home() {
  

  return (
    <div className="w-screen flex flex-col items-center">
      {/* BANNER */}
      <div className="relative w-screen h-72 p-10 flex items-center">
        
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/video-home.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 bg-black opacity-70">
        {/* Background dark effect */}
        </div>

        <div className="relative z-10 w-4/5 h-36 flex flex-col justify-center gap-3">
          <h1 className="text-5xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Hola, Soy Ramiro</h1>
          <h2 className="text-3xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Te Invito a Explorar mi Trayectoria Profesional</h2>
          <div className="flex gap-3">
            <p className=" text-xl text-sky-500 font-semibold">Desarrollador Web Fullstack & Diseñador UX UI</p>
          <TypedHero />
          </div>

        </div>
      </div>

      {/* HERO */}
      <div className="flex flex-col justify-center items-center gap-3 w-3/4 py-20">
        <h1 className='max-w-3xl text-center text-6xl font-bold'>
        Transformando Conceptos en{' '}
          <span className='text-blue-600'>Realidad</span>{' '}
          Visual.
        </h1>
        <p className='mt-5 max-w-xl text-center text-2xl'>
        &ldquo;Detrás de cada línea de código, hay una historia de diseño&rdquo;
        </p>
      </div>
      

      <div className="p-10">
        <TrabajosRecientes />
      </div>
      
    </div>
  );
}
