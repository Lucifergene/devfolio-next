import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  tags: string[];
  githubURL: string;
  imageUrl: string;
  bio: string;
}

interface DetailsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: Project;
}

export const Details = (props: DetailsProps) => {
  const { open, setOpen, project } = props;
  return (
    <>
      {' '}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={setOpen}
        >
          <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:h-screen sm:align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className='relative inline-block transform rounded-lg bg-white px-8 py-12 text-left align-bottom shadow-xl transition-all dark:bg-black sm:my-48 sm:w-full sm:max-w-4xl sm:align-middle lg:px-12'>
                <div>
                  <div className='dark:scrollbarDark scrollbarLight max-h-[60vh] overflow-y-scroll lg:max-h-[80vh]'>
                    <h2 className='font-robotoSlab text-center text-5xl font-bold text-[#ef4060] dark:hover:text-[#FA5252]'>
                      {project.title}
                    </h2>
                    <div className='my-6 grid grid-cols-1 px-4 lg:grid-cols-2 lg:px-12'>
                      <div className='mb-8 space-y-2 lg:mb-0'>
                        <p className='flex items-center text-[15px] dark:text-white sm:text-lg'>
                          <i className='fa-solid fa-tags mr-2 sm:block sm:text-lg md:text-xl'></i>
                          Tags :
                        </p>
                        <div className='lg:px-6'>
                          {project.tags.map((tag: string, index: number) => (
                            <span
                              key={index}
                              className='mx-1 my-1 inline-flex items-center rounded-full bg-red-500 px-3 py-0.5 text-sm font-medium text-white dark:bg-[#1D1D1D]'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className='flex items-center pt-2 text-[15px] dark:text-white sm:text-lg'>
                          <i className='fa-brands fa-github mr-2 text-lg sm:block'></i>
                          Github : &nbsp;
                          <span className='font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]'>
                            <Link href={project.githubURL} target='_blank'>
                              Click here &nbsp;
                              <i className='fa-solid fa-arrow-up-right-from-square'></i>
                            </Link>
                          </span>
                        </p>
                      </div>
                      <div className='space-y-2'>
                        <Image
                          className='h-auto w-full rounded-xl object-cover'
                          src={project.imageUrl}
                          alt='portfolio image'
                          width={500}
                          height={300}
                          priority
                        />
                      </div>
                    </div>

                    <p className='text-2line px-4 text-justify text-sm font-medium dark:text-white sm:text-sm'>
                      {project.bio}
                    </p>
                    <div className='pr-3'></div>
                  </div>
                  <div
                    onClick={() => setOpen(false)}
                    className='close bg-close-light dark:bg-close-dark'
                  >
                    Close
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
