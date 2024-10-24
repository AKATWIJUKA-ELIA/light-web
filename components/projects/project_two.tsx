import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import projects1 from '../../public/images/projects1.png';
import projects2 from '../../public/images/projects2.png';

const ProjectTwo = () => {
  return (
      <div className=' md:mb-10 flex px-2 py-3 grid grid-cols-3 gap-3 md:mt-2 backdrop-blur-sm drop-shadow-lg rounded-lg slider-right slide--faster  ' id='tab1'  >
                  
      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-faster">
            <Link href='https://eliatranquil.pythonanywhere.com/'>
                  <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0 rounded-lg ' style={{cursor:'pointer'}}/>
            </Link>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-fast">
            <Image src={projects2} width={400} height={400} alt='code' className=' grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-slow">
            <Image src={projects2} width={400} height={400} alt='code' className=' grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-faster">
            <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
            {/* hover:blur-sm */}
      </div>


     
</div>
  )
}

export default ProjectTwo;