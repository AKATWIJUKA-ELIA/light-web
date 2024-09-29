"use client";
import React from 'react'

const about = () => {
  return (

    <div className=' flex justify-between items-center min-h-screen' style={{ backgroundImage:`url('/images/banner-bg.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}>

            <div className=' flex ml-20 mt-[10%] justify-between items-center' >
                  
                  <div className='flex flex-col'>
                        <div className='flex '>
                        <h1 className='text-7xl font-bold'>
                        About Us
                        </h1>
                        </div>

                        <div className='flex mt-10 '>
                              <h1 className='text-3xl '> I provide Software <br /> solutions like Web development <br /> Systems development ...</h1>
                        </div>
                        
                  </div>

                  <div className='flex'>

                  </div>

            </div>
    </div>
  )
}

export default about;