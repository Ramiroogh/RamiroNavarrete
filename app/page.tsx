import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div className="relative w-screen h-52 p-10 flex items-center">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/patagonia.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="relative z-10 w-3/5 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize text-white">Bienvenido a mi sitio sobre mis habilidades profesionales</h1>
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

    <p>hola</p>
    </div>
  );
}
