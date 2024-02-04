"use client"
import Typed from "typed.js"
import { useEffect, useRef } from "react";


export default function TypedHero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Diseño y Desarrollo de Paginas Web', 'Sistemas Automatizados' ,'Elaboración de Endpoints', 'Autenticación y Seguridad', 'Rutas Protegidas y Roles de Usuario'],
        typeSpeed: 10,
        startDelay: 10,
        backSpeed: 20,
        shuffle: false,
        smartBackspace: false,
        loop: true,
        backDelay: 5000,
        showCursor: false,
    });

  return () => {
  //   Destroy Typed instance during cleanup to stop animation
  //typed.destroy();
  };}, []);
    return(
        <div className="type-wrap">
        <span ref={el} className="text-white"></span>
        </div>
    )
}