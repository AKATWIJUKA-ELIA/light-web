import React from 'react'
import { DiDjango } from 'react-icons/di'; 
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si'; 
import { SiPython } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import Link from 'next/link';

const Skills = () => {
  return (
    <div className='mr-5 gap-4 flex flex-col rounded-lg backdrop-blur-3xl'>
            <div className='flex gap-6 -ml-10 mr-12'>
                  <div className='font-bold rounded-md text-xl  flex h-8 w-36'>
                        <h1>Back End:</h1>
                  </div>

                  <div className='flex   border-l-2 border-purple-500 rounded-lg'> 
                        <div className='px-5 flex gap-2' >
                             <Link href='https://www.python.org/'> < SiPython className='text-6xl tooltip text-yellow-300'/> </Link>
                             <Link href='https://www.djangoproject.com/'> <DiDjango className='text-6xl tooltip text-green-700'/> </Link>
                             <Link href='https://react.dev/'> <FaReact className='text-6xl text-blue-500'/> </Link>
                             <Link href='https://nextjs.org/'> <RiNextjsFill className='text-6xl text-white'/> </Link>
                             <Link href=''> <SiJavascript className='text-6xl text-yellow-500'/> </Link> 
                             
                              
                              
                              
                              

                        </div>
                  
                  </div>
                  
            </div>

            <div className='flex gap-6 -ml-10 mr-12'>
                  <div className='font-bold rounded-md text-xl  flex h-8 w-36'>
                        <h1>Front End:</h1>
                  </div>

                  <div className='flex   border-l-2 border-purple-500 rounded-lg'> 
                        <div className='px-5 flex gap-2' >
                              
                         
                              <FaHtml5 className='text-6xl text-orange-700'/>
                              <Link href=' https://tailwindcss.com/'>  <SiTailwindcss className='text-6xl text-blue-500'/> </Link> 
                              <DiCss3 className='text-6xl text-blue-600'/>
                              <SiJavascript className='text-6xl text-yellow-500'/>
                              <Link href='https://www.typescriptlang.org/'> <TbBrandTypescript className='text-5xl text-blue-500'/> </Link> 
                             

                        </div>
                  
                  </div>
                  
            </div>

     
     
      
    </div>
  )
}

export default Skills;