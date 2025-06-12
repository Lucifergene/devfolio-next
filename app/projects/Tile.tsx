import React from 'react';
import Image from 'next/image';
import { ProjectProps } from '../../typings';

interface TileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: ProjectProps;
}

export const Tile = (props: TileProps) => {
  const { open, setOpen, project } = props;
  return (
    <>
      <div className='break-inside pb-4'>
        <div className='rounded-lg border-[#212425] bg-[#fff0f0] p-6 dark:border-[2px] dark:bg-transparent'>
          <div className='overflow-hidden rounded-lg'>
            <div onClick={() => setOpen(!open)}>
              <Image
                className='h-auto w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110'
                src={project.imageUrl}
                alt={`${project.title} portfolio image`}
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <span className='text-gray-lite block pt-5 text-[14px] font-normal dark:text-[#A6A6A6]'>
            {project.type}
          </span>
          <h2 className='mt-2 cursor-pointer text-xl font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]'>
            <div onClick={() => setOpen(!open)}>{project.title}</div>
          </h2>
        </div>
      </div>
    </>
  );
};
