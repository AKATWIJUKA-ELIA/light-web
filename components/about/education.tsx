import React from 'react'

const Education = () => {
  return (
    <div className='mr-5 gap-4 flex flex-col rounded-lg backdrop-blur-3xl'>
      <div className='flex gap-6 -ml-10 mr-12'>
            <div className='font-bold rounded-md text-xl  flex h-8 w-16'> <h1>Degree:</h1></div>
            <div className='flex hover:  border-l-2 border-purple-500  rounded-lg '> <h1 className='text-white px-4 py-4 ' style={{ fontFamily: 'Times New Roman' }}> I earned a Bachelor of Science in Software Engineering from Bugema University in Year. <br/> My studies focused on software development methodologies, programming languages, and database management. <br/>I am proficient in list of programming languages and have experience in list of relevant projects.    </h1></div>
      
      </div>

      <div className='flex gap-6 -ml-10 mr-12'>
            <div className='font-bold rounded-md text-xl  flex h-8 w-16'> <h1>Degree:</h1></div>
            <div className='flex  border-l-2 border-purple-500 rounded-lg'> <h1 className='text-white px-4 py-4 ' style={{ fontFamily: 'Times New Roman' }} > I earned a Bachelor of Science in Software Engineering from Bugema University in Year. <br/> My studies focused on software development methodologies, programming languages, and database management. <br/>I am proficient in list of programming languages and have experience in list of relevant projects.    </h1></div>
      
      </div>

      <div className='flex gap-6 -ml-10 mr-12'>
            <div className='font-bold rounded-md text-xl bg-black bg-opacity-15 flex -ml-12 h-8 w-36'> <h1>High School:</h1></div>
            <div className='flex -ml-8 border-l-2 border-purple-500 rounded-lg'> <h1 className='text-white px-4 py-4 ' style={{ fontFamily: 'Times New Roman' }} > I hold a Bachelors Degree in Software Engineering which i atained at Bugema University    </h1></div>
      
      </div>

     
     
      
    </div>
  )
}

export default Education;