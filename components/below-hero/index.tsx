import React from 'react'
import Image from 'next/image'
import code from '../../public/images/code.png'



const info = () => {
  return (

      <div className='smooth' id='services'> 
            <div className='flex flex-col md:flex md:flex-row gap-20  '>
                  
                  
                  <div className='flex flex-col md:mt-24 '>
                  <h1 className='text-start md:text-center md:text-4xl font-semibold'>
                        <span className='text-5xl font-bold text-white-400 '> <span className='text-pink-400'>S</span>er<span className='text-green-400'>vice</span>s</span>
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
                                    Desktop Applications
                              </h1>

                              <h3 className='px-5 py-5 mt-5'>
                                    We build fast, scalable, and secure web applications using the latest technologies. We build fast, scalable, and secure web applications using the latest technologies.

                              </h3>

                        </div>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-indigo-900  hover:bg-black rounded-3xl '> 

                              <h1 className='text-2xl font-bold px-5 mt-10'>
                                          Information System Development
                                    </h1>

                                    <h3 className='px-5 py-5 mt-5'>
                                          We build fast, scalable, and secure web applications using the latest technologies.  We build fast, scalable, and secure web applications using the latest technologies.


                                    </h3>

                        </div>

                        <div className='cursor-pointer border-l-4 border-r-2  border-pink-500 bg-green-700  hover:bg-black rounded-3xl '> 

                        <h1 className='text-2xl font-bold px-5 mt-10'>
                                    Web Development
                              </h1>

                              <h3 className='px-5 py-5 mt-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa vero. Dolores incidunt at quod voluptates eius sit illo facere esse, saepe voluptatum deleniti vero, nostrum ducimus officia dolor harum.

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