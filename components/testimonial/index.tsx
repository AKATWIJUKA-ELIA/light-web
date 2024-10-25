import React from 'react'
import Image from 'next/image'
import code from '../../public/images/me.png'



const testimonial = () => {

  return (
      <section className="relative justify-center isolate overflow-hidden border rounded-3xl my-10 px-6 py-24 sm:py-32 lg:px-8">

            <div className='justify-center flex'> <h1 className='font-bold text-5xl md:text-6xl'> Testimonials </h1></div>
      
            

            <div className=" mx-auto max-w-2xl lg:max-w-4xl bg-white rounded-3xl">
            {/* <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" className="mx-auto h-12" /> */}

            <figure className="mt-10 flex flex-col md:flex-row md:px-2">

            <figcaption className="mt-10">
                  <img
                  alt="troy"
                  src="images/troy.png"
                  className="mx-auto md:py-5 h-20 w-20 md:h-40 md:w-40 rounded-full"
                  />

                  <div className="mt-4 flex flex-col items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900"> TroyLegacy</div>
                  {/* <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={5} cx={5} cy={5} />
                  </svg> */}
                  <div className="text-gray-600">Partner</div>
                  </div>
            </figcaption>
            
            
            
            <blockquote className="md:ml-20 md:mt-20 text-center md:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                  The services that light tech provides are top notch. They are dedicated to extending creativity and innovation into digital solutions that benefit the global community.
                  </p>
            </blockquote>

            </figure>
            </div>

    </section>
  )
}

export default testimonial;