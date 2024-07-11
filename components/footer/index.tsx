import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const footer = () => {
  return (
      <div className=" mx-40 py-2 grid rounded-full backdrop-blur-sm text-center grid-cols-5 md:text-left  bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-400">
      <a
        href=""
        className="group rounded-lg border border-transparent mx-10 px-5 py-4 "  >
            <BsGithub/>
      
      </a>

      <a
        href=""
        className="group rounded-lg border border-transparent mx-10 px-5 py-4 "  >
            <BsGithub/>
      
      </a>

      <a
        href=""
        className="group rounded-lg border border-transparent mx-10 px-5 py-4 "  >
            <BsGithub/>
      
      </a>


      <a
        href=""
        className="group rounded-lg border border-transparent mx-10 px-5 py-4 "  >
            <BsGithub/>
      
      </a>

      <a
        href=""
        className="group rounded-lg border border-transparent mx-10 px-5 py-4 "  >
            <BsLinkedin/>
      
      </a>
      
    </div>
  )
}

export default footer