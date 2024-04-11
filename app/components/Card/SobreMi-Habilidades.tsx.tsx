import Link from "next/link";
import Image from "next/image";

interface ParamData {
  title: string,
  description: string;
  image: string;
}

const CardHability: React.FC<ParamData> = ({title, description, image}) => {

    return(
      <div className="flex justify-center items-center">

        <div className="">
          <div
            aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-20'>
            {/* <div style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1842ce] to-[#89d2fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            /> */}
          </div>

          <div className="flex flex-col justify-start mb-20 gap-3 p-5 border border-gray-500/30 secondary/30 h-72 w-72 rounded-lg hover:bg-slate-500/20 hover:shadow-md transition duration-300">
            <div className="flex gap-5 items-center">
              <Image width={50} height={50} alt={title} src={image}/>
              <h1 className="text-2xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize">{title}</h1>
            </div>
            <p className="text-md font-medium">{description}</p>
          </div>

          
        </div>
      </div>
  )
}
export default CardHability;