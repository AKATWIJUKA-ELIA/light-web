import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const footer = () => {
  return (
      <div className=" md:mx-40 md:py-2 flex mx-5  rounded-full backdrop-blur-sm text-center md:grid  md:grid-cols-5 md:text-left  bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-400">
      <a
        href="https://github.com/AKATWIJUKA-ELIA"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 "  >
            <BsGithub/>
      
      </a>

      <a
        href=""
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 "  >
            <BsLinkedin/>
      
      </a>

      <a
        href="https://x.com/The_light_tech"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 "  >
            <BsTwitter/>
      
      </a>


      <a
        href="https://stackoverflow.com/users/22681878"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 "  >
            <BsSlack/>
      
      </a>

      <a
        href=""
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 "  >
            <BsFacebook/>
      
      </a>
      
    </div>
  )
}

export default footer