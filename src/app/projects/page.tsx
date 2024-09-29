import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import projects1 from '../../../public/images/projects1.png'
import projects2 from '../../../public/images/projects2.png'




const projects = '/images/Projects1.png'
const project = '/images/Projects2.png'
const Projects = () => {
  return (
    <div className='top-0 justify-between items-center min-h-screen ' style={{ backgroundImage:`url('/images/banner-bg.png')`,backgroundRepeat:'no-repeat',backgroundSize:'fill',backgroundPosition:'center', backgroundBlendMode:'multiply'}} >

      <div className='flex   justify-center gap-20 items-center '>
            <div className='flex flex-col ml-10 mt-10'>
            <h1 className='text-5xl font-bold mb-10 slider slide--fast'> What I Have <span className='text-pink-400'>Done</span></h1>

            <h1 className='text-2xl font-bold slider slide--slow'> Explore and rate the various projects ive worked on </h1>

            <h1  className='mt-10 slider slide--slower'>Contact Us to get a tailored service specifically to meet your particular needs </h1>
            </div>

            <div className=' md:mb-10 flex px-2 py-3 grid grid-cols-2 gap-3 mt-52 backdrop-blur-sm drop-shadow-lg rounded-lg slider-right slide--fast ' >
                  
                  <div className="flex bg-blue-200 border rounded-lg">
                        <Link href='https://eliatranquil.pythonanywhere.com/'>
                              <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0 rounded-lg ' style={{cursor:'pointer'}}/>
                        </Link>
                  </div>

                  <div className="flex bg-blue-200 border rounded-lg ">
                        <Image src={projects2} width={400} height={400} alt='code' className=' grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
                  </div>

                  <div className="flex bg-blue-200 border rounded-lg">
                        <Image src={projects2} width={400} height={400} alt='code' className=' grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
                  </div>

                  <div className="flex bg-blue-200 border rounded-lg">
                        <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
                        {/* hover:blur-sm */}
                  </div>
                 
            </div>
      </div>

    </div>
  )
}

export default Projects;