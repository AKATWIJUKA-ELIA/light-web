import React, { Children } from 'react';
import { DiDjango } from 'react-icons/di'; 
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si'; 
import { FaChess } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { FaPersonHiking } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import Link from 'next/link';

const Interests = () => {
  return (
    <div className='mr-5 gap-4 flex flex-col rounded-lg backdrop-blur-3xl'>
            <div className='flex gap-6 -ml-10 mr-12'>
                  <div className='font-bold rounded-md text-xl  flex h-8 w-36'>
                        {/* <h1>Back End:</h1> */}
                  </div>

                  <div className='flex   border-l-2 border-purple-500 rounded-lg'> 
                        <div className='px-5 flex gap-2' >
                             < FaPersonHiking className='text-6xl tooltip text-green-600'/>
                             <ImCamera className='text-6xl text-white'/>
                             <CgGym className='text-6xl text-white'/>
                             
                        </div>
                  
                  </div>
                  
            </div>

            <div className='flex gap-6 -ml-10 mr-12'>
                  <div className='font-bold rounded-md text-xl  flex h-8 w-36'>
                        {/* <h1>Front End:</h1> */}
                  </div>

                  <div className='flex   border-l-2 border-purple-500 rounded-lg'> 
                        <div className='px-5 flex gap-2' >
                              
                         
                             
                             
                              <FaChess className='text-6xl text-blue-600'/>
                             

                        </div>
                  
                  </div>
                  
            </div>

     
     
      
    </div>
  )
}

export default Interests;