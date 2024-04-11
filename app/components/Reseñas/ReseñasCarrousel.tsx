"use client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import './styles.css';

interface CardReviewProps {
    profileUrl: string;
    nameClient: string;
    flagCountry: string;
    nameCountry: string;
    jobDescription: string;
    review: string;
}

const Card: React.FC<CardReviewProps> = ( { profileUrl, nameClient, flagCountry, nameCountry, jobDescription, review } ) => (
  <div className="flex flex-col rounded-2xl border z-20 border-gray-600/30 bg-secondary/40 backdrop-filter backdrop-blur-md backdrop-saturate-150 items-center p-5 gap-3 m-2">
      
      <div className="flex items-center gap-3">
          <Image width={80} height={80} objectFit= "contain" src={profileUrl} className="rounded-full border-2 border-white" alt={nameClient}
          />
          <div className="flex flex-col z-20">
              <p className="text-xl font-bold z-80">{nameClient}</p>
              <div className="flex items-center gap-2">
                  <Image
                      alt="flag"
                      width={20}
                      height={20}
                      src={flagCountry}
                  />
                  <p className="text-sm">{nameCountry}</p>
              </div>
          </div>
      </div>

      <div className="flex flex-col reseña-description gap-3 justify-center items-center mt-3">
          <p className="uppercase text-md font-bold ">{jobDescription}</p>
          <p className="text-md font-semibold">{review}</p>
      </div>
  </div>
)

// Datos para Renderizar
const ReseñasCarrousel: React.FC = () => {

  const dataArray: CardReviewProps[] = [
      {
          profileUrl: '/checo-client-1.jpg',
          nameClient: 'Stefan Kováč',
          flagCountry: '/flag-checo.png',
          nameCountry: 'Republica Checa',
          jobDescription: 'Prototipo en Figma de Formulario para inquilinos en Airbnb, Czechoslovakia.',
          review: '“Delivery rapido, buen diseño”',
      },
      {
        profileUrl: '/CarlosLopez.jpg',
        nameClient: 'Carlos Lopez',
        flagCountry: '/flag-mexico.png',
        nameCountry: 'Mexico',
        jobDescription: 'Logotipo y Branding para empresa constructora en Jalisco, MX.',
        review: '“Excelente comunicacion por videollamada”',
    },
      {
          profileUrl: '/AmirulbinAbdullah.jpg',
          nameClient: 'Amirul bin Abdullah',
          flagCountry: '/flag-malaysia.png',
          nameCountry: 'Malasia',
          jobDescription: 'Diseño web con NextJS y SQL para PChem.',
          review: '“Buen trabajo en tiempo y forma, respeto los principios SOLID”',
      },

      
  ];

const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 11000, // Intervalo en milisegundos entre cada transición
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1085,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
    };

  return (
    <div className='relative'>
      <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl -right-30 -top-10'>
        <div style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1842ce] to-[#89d2fc] opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]'
            />
        </div>
        
        <div className="w-screen flex flex-col justify-center rounded-b-lg ">
          
          {/* <div className="flex w-screen z-50 px-32 py-16 gap-10">

            <div className="bg-primary mt-10 w-32 h-32 flex items-center justify-center p-10 rounded-full">
              <Quote width={50} height={50} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="title-hero3 text-6xl josefin-sans leading-22 tracking-wider break-words mt-10 title-reseñas z-50">Además...</p>
              <p className=" text-xl pt-5 z-50 reseñas-description-responsive-mobile">Primero Hecha un vistazo los testimonios de clientes que han solicitado mis servicios. Descubre por qué mis clientes confían en mí una y otra vez, quedando siempre satisfechos.</p>
              <p className="text-md z-50 font-bold text-gray-700">Testimonios</p>
            </div>
            
          </div> */}
          
          <div className="m-auto w-3/4 container-cards-carousel mb-20" >
            <Slider {...settings} className="">
              {dataArray.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </Slider>
          </div>
          
        </div>

        
        </div>
  )
}

export default ReseñasCarrousel;