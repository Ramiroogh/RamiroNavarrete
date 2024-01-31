import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <div className="w-3/5 flex flex-col gap-3 ">
        <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">Bienvenido a mi sito sobre mis habilidades profesionales</h1>
        <p className="lg:w-[80%] text-gray-500 font-semibold">Soy Desarrollador Web y Diseñador UX UI</p>

        <div>
          
            <Link href="/SobreMi">
              <Button className="flex bg-primary items-center gap-2">
              <CircleUserRound /> Sobre Mi
              </Button>
            </Link>
          
        
        </div>
      </div>
      
    </div>
  );
}
