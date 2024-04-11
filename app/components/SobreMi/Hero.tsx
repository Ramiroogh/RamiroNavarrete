import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Testeo from "../Card/SobreMi-Habilidades.tsx"

export default function Hero() {

    return(
        <div className="w-3/4 ">
          <p>hola</p>
          <Testeo title="hola este es un titulo" description="lorem ipsum dolor quret" image="/sobreMi-profile.png"/>
        </div>
    )
}