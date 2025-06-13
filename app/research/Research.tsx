'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { AuthorProps, PostItemProps } from '../../typings';
import { posts } from './data';
import { hideCard } from '../utils';

export const Research: React.FC = () => {
  useEffect(() => {
    hideCard();
  }, []);
  return (
    <>
      <section id='research'>
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
              <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-72 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
                Publications
              </h2>
              <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
            </div>
          </div>

          <div className='px-8 pb-16 sm:px-6 lg:px-16 lg:pb-12'>
            <div className='relative mx-auto'>
              <div className='mt-6'>
                {posts.map((post: PostItemProps) => (
                  <div key={post.title} className='mb-8'>
                    <div className='inline-block'>
                      <span className='inline-flex items-center rounded-full bg-[#161616] px-3 py-0.5 text-sm font-medium text-[#EDEDED] dark:bg-[#EDEDED] dark:text-[#161616]'>
                        {post.category.name}
                      </span>
                    </div>
                    <Link
                      href={post.href}
                      className='mt-2 block'
                      target={'_blank'}
                    >
                      <p className='text-xl font-semibold text-gray-900 dark:text-[#EDEDED]'>
                        {post.title}
                      </p>
                      <p className='mt-3 text-base text-[#232933] dark:text-[#A6A6A6]'>
                        {post.description}
                      </p>
                    </Link>
                    <div className='grid lg:grid-cols-4 lg:gap-x-1 lg:gap-y-12'>
                      {post.authors.map((author: AuthorProps) => (
                        <div
                          key={author.name}
                          className='mt-6 flex items-center'
                        >
                          <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-900 dark:text-[#EDEDED]'>
                              {author.name}
                            </p>
                            <div className='flex space-x-1 text-sm text-gray-500'>
                              <span>{author.role}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
