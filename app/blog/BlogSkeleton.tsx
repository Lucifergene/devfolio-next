import React from 'react';
import { NUMBER_OF_BLOGS } from './Blogs';

export const BlogSkeleton = () => {
  return (
    <>
      <section id='loading' className='mt-8'>
        <div className='h-[44rem] lg:rounded-2xl'>
          {Array.from({ length: NUMBER_OF_BLOGS - 1 }, (_, i) => (
            <div className='rounded-md pt-8' key={i}>
              <div className='flex animate-pulse space-x-4'>
                <div className='flex-1 space-y-4 py-1'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-1 h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-400 dark:bg-slate-200'></div>

                  <div className='h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-1 h-2 rounded bg-slate-400 dark:bg-slate-200'></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
