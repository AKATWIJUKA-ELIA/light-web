/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';
import Image from 'next/image';
import { LuNetwork } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { BiRightArrowCircle } from 'react-icons/bi';
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
      <div  className="-ml-28 flex flex-col md:flex-row md:gap-40 relative min-h-screen " style={{ backgroundImage:`url('/images/color-sharp.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}} >
            
            
            <div className="  md:text-center z-10 md:text-start ml-32 md:ml-10 mt-32 md:mt-28 flex flex-col " >

                  <div className=' -ml-28 md:ml-32  items-center'>
                        {/* <Image src={me} alt='elia' width={300} height={200} className='ml-32 rounded-full border-4 border-double'/> */}
                  </div>

                  <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-40 ">
            
                              
                        <h1 className="text-left md:text-center  text-3xl md:text-5xl  fade-in  text-pink-400 font-bold">
                        <span className='text-green-400 md:text-5xl'>  </span> <span className='md:text-6xl'>Bring.<span className='text-blue-400'>Your</span><span className='text-green-400' >.Ideas</span></span> <span className='text-5xl text-white'>to Life</span>
                        </h1>
                  

                  </div>

                  <div className='text-left md:text-center ml-0 md:ml-28 mt-5'>
                        <h1 className=' text-2xl md:text-4xl font-bold text-pink-400'>
                        I'M a

                        <span className='text-left text-blue-500'>
                        <Typewriter
                              words={[' Software Engineer {%  %}',' Web Developer < / > ',' Web designer', ' Networker'] }
                              loop={100}
                              cursor
                              cursorStyle='_'
                              typeSpeed={100}
                              deleteSpeed={100}
                              delaySpeed={4000}
                              
                              />  </span><br/>

                        </h1>

                        
                        <div className='flex gap-2 mt-10'>
                              <h1 className='font-bold text-2xl' >
                                   <a href="/contact">  Let's Connect  </a>
                              </h1>
                              <a href="/contact"><BiRightArrowCircle className='text-3xl' /></a>
                              
                        </div>
                  </div>

                  <div className="grid grid-cols-6 md:grid md:grid-cols-3 md:gap-2 -ml-3 mt-10 flex  backdrop-blur-sm  text-center md:grid  md:grid-cols-6 md:text-left  ">
                        <a
                        href="https://github.com/AKATWIJUKA-ELIA"
                        className="group slider-up contact slide-up-faster"  >
                              <BsGithub className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl' />
                        
                        </a>

                        <a
                        href="https://www.linkedin.com/in/akatwijuka-elia-64066b295/"
                        className="group slider-up contact slide-up-fast"  >
                              <BsLinkedin className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl'/>
                        
                        </a>

                        <a
                        href="https://x.com/The_light_tech"
                        className="group  slider-up contact slide-up-slow"  >
                              <BsTwitter className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl'/>
                        
                        </a>


                        <a
                        href="https://stackoverflow.com/users/22681878"
                        className="group  slider-up contact slide-up-slower"  >
                              <BsSlack className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl'/>
                        
                        </a>

                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group slider-up contact slide-up-fast"  >
                              <BsInstagram className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl'/>
                        
                        </a>
                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group slider-up contact slide-up-fast"  >
                              <BsWhatsapp className='ml-5 mt-4 px-1 rounded-full border text-3xl md:text-5xl'/>
                        
                        </a>
      
                  </div>
                  
                  

                  

            </div>

            <div className='ml-96 hidden md:block'>
            <Image src={code} alt='code' layout='cover' width={900} height={600} className='backdrop-blur-md -ml-5 mt-52 px-0  rounded-lg' style={{backgroundBlendMode:'multiply'}}/>
            </div>


    
      </div>
  )
}

export default Hero;