import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import Image from 'next/image'



const Hero = () => {
      
      
  return (
      <div className="-ml-28 flex relative min-h-screen flex-col  " >
      
      <div className="text-center z-10 md:text-start ml-32 mt-32 flex flex-col">

            <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-10">
      
                        
                  <h1 className="fade-in text-4xl md:text-6xl text-pink-400 font-bold">
                  <span className='text-green-400'> THE </span> 

                  LIGHT  <span className="text-blue-500 fade-in-slowest ">TECHNOLOGIES . . .</span>
                  </h1>

            </div>

            <div className='text-left ml-28 mt-10'>
                  <h1 className='text-4xl font-bold text-pink-400'>
                  I'M

                  <span className='text-left text-blue-500'>
                  <Typewriter
                        words={[' Software Engineer',' Web Developer and web designer',' Networker']}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={4000}
                        
                        />  </span><br/>

                  </h1>
            </div>
            

            

            <div className='text-left ml-28 mt-10 '>
                  <h1 className='text-4xl'><span className='font-bold'> With the Increasingly developing technologies, We aim at providing Quality, durable and secure software solutions to our Customers </span> <br /> <br /> Feel free to explore our sevices...</h1>
            </div>

            

      </div>
      

    
    </div>
  )
}

export default Hero