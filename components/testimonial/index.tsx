import React from 'react'
import Image from 'next/image'
import code from '../../public/images/me.png'
import { Carousel } from "flowbite-react";

const testimonial = () => {
  return (
      <section className="relative justify-center isolate overflow-hidden border rounded-3xl my-10 px-6 py-24 sm:py-32 lg:px-8">

            <div className='justify-center flex'> <h1 className='font-bold text-6xl'> Testimonials </h1></div>

            <div className="mx-auto max-w-2xl lg:max-w-4xl bg-white rounded-3xl">
            {/* <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" className="mx-auto h-12" /> */}

            <figure className="mt-10 flex flex-col md:flex-row md:px-2">

            <figcaption className="mt-10">
                  <img
                  alt=""
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mx-auto h-20 w-20 md:h-40 md:w-40 rounded-full"
                  />

                  <div className="mt-4 flex flex-col items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Judith Black</div>
                  {/* <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={5} cx={5} cy={5} />
                  </svg> */}
                  <div className="text-gray-600">CEO of Workcation</div>
                  </div>
            </figcaption>
            
            
            
            <blockquote className="bg-primary md:mt-20 text-center md:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
            </blockquote>

            </figure>
            </div>
    </section>
  )
}

export default testimonial