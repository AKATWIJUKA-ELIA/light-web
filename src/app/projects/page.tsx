'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects1 from '../../../public/images/projects1.png';
import projects2 from '../../../public/images/projects2.png';
import { HiUser  } from 'react-icons/hi';
import { FaMessage } from 'react-icons/fa6'; 
import { HiMiniServerStack } from 'react-icons/hi2';
import { AiOutlineFileDone } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi';
import ProjectOne from '../../../components/projects/project_one';
import ProjectTwo from '../../../components/projects/project_two';

const Projects = () => {
    const [activeProject, setActiveProject] = useState('projectOne');

    return (
        <div className='top-0 justify-between items-center min-h-screen ' style={{ backgroundImage: `url('/images/banner-bg.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'fill', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }}>
            <div className='flex flex-col justify-center md:gap-2 items-center '>
                <div className='flex flex-col md:ml-10 mt-40 md:mt-40'>
                    <h1 className='text-3xl md:text-5xl font-bold md:mb-10 slider slide--fast text-center'> What I Have <span className='text-pink-400'>Done</span></h1>
                    <h1 className='text-2xl font-bold slider slide--slow mx-10 mt-3 md:mt-0'> Explore and rate the various projects I've worked on </h1>
                    <h1 className='mt-10 slider slide--slower pl-3'>Contact Us to get a tailored service specifically to meet your particular needs </h1>

                    <div className="mx-10 flex justify-center gap-6 border opacity-75 rounded-full backdrop-blur-lg bg-gradient-to-r from-blue-800 to-pink-600 ">
                        <div className={`flex ${activeProject === 'projectOne' ? 'activate' : ''}`} onClick={() => setActiveProject('projectOne')}>
                            <h1 className='flex md:mx-10 px-5 py-4 pointer'>TAB One</h1>
                        </div>
                        <div className={`flex ${activeProject === 'projectTwo' ? 'activate' : ''}`} onClick={() => setActiveProject('projectTwo')}>
                            <h1 className='flex md:mx-10 px-5 py-4 pointer'>TAB Two</h1>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                {activeProject === 'projectOne' ? <ProjectOne /> : <ProjectTwo />}
            </div>
        </div>
    );
};

export default Projects;