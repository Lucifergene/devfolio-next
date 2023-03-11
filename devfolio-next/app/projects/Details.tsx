import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export const Details = (props: any) => {
  const { open, setOpen, project } = props;
  return (
    <>
      {" "}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-8 py-12 text-left shadow-xl transform transition-all sm:my-48 sm:align-middle sm:max-w-4xl sm:w-full lg:px-12 dark:bg-black">
                <div>
                  <div className="overflow-y-scroll max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      {project.title}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 px-4 lg:px-12">
                      <div className="space-y-2 mb-8 lg:mb-0">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-tags sm:text-lg sm:block mr-2 md:text-xl"></i>
                          Tags :
                        </p>
                        <div className="lg:px-6">
                          {project.tags.map((tag: string) => (
                            <span className="dark:bg-[#1D1D1D] inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-500 text-white mx-1 my-1">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg pt-2">
                          <i className="fa-brands fa-github text-lg mr-2 sm:block"></i>
                          Github : &nbsp;
                          <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                            <Link href={project.githubURL} target="_blank">
                              Click here &nbsp;
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </Link>
                          </span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <img
                          className="w-full h-auto object-cover rounded-xl "
                          src={project.imageUrl}
                          alt="portfolio image"
                        />
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-medium text-sm sm:text-sm text-justify px-4">
                      {project.bio}
                    </p>
                    <div className="pr-3"></div>
                  </div>
                  <div
                    onClick={() => setOpen(false)}
                    className="close bg-close-light dark:bg-close-dark"
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
