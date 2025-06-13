'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { hideCard } from '../utils';
import { fetchBlogs } from './blog-utils';
import { IPostItemProps } from '../../typings';
import { HASHNODE_URL } from '../../const';
import { BlogSkeleton } from './BlogSkeleton';

export const NUMBER_OF_BLOGS = 5;

const Blogs: React.FC = () => {
  const [posts, setPosts] = React.useState<IPostItemProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const allPosts: IPostItemProps[] = await fetchBlogs(NUMBER_OF_BLOGS);
        setPosts(allPosts.slice(0, NUMBER_OF_BLOGS));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    hideCard();
  }, []);

  return (
    <>
      <section id='blogs'>
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
              <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-40 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
                Blogs
              </h2>
              <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
            </div>
          </div>

          <div className='overflow-hidden px-8 pb-16 sm:px-6 lg:px-16 lg:pb-12'>
            <div className='relative mx-auto'>
              <div>
                <p className='text-lg text-[#232933] dark:text-[#A6A6A6]'>
                  Some of my Articles sorted by their date of creation. You can
                  view all my articles on Hashnode from{' '}
                  <Link
                    href={HASHNODE_URL}
                    className='text-[#0072F5] dark:text-[#52A8FF]'
                    target={'_blank'}
                  >
                    here
                  </Link>
                </p>
              </div>
              {isLoading ? (
                <BlogSkeleton />
              ) : (
                <div className='mt-6 pt-10'>
                  {posts.map((post: IPostItemProps) => {
                    const dateObj = new Date(post.publishedAt);
                    const date = dateObj.getDate();
                    const month = dateObj.toLocaleString('default', {
                      month: 'long',
                    });
                    const dateAdded = date + ' ' + month;
                    return (
                      <div key={post.title} className='mb-6'>
                        <p className='text-sm text-[#232933] dark:text-[#A6A6A6]'>
                          <time dateTime={post.publishedAt}>{dateAdded}</time>
                        </p>
                        <Link
                          href={'https://www.hashnode.com/post/' + post.slug}
                          className='mt-2 block'
                          target={'_blank'}
                        >
                          <p className='text-xl font-semibold text-gray-900 dark:text-[#EDEDED]'>
                            {post.title}
                          </p>
                          <p className='mt-3 text-base text-[#232933] dark:text-[#A6A6A6]'>
                            {post.brief}
                          </p>
                        </Link>
                        <div className='mt-3'>
                          <Link
                            href={'https://www.hashnode.com/post/' + post.slug}
                            className='text-base font-semibold text-[#0072F5] hover:text-blue-700 dark:text-[#52A8FF] dark:hover:text-blue-500'
                            target={'_blank'}
                          >
                            Read article
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
