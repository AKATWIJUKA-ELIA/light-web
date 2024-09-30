import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { HiUser } from 'react-icons/hi'
import { FaMessage } from 'react-icons/fa6' 
import { HiMiniServerStack } from 'react-icons/hi2'
import { AiOutlineFileDone } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { HiHome } from 'react-icons/hi'

const footer = () => {
  return (
      <div className="fixed bottom-0 left-0 z-40 flex justify-center gap-6 md:hidden w-full border opacity-75 rounded-full backdrop-blur-lg ">

      <div className='flex flex-col'>
      <a
        href="/"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <HiHome className='text-2xl'/>
      
      </a>

      <h1 className='flex mx-auto -mt-5'>
            Home
      </h1>
      </div>


      <div className='flex flex-col'>
      <a    href="/#services"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <HiMiniServerStack className='text-2xl text-red-800 flex'/>
            
      
      </a>

      <h1 className='flex mx-auto -mt-5'>
            Services
      </h1>
      </div>
     
     

      
      <div className='flex flex-col'>
      <a
        href="/projects"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <AiOutlineFileDone className='text-2xl text-red-800'/>
      
      </a>

      <h1 className='flex mx-auto -mt-5'>
            Projects
      </h1>
      </div>


      <div className='flex flex-col '>
      <a
        href="/about"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <HiUser className='text-2xl text-red-800'/>
      
      </a>

      <h1 className='flex mx-auto -mt-5'>
            About
      </h1>
      </div>


      <div className='flex flex-col '>
            <a
            href="/contact"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <FaMessage className='text-2xl text-red-800'/>
            
            </a>

            <h1 className='flex mx-auto -mt-5'>
                  Contact
            </h1>
      </div>

     
      
    </div>
  )
}

export default footer;