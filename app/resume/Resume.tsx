'use client';
import React, { useEffect } from 'react';
import { hideCard } from '../utils';

// Define interfaces for our experience and education items
interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  location: string;
}

interface EducationItem {
  date: string;
  degree: string;
  institution: string;
  location: string;
}

export const Resume: React.FC = () => {
  useEffect(() => {
    hideCard();
  }, []);

  // Define work experiences
  const experiences: ExperienceItem[] = [
    {
      date: 'Oct, 2024',
      title: 'Software Engineer II',
      company: 'Red Hat',
      location: 'Bengaluru, IND',
    },
    {
      date: 'July, 2022',
      title: 'Software Engineer I',
      company: 'Red Hat',
      location: 'Bengaluru, IND',
    },
    {
      date: 'Jan, 2022',
      title: 'Software Engineering Intern',
      company: 'Red Hat',
      location: 'Bengaluru, IND',
    },
    {
      date: 'July, 2021',
      title: 'DevOps Trainee',
      company: 'HighRadius',
      location: 'Hyderabad, IND',
    },
  ];

  // Define education
  const education: EducationItem[] = [
    {
      date: 'Dec, 2025',
      degree: 'M.Tech in Software Engineering',
      institution: 'BITS Pilani',
      location: 'Pilani, IND',
    },
    {
      date: 'May, 2022',
      degree: 'B.Tech in Computer Engineering',
      institution: 'KIIT University',
      location: 'Bhubaneswar, IND',
    },
  ];

  const technologies = [
    'ReactJS',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Golang',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Kubernetes',
    'OpenShift',
    'Kubernetes Operators',
    'Docker',
    'Backstage',
    'MongoDB',
    'PostgreSQL',
    'RabbitMQ',
    'Git',
    'Jupyter Notebook',
    'HTML',
    'CSS',
    'JavaScript',
    'RAG',
    'LangChain',
    'LlamaStack',
    'Generative AI',
  ];

  return (
    <>
      <section
        id='resume'
        className='lg:rounded-2xl'
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow:
            '0 15px 30px rgba(0, 0, 0, 0.30), 0 10px 10px rgba(0, 0, 0, 0.20)',
          transform: 'translateY(-10px)',
        }}
      >
        <div className='container sm:px-5 md:px-10 lg:px-14'>
          <div className='px-4 pt-12 md:px-0'>
            <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-44 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
              Resume
            </h2>
            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
          </div>
        </div>

        <div className='overflow-hidden pb-12 pt-4'>
          <div className='px-4 md:px-12 lg:px-12'>
            {/* Experience Section */}
            <div>
              <div className='mb-4 flex items-center space-x-2 px-4 lg:px-0'>
                <i className='fa-solid fa-briefcase text-3xl text-gray-700 dark:text-[#EDEDED]'></i>
                <h4 className='text-2xl font-medium dark:text-[#EDEDED]'>
                  Experience
                </h4>
              </div>
              <div className='grid grid-cols-1 gap-x-6 gap-y-6 px-8'>
                <div className='items-center'>
                  <div className='mb-6 space-y-2 rounded-lg py-4 pl-5 pr-3'>
                    {/* Vertical Timeline #1 */}
                    <div className='-my-6'>
                      {experiences.map((experience, index) => (
                        <div
                          key={index}
                          className='group relative py-6 pl-8 sm:pl-32'
                        >
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className='mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-slate-700 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]'>
                            <time className='left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold uppercase text-slate-900 sm:absolute sm:mb-0'>
                              {experience.date}
                            </time>
                            <div className='text-xl text-slate-900 dark:text-[#EDEDED]'>
                              {experience.title}
                            </div>
                          </div>
                          {/* Content */}
                          <div className='text-[#374151] dark:text-[#A6A6A6]'>
                            {experience.company}, {experience.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className='mb-4 mt-8 flex items-center space-x-2 px-4 lg:px-0'>
                <i className='fa-solid fa-graduation-cap text-3xl text-gray-700 dark:text-[#EDEDED]'></i>
                <h4 className='text-2xl font-medium dark:text-[#EDEDED]'>
                  Education
                </h4>
              </div>
              <div className='grid grid-cols-1 gap-x-6 gap-y-6 px-8'>
                <div className='items-center'>
                  <div className='mb-6 space-y-2 rounded-lg py-4 pl-5 pr-3'>
                    {/* Vertical Timeline */}
                    <div className='-my-6'>
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className='group relative py-6 pl-8 sm:pl-32'
                        >
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className='mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-slate-700 group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]'>
                            <time className='left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold uppercase text-slate-900 sm:absolute sm:mb-0'>
                              {edu.date}
                            </time>
                            <div className='text-xl text-slate-900 dark:text-[#EDEDED]'>
                              {edu.degree}
                            </div>
                          </div>
                          {/* Content */}
                          <div className='text-[#374151] dark:text-[#A6A6A6]'>
                            {edu.institution}, {edu.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div>
              <div className='mb-4 mt-8 flex items-center space-x-2 px-4 lg:px-0'>
                <i className='fa-solid fa-laptop-code text-3xl text-slate-900 dark:text-[#EDEDED]'></i>
                <h4 className='text-2xl font-medium dark:text-[#EDEDED]'>
                  Technology Stack
                </h4>
              </div>
              <div className='grid grid-cols-1 gap-x-6 gap-y-6 px-8'>
                <div className='items-center'>
                  <div className='mb-6 flex flex-wrap gap-2 rounded-lg py-4 pl-5 pr-3'>
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='m-1 rounded-md bg-[#161616] px-4 py-1 text-[#EDEDED] dark:bg-[#EDEDED] dark:text-[#161616]'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
