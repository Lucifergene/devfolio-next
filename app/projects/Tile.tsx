import React from "react";
import Image from "next/image";
import { ProjectProps } from "../../typings";

interface TileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: ProjectProps;
}

export const Tile = (props: TileProps) => {
  const { open, setOpen, project } = props;
  return (
    <>
      <div className="break-inside pb-4">
        <div className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
          <div className="overflow-hidden rounded-lg">
            <div onClick={() => setOpen(!open)}>
              <Image
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                src={project.imageUrl}
                alt={`${project.title} portfolio image`}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
            {project.type}
          </span>
          <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
            <div onClick={() => setOpen(!open)}>{project.title}</div>
          </h2>
        </div>
      </div>
    </>
  );
};
