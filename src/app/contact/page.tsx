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
      <div className=" flex flex-col md:flex-row relative min-h-screen  smooth" style={{ backgroundImage:`url('/images/color-sharp.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}  >
      
            <div className="z-10  ml-96 mt-32 md:mt-2  flex flex-col " >

                  <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-32 ">
            
                              
                        <h1 className="text-left  text-3xl fade-in md:text-8xl text-pink-400 font-bold">
                        <span className="text-blue-500  fade-in-slowest ">Get In <span className='text-pink-800'>Touch</span></span>
                        </h1>                 

                  </div>

                  <div className=' hidden md:block'>
            
                        <form action="" className=' mt-2  border-double backdrop-blur-lg'>
                              <h1 className='text-center font-bold'> Send Us an Email</h1>
                              <div className='flex flex-col gap-2 mt-3 px-2'>
                                    <div className='flex gap-20 '>
                                          <input type="text" placeholder='Name' className='py-3 w-80 text-gray-900 bg-transparent rounded-lg border-2 border-gray flex'/>
                                          <input type="text" placeholder='Email' className='py-3 w-80 text-gray-900 bg-transparent rounded-lg border-2 border-gray flex'/>
                                    </div>  
                                    <input  type="text" placeholder='Subject' className='py-3 text-gray-900 bg-transparent rounded-lg border-2 border-gray mt-5'/>
                                    <textarea  placeholder='Message'  className=' h-36 py-3 text-gray-900 bg-transparent rounded-lg border-2 border-gray mt-5' ></textarea>
                                    <button className='py-3 w-80  bg-transparent border mb-2 rounded-full mt-5'>Submit</button>

                              </div>
                        </form>
                  </div>

            </div>
            


    
      </div>
  )
}

export default contact
