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
  <div className="  flex flex-col rounded-2xl border-2 z-20 border-gray-200 bg-slate-800/50 items-center p-3 m-2">
      
      <div className="flex items-center gap-3">
          <Image width={80} height={80} objectFit= "contain" src={profileUrl} className="rounded-full border-2 border-white" alt={nameClient}
          />
          <div className="flex flex-col">
              <p className="text-white text-xl font-bold">{nameClient}</p>
              <div className="flex items-center gap-2">
                  <Image
                      alt="flag"
                      width={20}
                      height={20}
                      src={flagCountry}
                  />
                  <p className="text-white text-sm">{nameCountry}</p>
              </div>
          </div>
      </div>

      <div className="flex flex-col reseña-description gap-3 justify-center items-center mt-3">
          <p className="text-amber-300 text-sm font-semibold ">{jobDescription}</p>
          <p className="text-indigo-100 text-sm font-semibold">{review}</p>
      </div>
  </div>
)

// Datos para Renderizar
const CardReview: React.FC = () => {

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
    <div className='relative isolate mt-5 '>
                
                <div
                aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-2xl -right-30 -top-52'>
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef9003] to-[#e7d78d] opacity-30 sm:left-[calc(50%-10rem)] sm:w-[72.1875rem]'
                        />
                    </div>

                    
                    <div className="w-screen flex flex-col justify-center items-center pb-20 pt-3  rounded-b-lg bg-slate-500/20">

                      <p className=" title-hero3 text-4xl font-dm-sans font-bold uppercase leading-22 tracking-wider break-words w-1/2 flex justify-center items-center  text-center mt-10 title-reseñas">Reseñas</p>
                      <p className=" text-xl pt-5 text-center reseñas-description-responsive-mobile">Nuestros clientes nos avalan y quedaron satisfechos</p>
                      <div className="m-auto w-4/5 mt-10 container-cards-carousel" >
                        <Slider {...settings} className="">
                          {dataArray.map((card, index) => (
                            <Card key={index} {...card} />
                          ))}
                        </Slider>
                      </div>
                      
                    </div>

                <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 -top-80 -right-32-z-10 transform-gpu overflow-hidden blur-2xl '>
                    <div style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'/>
                    </div>
            </div>

  )
}

export default CardReview;