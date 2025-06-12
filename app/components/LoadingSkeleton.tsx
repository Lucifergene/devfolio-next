import React from 'react';

export const LoadingSkeleton = () => {
  return (
    <>
      <section id='loading'>
        <div className='h-[44rem] bg-white dark:bg-[#111111] lg:rounded-2xl'>
          <div className='mx-auto w-full rounded-md p-8 md:p-16'>
            <div className='flex animate-pulse space-x-4'>
              <div className='h-10 w-10 rounded-full bg-slate-200'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 rounded bg-slate-200'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto w-full rounded-md p-8 md:p-16'>
            <div className='flex animate-pulse space-x-4'>
              <div className='h-10 w-10 rounded-full bg-slate-200'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 rounded bg-slate-200'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto w-full rounded-md p-8 md:p-16'>
            <div className='flex animate-pulse space-x-4'>
              <div className='h-10 w-10 rounded-full bg-slate-200'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 rounded bg-slate-200'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto w-full rounded-md p-8 lg:hidden lg:p-16'>
            <div className='flex animate-pulse space-x-4'>
              <div className='h-10 w-10 rounded-full bg-slate-200'></div>
              <div className='flex-1 space-y-6 py-1'>
                <div className='h-2 rounded bg-slate-200'></div>
                <div className='space-y-3'>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
                  </div>
                  <div className='h-2 rounded bg-slate-200'></div>
                  <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 h-2 rounded bg-slate-200'></div>
                    <div className='col-span-1 h-2 rounded bg-slate-200'></div>
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
