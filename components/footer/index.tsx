import React from 'react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const footer = () => {
  return (
      <div className="fixed bottom-0 left-0 z-40 flex md:hidden w-full border opacity-75 rounded-full backdrop-blur-lg ">
      <a
        href="https://github.com/AKATWIJUKA-ELIA"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsGithub/>
      
      </a>

      <a
        href="https://www.linkedin.com/in/akatwijuka-elia-64066b295/"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsLinkedin/>
      
      </a>

      <a
        href="https://x.com/The_light_tech"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsTwitter/>
      
      </a>


      <a
        href="https://stackoverflow.com/users/22681878"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsSlack/>
      
      </a>

      <a
        href="https://www.instagram.com/r_e_a_l_m_e_n/"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsInstagram/>
      
      </a>
      <a
        href="https://www.instagram.com/r_e_a_l_m_e_n/"
        className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
            <BsWhatsapp/>
      
      </a>
      
    </div>
  )
}

export default footer;