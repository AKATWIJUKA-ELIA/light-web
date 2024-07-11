import React from 'react'
import Image from 'next/image'
import code from '../../public/images/code.png'


const info = () => {
  return (

      <div className='  -mt-40  text-center md:text-left bg-blue-800 bg-opacity-25 '>
            <div className='md:ml-10 md:ml-24 flex flex-col md:flex md:flex-row gap-20 '>
            
            
                  <div className='flex flex-col md:mt-24 '>
                  <h1 className='text-start md:text-center md:text-4xl font-semibold'>
                        <span className='text-green-400 md:ml-32'>Hello ! </span> I&apos;m Akatwijuka Elia
                  </h1>

                  <div className=' rounded-lg border border-black px-4 py-5  bg-opacity-25 bg-blue-900 backdrop-blur-md text-center md:text-left  '>
                        <h1 className='text-2xl'>
                        I&apos;m a Proffessional Software engineer with a strong understanding <br /> of software development principles and passion for solving problems through code.
                        <br /> I&apos;m also a Full-stack web developer and Networker. <br /> With the experience i have attained in these fields 
                        I can bring a holistic approach to your technological needs.
                        </h1>
                  </div>
                  </div>

                  <div className='mr-24'>
                  <Image src={code} alt='code' width={500} height={200}/>
                  </div>

            </div>
            
      </div>
      
  )
}

export default info