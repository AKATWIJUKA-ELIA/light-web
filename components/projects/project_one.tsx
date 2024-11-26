import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import projects1 from '../../public/images/amazima.png';
import bugema from '../../public/images/bugema.png';
import troy from '../../public/images/troysite.png';

const ProjectOne = () => {
  return (
      <div className=' md:mb-10 flex px-2 py-3 grid grid-cols-3 gap-3 md:mt-2 backdrop-blur-sm drop-shadow-lg rounded-lg slider-right slide--faster  ' id='tab1'  >
                  
      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-faster">
            <Link href='https://lightsuccess.pythonanywhere.com/' target="blank">
                  <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0 rounded-lg ' style={{cursor:'pointer'}}/>
            </Link>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-fast">
      <Link href='https://www.bugemauniv.ac.ug/' target="blank">
                  <Image src={bugema} width={400} height={400} alt='code' className='grayscale hover:grayscale-0 rounded-lg ' style={{cursor:'pointer'}}/>
            </Link>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-slow">
      <Link href='https://troylegacy.vercel.app/' target="blank">
                  <Image src={troy} width={400} height={400} alt='code' className='grayscale hover:grayscale-0 rounded-lg ' style={{cursor:'pointer'}}/>
            </Link>
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-faster">
            <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
            {/* hover:blur-sm */}
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-fast">
            <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
            {/* hover:blur-sm */}
      </div>

      <div className="flex bg-blue-200 border rounded-lg slider-up slide-up-slow">
            <Image src={projects1} width={400} height={400} alt='code' className='grayscale hover:grayscale-0  rounded-lg ' style={{cursor:'pointer'}}/>
            {/* hover:blur-sm */}
      </div>
     
</div>
  )
}

export default ProjectOne;