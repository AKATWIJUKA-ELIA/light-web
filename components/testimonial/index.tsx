import React from 'react'
import Image from 'next/image'
import code from '../../public/images/me.png'

const testimonial = () => {
  return (
    <div className='px-10 justify-between items-center bg-gray-700'>
      <div className='flex gap-2 py-10 '>

            <div className='flex rounded-lg bg-gray-900'>
            <Image src={code} width={300} height={200} alt='person'/>
            </div>

            <div className=' flex bg-gray-200 rounded-lg justify-between items-center text-xl text-black'>
                  <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>  Corrupti dolore distinctio sunt eos iusto suscipit molestias nam iur</h1>
            </div>

      </div>
    

    </div>
  )
}

export default testimonial