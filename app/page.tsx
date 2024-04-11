
import TrabajosRecientes from "./components/TrabajosRecientes";
import TypedHero from "./components/Typed-Home";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {/* BANNER */}
      <div className="relative w-screen h-96 md:h-64 lg:h-heightHero p-10 md:p-28 lg:p-0 flex items-center  justify-center">
        
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/video-home.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 bg-black opacity-60">
        {/* Background dark effect */}
        </div>

        <div className="relative w-screen z-10 lg:w-4/5 h-36 flex flex-col justify-center gap-3">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Hola, Soy Ramiro👋</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal scroll-m-20 capitalize text-white">Te Invito a Explorar mi Trayectoria Profesional</h2>
          <div className="flex gap-3">
            <p className="text-sm md:text-xl text-sky-500 font-semibold">Desarrollador Web Fullstack <span className="text-white">&</span> Diseñador UX UI</p>
          
          </div>
          <TypedHero />
        </div>
      </div>

      {/* HERO */}
      <div className="flex flex-col justify-center items-center gap-3 w-3/4 lg:w-4/5 py-10 md:py-20">
        <h1 className='text-center text-2xl md:text-5xl lg:text-6xl font-bold'>
        Transformando Conceptos en{' '}
          <span className='text-blue-600'>Realidad</span>{' '}
          Visual.
        </h1>
        <p className='mt-5 lg:max-w-xl text-center text-lg md:text-2xl lg:text-2xl'>
        &ldquo;Detrás de cada línea de código, hay una historia de diseño&rdquo;
        </p>
      </div>
      
      <TrabajosRecientes />
      
    </div>
  );
}
