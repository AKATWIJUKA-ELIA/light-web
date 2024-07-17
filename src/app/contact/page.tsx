'use client';
import React, { useState } from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';
import Image from 'next/image';
import { LuNetwork } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { SlCallOut } from 'react-icons/sl';

const code ='/images/code.png'





const contact = () => {

      
      
  return (
      <div className="-ml-28 flex flex-col md:flex-row relative min-h-screen  smooth"  >
      
            <div className="  md:text-center z-10 md:text-start ml-32 md:ml-0 mt-32 md:mt-40 flex flex-col ">

                  <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-52 ">
            
                              
                        <h1 className="text-left  text-3xl fade-in md:text-8xl text-pink-400 font-bold">
                        <span className="text-blue-500  fade-in-slowest ">Get In <span className='text-pink-800'>Touch</span></span>
                        </h1>

                        <h1 className='ml-5 text-xl '>
                             
                              <Typewriter
                              words={[' Feel free to give a call Or Send us an email  well respond as quickly as possible '] }
                              loop={1}
                              cursor
                              cursorStyle='_'
                              typeSpeed={90}
                              deleteSpeed={100}
                              delaySpeed={4000}
                              
                              />
                        </h1>
                  

                  </div>

                 

                  <div className="grid grid-cols-3 md:grid md:grid-cols-1 -ml-3 mt-10 md:mx-40 md:py-2 flex md:mx-4  backdrop-blur-sm text-center md:grid  md:grid-cols-6 md:text-left  ">
                        <a
                        href="https://github.com/AKATWIJUKA-ELIA"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700 md:mx-6 px-5 py-4 contact"  >
                              <BsGithub />
                        
                        </a>

                        <a
                        href="https://www.linkedin.com/in/akatwijuka-elia-64066b295/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact"  >
                              <BsLinkedin/>
                        
                        </a>

                        <a
                        href="https://x.com/The_light_tech"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact"  >
                              <BsTwitter/>
                        
                        </a>


                        <a
                        href="https://stackoverflow.com/users/22681878"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact"  >
                              <BsSlack/>
                        
                        </a>

                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact"  >
                              <BsInstagram/>
                        
                        </a>
                        <a
                        href="https://www.instagram.com/r_e_a_l_m_e_n/"
                        className="group rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 px-5 py-4 contact"  >
                              <BsWhatsapp/>
                        
                        </a>
      
                  </div>
                  

                  {/* <div className='flex md:ml-32 gap-2'>
                        <div  className="rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 contact"style={{cursor:'pointer'}}  >
                             <h1 className='text-2xl font-bold pt-1 mr-2 '> Call now  </h1> <SlCallOut className=' text-2xl ml-32 pr-1 -mt-6'/>
                        
                        </div>

                        <div  className="rounded-full border-double border-4 bg-gradient-to-r from-indigo-600 via-purple-700  md:mx-6 contact"style={{cursor:'pointer'}}  >
                             <h1 className='text-2xl font-bold pt-1 mr-2 '> Go to CV </h1>
                        
                        </div>                        

                  </div> */}
                  

                  

            </div>

            <div className='transform skew-x-12 px-20 borderc bg-gradient-to-r from-purple-900 -mr-20 hidden md:block'>
            
                        <form action="" className='transform -skew-x-12 mt-52 rounded-lg border-4 border-double backdrop-blur-lg'>
                              <h1 className='text-center font-bold'> Send Us an Email</h1>
                              <div className='flex flex-col gap-2 mt-3 px-2'>
                                    <div className='flex gap-2 '>
                                          <input type="text" placeholder='Name' className='py-3 text-gray-900 rounded-lg border-2 border-gray flex'/>
                                          <input type="text" placeholder='Email' className='py-3 text-gray-900 rounded-lg border-2 border-gray flex'/>
                                    </div>  
                                    <input type="text" placeholder='Subject' className='py-3 text-gray-900 rounded-lg border-2 border-gray mt-5'/>
                                    <textarea placeholder='Message' className='py-3 text-gray-900 rounded-lg border-2 border-gray mt-5'></textarea>
                                    <button className='py-3 bg-gradient-to-r from-blue-900 to-purple-700 mb-2 rounded-lg mt-5'>send</button>

                              </div>
                        </form>
            </div>


    
      </div>
  )
}

export default contact
