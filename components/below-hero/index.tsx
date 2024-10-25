/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import code from '../../public/images/code.png'



const info = () => {
  return (

      <div className='smooth' id='services'> 
            <div className='flex flex-col md:flex md:flex-row gap-20  '>
                  
                  
                  <div className='flex flex-col md:mt-24 '>
                  <h1 className=' text-center md:text-4xl font-semibold'>
                        <span className='text-5xl font-bold text-white-400 '><span className='text-pink-400'>S</span>er<span className='text-green-400'>vice</span>s</span>
                  </h1>
                  <h1 className='text-center mt-5'>
                        <span className='text-3xl  font-bold text-white-400 '>We offer a wide range of IT services to help you achieve your goals.</span>
                  </h1>

                  <div className='mt-10 md:mx-40 px-5 py-5 grid grid-cols-1 md:grid md:grid-cols-2 gap-10 '>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-green-600  hover:bg-black   rounded-3xl'> 

                              <h1 className='text-2xl font-bold px-5 mt-10'>
                              Web Development
                              </h1>

                              <h3 className='px-5 py-5 py-5 text-xl mt-5'>
                                    We build fast, scalable, and secure web applications using the latest technologies.  We build fast, scalable, and secure web applications using the latest technologies.

                              </h3>

                        </div>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-indigo-900  hover:bg-black rounded-3xl '> 

                        <h1 className='text-2xl font-bold px-5 mt-10'>
                                    Computer Repair & Maintenance
                              </h1>

                              <h3 className='px-5 py-5 mt-5'>
                                    We do a wide range of computer repair and maintenance services including but not limited to Windows installation, Drivers Installation, system updating etc.

                              </h3>

                        </div>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-indigo-900  hover:bg-black rounded-3xl '> 

                              <h1 className='text-2xl font-bold px-5 mt-10'>
                                          Information System Development
                                    </h1>

                                    <h3 className='px-5 py-5 mt-5'>
                                          We build fast, scalable, and secure System using the latest technologies. These include Hotel Management, school management systems etc...


                                    </h3>

                        </div>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-green-700  hover:bg-black rounded-3xl '> 

                        <h1 className='text-2xl font-bold px-5 mt-10'>
                                    User Interface Development
                              </h1>

                              <h3 className='px-5 py-5 mt-5'>
                                    We develop User Interfaces tailored to the user&apos;s needs 

                              </h3>

                        </div>

                  </div>

                  </div>

                  {/* <div className='mr-24'>
                  <Image src={code} alt='code' width={500} height={200}/>
                  </div> */}

            </div>
            
      </div>
      
  )
}

export default info;