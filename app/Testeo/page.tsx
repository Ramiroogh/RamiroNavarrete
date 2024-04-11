import Link from "next/link";
import Image from "next/image";

interface ParamData {
  title: string,
  description: string;

}

const Testeo: React.FC<ParamData> = ({title, description}) => {

    return(
      <div className="flex justify-center items-center">

        <div className="w-80 items-center justify-center mb-32">
          <div className='relative isolate'>
            <div
              aria-hidden="true" className='pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1842ce] to-[#89d2fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              />
            </div>

            <div className="">
              <div className=''>
                <div className='mt-16 '>
                  <div className=' rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10'>

                  <section className="flex justify-center items-center gap-10 p-5 border bg-gray-300/20 border-gray-300 hover:shadow-xl transition duration-300 rounded-lg">
                    <div className=" flex flex-col gap-3 max-w-lg">
                        <h1 className="text-4xl font-semibold tracking-normal lg:5xl scroll-m-20 capitalize text-blue-800">{title}</h1>
                        <p className="text-xl font-medium">
                            {description}
                        </p>
                       
                    </div>
                    
                    </section>

                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true" className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#032eac] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
              />
            </div>

          </div>


        </div>
        </div>
  )
}
export default Testeo;