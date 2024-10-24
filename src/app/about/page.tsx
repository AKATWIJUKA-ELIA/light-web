"use client";
import React from 'react'

const about = () => {
  return (

    <div className=' flex justify-between items-center min-h-screen' style={{ backgroundImage:`url('/images/banner-bg.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}>

            <div className=' flex flex-col md:flex-row gap-20 md:ml-20 -mt-[50%] md:mt-[10%] justify-between items-center md:gap-60'>
                  
                  <div className='flex flex-col '>
                        <div className='flex justify-center '>
                        <h1 className='text-3xl md:text-7xl font-bold'>
                        <span className='md:hidden text-red-500'><a href="/">Home/</a></span>About Us
                        </h1>
                        </div>

                        <div className='flex mt-5 md:mt-10  text-center'>
                              <h1 className='md:text-3xl '> I provide Software <br /> solutions like Web development <br /> Systems development ...</h1>
                        </div>
                        
                  </div>

                  <div className='flex mx-5  -mt-10 md:-mt-80 '>
                        <div className='flex gap-10'>
                              <div className='flex'>
                                    <h1 className='pointer'>
                                          Education
                                    </h1>
                              </div>

                              <div className='flex'>
                                    <h1 className='pointer'>Skills</h1>
                              </div>

                              <div className='flex'>
                                    <h1 className='pointer'>Achievements</h1>
                              </div>

                              <div className='flex'>
                                    <h1 className='pointer'>
                                    Interests
                                    </h1>
                              </div>

                        </div>

                        <div>

                        </div>

                  </div>

            </div>
    </div>
  )
}

export default about;