import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import Image from 'next/image'
import { LuNetwork } from 'react-icons/lu'
import { FaCode } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'



const Hero = () => {
      
  return (
      <div className="-ml-28 flex relative min-h-screen flex-col  backdrop-blur-lg"  >
      
      <div className="  md:text-center z-10 md:text-start ml-32 md:ml-0 mt-32 md:mt-40 flex flex-col backdrop-blur-md">

            <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-10 ">
      
                        
                  <h1 className="text-left md:text-center text-3xl fade-in md:text-6xl text-pink-400 font-bold">
                  <span className='text-green-400'> THE </span> 

                  LIGHT  <span className="text-blue-500 md:text-6xl  fade-in-slowest ">TECHNOLOGIES </span>
                  </h1>
            

            </div>

            <div className='text-left md:text-center ml-3 md:ml-28 mt-10'>
                  <h1 className=' text-2xl md:text-4xl font-bold text-pink-400'>
                  I&apos;M a

                  <span className='text-left text-blue-500'>
                  <Typewriter
                        words={[' Software Engineer {%  %}',' Web Developer < / > and web designer',' Networker'] }
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={4000}
                        
                        />  </span><br/>

                  </h1>
            </div>
            

            

            <div className='text-left md:text-center md:ml-28 mt-10 '>
                  <h1 className='md:text-4xl'><span className='font-bold'> With the Increasingly developing technologies, We aim at providing Quality, durable and secure software solutions to our Customers </span> <br /> <br /> Feel free to explore our sevices...</h1>
                  
            </div>
            <div className=' flex justify-center items-center mt-10' >
            <BiChevronDown className='text-5xl md:ml-20 ' style={{cursor:'pointer'}} />
            </div>
            

            

      </div>
      

    
    </div>
  )
}

export default Hero