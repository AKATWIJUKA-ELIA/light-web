import React from 'react'


const Hero = () => {
  return (
      <div className="-ml-28 flex relative min-h-screen flex-col  " >
      
      <div className="text-center absolute z-10 md:text-start ml-32 mt-32 flex flex-col">

            <div className=" text-center md:text-left md:ml-28 mt-20 ">
                  <h1 className="fade-in-slower text-3xl font-bold">
                        <span className='text-green-400'>WELCOME </span> TO THE
                  </h1>
            </div>

            <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-10">
                  <h1 className="text-4xl md:text-6xl text-pink-400 font-bold">
                        LIGHT <span className="text-blue-500 text-4xl md:text-5xl">TECHNOLOGIES . . .</span>
                  </h1>
            </div>

            <div className='text-left ml-28 mt-5'>
                  <h1 className='text-3xl'>

                  <span className='text-left '> Thank you for visiting Us We are so happy to see you.. </span><br/> With the Increasingly developing technologies, We aim at providing Quality, durable and secure software solutions to our Customers

                  </h1>
            </div>

      </div>

    
    </div>
  )
}

export default Hero