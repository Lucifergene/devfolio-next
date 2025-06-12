'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import LoaderSVG from './LoaderSVG';

interface ClientRedirectsProps {
  redirects: string;
}

const ClientRedirects: React.FC<ClientRedirectsProps> = ({ redirects }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    import('../utils').then(({ hideCard }) => hideCard());
  }, []);

  const redirectLink = (dir: string) => {
    switch (dir) {
      case '%40linkedin':
        return 'https://linkedin.com';
      case '%40github':
        return 'https://github.com';
      case '%40twitter':
        return 'https://twitter.com';
      case '%40x':
        return 'https://x.com';
      case '%40medium':
        return 'https://medium.com';
      case '%40dev':
        return 'https://dev.to';
      case '%40portfolio':
        return 'https://portfolio.com';
      case '%40instagram':
        return 'https://instagram.com';
      case '%40facebook':
        return 'https://facebook.com';
      case '%40speakerdeck':
        return 'https://speakerdeck.com';
      case '%40hackerrank':
        return 'https://hackerrank.com';
      case '%40hashnode':
        return 'https://hashnode.com';
      default:
        return 'NOT_FOUND';
    }
  };

  useEffect(() => {
    if (redirectLink(redirects) !== 'NOT_FOUND') {
      setUrl(redirectLink(redirects));
    }
  }, [redirects]);

  if (url) {
    redirect(url);
  }

  return (
    <section id='redirect'>
      <div className='h-[632px] bg-white dark:bg-[#111111] lg:rounded-2xl'>
        {redirectLink(redirects) !== 'NOT_FOUND' ? (
          <div className='text-center'>
            <p className='pt-40 text-lg font-semibold leading-6 text-gray-700 dark:text-white'>
              Redirecting to: &nbsp;
              <Link href={redirectLink(redirects)}>
                {redirectLink(redirects)}
              </Link>
            </p>
            <LoaderSVG />
          </div>
        ) : (
          <div className='flex h-[40vh] flex-col items-center justify-center text-center dark:text-white'>
            <div>
              <h1 className='next-error-h1 mr-[20px] inline-block border-r-2 border-black pr-[24px] align-top text-2xl font-medium leading-[49px] dark:border-white'>
                404
              </h1>
              <div className='inline-block text-left'>
                <h2 className='m-0 text-base font-normal leading-[49px]'>
                  This alias does not exist.
                  <br />
                </h2>
              </div>
              <p className='mt-4'>
                Click{' '}
                <Link
                  href='/links'
                  className='text-blue-800 dark:text-blue-500'
                >
                  here
                </Link>{' '}
                to view all my social links.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientRedirects;
