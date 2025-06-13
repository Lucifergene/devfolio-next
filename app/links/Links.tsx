'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  DEV_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  HACKERRANK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  PORTFOLIO_URL,
  SPEAKERDECK_URL,
  X_URL,
} from '../../const';
import { hideCard } from '../utils';

const Links: React.FC = () => {
  useEffect(() => {
    hideCard();
  }, []);

  const socialLinks = [
    { icon: 'fas fa-globe', name: 'Portfolio', url: PORTFOLIO_URL },
    { icon: 'fab fa-github', name: 'GitHub', url: GITHUB_URL },
    { icon: 'fab fa-linkedin', name: 'LinkedIn', url: LINKEDIN_URL },
    { icon: 'fab fa-x-twitter', name: '.com', url: X_URL, bold: true },
    { icon: 'fab fa-medium', name: 'Medium', url: MEDIUM_URL },
    { icon: 'fab fa-dev', name: 'Dev.to', url: DEV_URL },
    {
      icon: 'fas fa-person-chalkboard',
      name: 'Speaker Deck',
      url: SPEAKERDECK_URL,
    },
    { icon: 'fab fa-hackerrank', name: 'Hackerrank', url: HACKERRANK_URL },
    { icon: 'fab fa-instagram', name: 'Instagram', url: INSTAGRAM_URL },
    { icon: 'fab fa-facebook', name: 'Facebook', url: FACEBOOK_URL },
  ];

  return (
    <>
      <section id='links'>
        <div
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
              <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-64 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
                Social Links
              </h2>
              <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
            </div>
          </div>

          <div className='overflow-hidden pb-12 lg:px-8'>
            <div className='px-8 pb-4 text-center'>
              <p className='text-lg text-[#232933] dark:text-[#A6A6A6]'>
                Feel free to connect with me on any of these platforms.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-2'>
              {socialLinks.map((link, index) => (
                <Link href={link.url} target='_blank' key={index}>
                  <div className='items-center space-x-2 font-geist'>
                    <div className='mx-auto mt-4 flex w-80 items-center justify-center rounded-full bg-[#161616] px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#444444] dark:bg-[#ededed] dark:text-[#161616] dark:hover:bg-[#eaeaeac2]'>
                      <i className={`${link.icon} mr-2`}></i>
                      {link.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;
