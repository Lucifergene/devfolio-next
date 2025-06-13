import React from 'react';
import Link from 'next/link';
import {
  EMAIL_ID,
  GITHUB_URL,
  HASHNODE_URL,
  LINKEDIN_URL,
  RESUME_URL,
  X_URL,
} from '../../const';

const Card = () => {
  return (
    <>
      <div
        id='card'
        className='top-44 col-span-12 lg:sticky lg:col-span-4 lg:block lg:h-screen'
      >
        <div
          className='relative mx-auto mb-6 mt-[180px] w-full rounded-[20px] bg-white px-6 text-center dark:bg-[#111111] md:mt-[220px] lg:mb-0 lg:mt-0'
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow:
              '0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-10px)',
          }}
        >
          {/* <!-- profile image --> */}
          <div
            className='bg-profilePic dark:bg-profilePic-dark absolute left-[50%] mx-auto -mt-[140px] h-[240px] w-[240px] -translate-x-[50%] transform rounded-[20px] drop-shadow-2xl'
            style={{
              backdropFilter: 'blur(50px)', // Blurs the content behind this div
              WebkitBackdropFilter: 'blur(50px)', // Ensures blur effect works on Safari
              border: '8px solid rgba(255, 255, 255, 0.70)', // Adds the light, semi-transparent border
            }}
          ></div>

          <div className='pt-[100px] pb-8'>
            <h1 className='mt-6 mb-1 bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text text-[26px] font-semibold text-transparent dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
              Avik Kundu
            </h1>
            <h3 className='mb-4 inline-block rounded-lg px-5 py-1.5 text-[#374151] dark:text-[#A6A6A6]'>
              Software Engineer
              <br />
              Generative AI Researcher
            </h3>
            <div className='flex justify-center space-x-3'>
              {/* <!-- linkedin icon and link --> */}
              <Link
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='socialbtn text-[#0072b1]'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </span>
              </Link>
              {/* <!-- x icon and link --> */}
              <Link href={X_URL} target='_blank' rel='noopener noreferrer'>
                <span className='socialbtn text-[#1C9CEA]'>
                  <i className='fa-brands fa-x-twitter'></i>
                </span>
              </Link>
              {/* <!-- github icon and link --> */}
              <Link href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
                <span className='socialbtn text-[#383c42] dark:text-[#A6A6A6]'>
                  <i className='fa-brands fa-github'></i>
                </span>
              </Link>

              {/* <!-- hashnode icon and link --> */}
              <Link
                href={HASHNODE_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='socialbtn text-[#325ccf]'>
                  <i className='fa-brands fa-hashnode'></i>
                </span>
              </Link>
            </div>

            {/* <!-- personal info start --> */}
            <div className='mt-7 rounded-2xl p-7'>
              <div className='flex border-b border-[#E3E3E3] pb-2.5 dark:border-[#3D3A3A]'>
                <span className='socialbtn bg-white text-[#c92525] shadow-md dark:bg-[#212525]'>
                  <i className='fa-brands fa-redhat'></i>
                </span>
                <div className='ml-2.5 text-left'>
                  <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                    Company
                  </p>
                  <p className='text-[#232933] dark:text-white'>Red Hat</p>
                </div>
              </div>

              <div className='flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
                <span className='socialbtn bg-white text-[#FD7590] shadow-md dark:bg-[#212525]'>
                  <i className='fa-solid fa-location-dot'></i>
                </span>
                <div className='ml-2.5 text-left'>
                  <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                    Location
                  </p>
                  <p className='text-[#232933] dark:text-white'>
                    Bangalore, India
                  </p>
                </div>
              </div>

              <div className='flex border-b border-[#E3E3E3] py-2.5 dark:border-[#3D3A3A]'>
                <span className='socialbtn bg-white text-[#6AB5B9] shadow-md dark:bg-[#212525]'>
                  <i className='fa-solid fa-envelope-open-text'></i>
                </span>
                <div className='ml-2.5 text-left' title={EMAIL_ID}>
                  <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                    Email
                  </p>
                  <p className='truncate text-[#232933] dark:text-white md:w-36 xl:w-auto'>
                    {EMAIL_ID}
                  </p>
                </div>
              </div>

              <div className='flex py-2.5'>
                <span className='socialbtn bg-white text-[#C17CEB] shadow-md dark:bg-[#212525]'>
                  <i className='fa-solid fa-house'></i>
                </span>
                <div className='ml-2.5 text-left'>
                  <p className='text-xs text-[#44566C] dark:text-[#A6A6A6]'>
                    Devfolio
                  </p>
                  <p className='text-[#232933] dark:text-white'>
                    www.avikkundu.com
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- personal info end --> */}

            {/* <!-- dowanload button --> */}
            <Link href={RESUME_URL}>
              <button className='mt-4 flex w-full items-center justify-center rounded-full bg-[#161616] px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#444444] dark:bg-[#ededed] dark:text-[#161616] dark:hover:bg-[#eaeaeac2]'>
                <i className='fa-solid fa-arrow-down mr-1'></i>
                Download Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
