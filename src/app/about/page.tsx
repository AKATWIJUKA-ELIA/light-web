'use client';
import { useState } from 'react';
import React from 'react';
import Education from '../../../components/about/education';
import Skills from '../../../components/about/skills';
import WorkExperience from '../../../components/about/work_experience';
import Interests from '../../../components/about/interests';

const About = () => {
    const [activeTab, setActiveTab] = useState('Education'); // Initialize with default tab

    return (
        <div 
            className='flex justify-between items-center min-h-screen'
            style={{
                backgroundImage: `url('/images/banner-bg.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
            }}
        >
            <div className='flex flex-col md:flex-row gap-20 md:ml-20 mt-[50%] md:mt-[10%] justify-between items-center md:gap-60'>
                {/* Header Section */}
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <h1 className='text-3xl md:text-7xl font-bold'>
                            <span className='md:hidden text-red-500'><a href="/">Home/</a></span>About Me
                        </h1>
                    </div>

                    <div className='flex mt-5 md:mt-10 text-center'>
                        <h1 className='md:text-3xl'>I provide Software <br /> solutions like Web development <br /> Systems development ...</h1>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className='flex flex-col mx-5 mt-50 md:-mt-10'>
                    <div className='flex gap-2 md:gap-10 px-1 '>
                        {/* Tab Buttons */}
                        <h1 
                            className={`pointer ${activeTab === 'Education' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Education')}
                        >
                            Education
                        </h1>

                        <h1 
                            className={`pointer ${activeTab === 'Skills' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Skills')}
                        >
                            Skills
                        </h1>
                        
                        <h1 
                            className={`pointer ${activeTab === 'WorkExperience' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('WorkExperience')}
                        >
                            Work Experience
                        </h1>
                        <h1 
                            className={`pointer ${activeTab === 'Interests' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Interests')}
                        >
                            Interests
                        </h1>
                    </div>

                    {/* Render Active Tab Content */}
                    <div className='flex -ml-4 mt-3'>
                        {activeTab === 'Education' && <Education />}
                        {activeTab === 'Skills' && <Skills />}
                        {activeTab === 'WorkExperience' && <WorkExperience />}
                        {activeTab === 'Interests' && <Interests />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
