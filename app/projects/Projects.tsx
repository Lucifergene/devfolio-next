'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Details } from './Details';
import { Tile } from './Tile';

const projects = [
  {
    title: 'COVID-Predictioned',
    type: 'Web',
    imageUrl: '../../../assets/images/blog_images/covid-web.webp',
    bio: 'The project is a Computer-Aided Diagnostic System which is used to predict whether a person has been infected with COVID-19. Currently, the reference project does the only classification between COVID and non-COVID X-Rays using Modified DenseNet architectures. This project involves a Web Application, REST API, Dockerhub Container and automated pipeline to deploy the COVID Prediction model based on Chest Radiological Images. Containerized Deployment ensures platform independence during deployment.',
    githubURL: 'https://github.com/Lucifergene/covid-prediction-classifier',
    tags: [
      'Python',
      'Docker',
      'Flask',
      'Tensorflow',
      'Heroku',
      'DockerHub',
      'GitHub Actions',
    ],
  },
  {
    title: 'BlogVista',
    type: 'Web',
    imageUrl: '../../../assets/images/blog_images/blogvista.webp',
    bio: 'A Blogging Application built using NodeJS, ExpressJS, MongoDB, EJS, Bootstrap, HTML, CSS, JavaScript, and deployed on Heroku. The application is a full-stack application with a RESTful API. The application is a blogging platform where users can create, read, update, and delete their blogs. The application also has a feature to comment on the blogs. Users can register and login to the application using their email and password. The application also has a feature to reset the password using the email. The application is also containerized using Docker and deployed on DockerHub.',
    githubURL: 'https://github.com/Lucifergene/blogvista',
    tags: [
      'NodeJS',
      'MongoDB',
      'Bootstrap',
      'Heroku',
      'Docker',
      'DockerHub',
      'GitHub Actions',
    ],
  },
];

export const Projects = () => {
  const [openProjectOne, setOpenProjectOne] = useState(false);
  const [openProjectTwo, setOpenProjectTwo] = useState(false);

  return (
    <>
      <section id='projects'>
        <div className='bg-white dark:bg-[#111111] lg:rounded-2xl'>
          <div className='container sm:px-5 md:px-10 lg:px-14'>
            <div className='px-4 pt-12 md:px-0'>
              <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-44 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
                Projects
              </h2>
              <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
            </div>
          </div>

          <section
            id='portfolio'
            className='bg-white pb-8 dark:bg-[#111111] lg:rounded-2xl'
          >
            <div className='container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]'>
              <p className='text-lg text-gray-500'>
                Find all the projects contributed to and projects currently
                working on{' '}
                <Link
                  href='https://github.com/Lucifergene'
                  className='text-indigo-800'
                  target={'_blank'}
                >
                  Github
                </Link>
              </p>
              <div className='mt-8'>
                <div className='mb-4 flex items-center space-x-2 px-4 lg:px-0'>
                  <i className='fa-solid fa-globe text-4xl text-[#F95054]'></i>
                  <h4 className='text-5xl font-medium dark:text-white'>
                    {' '}
                    Web Applications{' '}
                  </h4>
                </div>

                <div className='masonry sm:masonry-sm md:masonry-md'>
                  {/* <!-- tile --> */}
                  <Tile
                    open={openProjectOne}
                    setOpen={setOpenProjectOne}
                    project={projects[0]}
                  />
                  <Tile
                    open={openProjectTwo}
                    setOpen={setOpenProjectTwo}
                    project={projects[1]}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Modal */}
          <Details
            open={openProjectOne}
            setOpen={setOpenProjectOne}
            project={projects[0]}
          />
          <Details
            open={openProjectTwo}
            setOpen={setOpenProjectTwo}
            project={projects[1]}
          />
        </div>
      </section>
    </>
  );
};
