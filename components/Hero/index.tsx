'use client';
import React, { useState } from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';
import Image from 'next/image';
import { LuNetwork } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import code from '../../public/images/codenogb.png'
import me from '../../public/images/meee.jpg'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { SlCallOut } from 'react-icons/sl';



const Hero = () => {
      // const [scroll, SetScroll] = useState(false)

      const handleScroll = ()=>{
            document.scrollingElement?.scrollTo(0,500)
      };


      
      
  return (
      <div  className="-ml-28 flex flex-col md:flex-row relative min-h-screen    backdrop-blur-lg" >
            
            
            <div className="  md:text-center z-10 md:text-start ml-32 md:ml-0 mt-32 md:mt-28 flex flex-col" >

                  <div className=' -ml-28 md:ml-32  items-center'>
                        <Image src={me} alt='elia' width={300} height={200} className='ml-32 rounded-full border-4 border-double'/>
                  </div>

                  <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-5 ">
            
                              
                        <h1 className="text-left md:text-center  text-3xl md:text-5xl  fade-in  text-pink-400 font-bold">
                        <span className='text-green-400 md:text-5xl'>  </span> <span className='md:text-6xl'>LIGHT</span> <span className="text-blue-500  md:text-6xl fade-in-slowest ">TECHNOLOGIES </span>
                        </h1>
                  

                  </div>

                  <div className='text-left md:text-center ml-3 md:ml-28 mt-5'>
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

                  <div className="grid grid-cols-3 md:grid md:grid-cols-1 -ml-3 mt-10 md:mx-40 md:py-2 flex md:mx-4  backdrop-blur-sm rounded-md border text-center md:grid  md:grid-cols-6 md:text-left  ">
                        <a
                        href="https://github.com/AKATWIJUKA-ELIA"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700 md:mx-6 px-5 py-4 contact slider-up slide-up-faster"  >
                              <BsGithub />
                        
                        </a>

                        <a
                        href="https://www.linkedin.com/in/akatwijuka-elia-64066b295/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact slider-up slide-up-fast"  >
                              <BsLinkedin/>
                        
                        </a>

                        <a
                        href="https://x.com/The_light_tech"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact slider-up slide-up-slow"  >
                              <BsTwitter/>
                        
                        </a>


                        <a
                        href="https://stackoverflow.com/users/22681878"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact slider-up slide-up-slower"  >
                              <BsSlack/>
                        
                        </a>

                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact slider-up slide-up-fast"  >
                              <BsInstagram/>
                        
                        </a>
                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact slider-up slide-up-fast"  >
                              <BsWhatsapp/>
                        
                        </a>
      
                  </div>
                  
                  <div className=' flex justify-center items-center mt-10' >
                  <BiChevronDown className='text-5xl md:ml-20 color' onClick={handleScroll} style={{cursor:'pointer'}} />
                  </div>

                  <div className='flex md:ml-32 gap-2 -mt-20'>
                        <div  className="rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 contact"style={{cursor:'pointer'}}  >
                             <h1 className='text-2xl font-bold pt-1 mr-2 '> Call now  </h1> <SlCallOut className=' text-2xl ml-32 pr-1 -mt-6'/>
                        
                        </div>

                        <div  className="rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 contact"style={{cursor:'pointer'}}  >
                             <h1 className='text-2xl font-bold pt-1 mr-2 '> Go to CV </h1>
                        
                        </div>                        

                  </div>
                  

                  

            </div>

            <div className='transform skew-x-12 px-20 borderc bg-gradient-to-r from-purple-900 -mr-20 hidden md:block'>
            <Image src={code} alt='code' layout='cover' width={900} height={600} className='   backdrop-blur-md -ml-5 mt-52 px-0  transform -skew-x-12 rounded-lg' style={{backgroundBlendMode:'multiply'}}/>
            </div>


    
      </div>
  )
}

export default Hero