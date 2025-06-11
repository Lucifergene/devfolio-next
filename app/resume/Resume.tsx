"use client";
import React, { useEffect } from "react";
import { hideCard } from "../utils";

export const Resume: React.FC = () => {
  useEffect(() => {
    hideCard();
  }, []);

  return (
    <>
      <section id="resume">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 px-4 md:px-0">
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
            </div>
          </div>

          <div className="pb-12 pt-4 overflow-hidden">
            <div className="px-4 md:px-12 lg:px-12">
              {/* <!-- experience --> */}
              <div>
                <div className="flex items-center space-x-2 mb-4 px-4 lg:px-0">
                  <i className="fa-solid text-3xl text-blue-500 fa-briefcase"></i>
                  <h4 className="text-2xl dark:text-white font-medium">
                    {" "}
                    Experience{" "}
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-8">
                  <div className="items-center">
                    <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                      {/* Vertical Timeline #1 */}
                      <div className="-my-6">
                        {/* Item #1 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              Oct, 2024
                            </time>
                            <div className="text-xl text-slate-900 dark:text-white">
                              Software Engineer II
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            Red Hat, Bengaluru, IND
                          </div>
                        </div>

                        {/* Item #2 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              July, 2022
                            </time>
                            <div className="text-xl text-slate-900 dark:text-white">
                              Software Engineer I
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            Red Hat, Bengaluru, IND
                          </div>
                        </div>
                        {/* Item #3 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              Jan, 2022
                            </time>
                            <div className="text-xl text-slate-900 dark:text-white">
                              Software Engineering Intern
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            Red Hat, Bengaluru, IND
                          </div>
                        </div>

                        {/* Item #4 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              July, 2021
                            </time>
                            <div className="text-xl text-slate-900 dark:text-white">
                              DevOps Trainee
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            HighRadius, Hyderabad, IND
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- experience --> */}

              {/* <!-- education - --> */}
              <div>
                <div className="flex items-center space-x-2 mb-4 mt-8 px-4 lg:px-0">
                  <i className="fa-solid text-3xl text-blue-500 fa-graduation-cap"></i>
                  <h4 className="text-2xl dark:text-white font-medium">
                    {" "}
                    Education{" "}
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-8">
                  <div className="items-center">
                    <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                      {/* Vertical Timeline */}
                      <div className="-my-6">
                        {/* Item #1 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              Dec, 2025
                            </time>
                            <div className="text-xl  text-slate-900 dark:text-white">
                              M.Tech in Software Engineering
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            BITS Pilani, Pilani, IND
                          </div>
                        </div>

                        {/* Item #2 */}
                        <div className="relative pl-8 sm:pl-32 py-6 group">
                          {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-500 bg-blue-100 rounded-full">
                              May, 2022
                            </time>
                            <div className="text-xl  text-slate-900 dark:text-white">
                              B.Tech in Computer Engineering
                            </div>
                          </div>
                          {/* Content */}
                          <div className="text-slate-500">
                            KIIT University, Bhubaneswar, IND
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- education --> */}
            </div>
            {/* <!-- working section start --> */}
            <div className="container py-8 px-12 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <h4 className="text-2xl dark:text-white font-medium mb-6">
                    {" "}
                    Working Skills{" "}
                  </h4>
                  <div className="mt-9">
                    <div className="flex justify-between mb-1">
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                        Frontend Development
                      </span>
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                      <div
                        className="bg-[#FF6464] h-1 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex justify-between mb-1">
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                        Backend Development
                      </span>
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                        70%
                      </span>
                    </div>
                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                      <div
                        className="bg-[#9272d4] h-1 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex justify-between mb-1">
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                        DevOps Engineering
                      </span>
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                        80%
                      </span>
                    </div>
                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                      <div
                        className="bg-[#5185d4] h-1 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex justify-between mb-1">
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                        Cloud Computing
                      </span>
                      <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                      <div
                        className="bg-teal-500 h-1 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <h4 className="text-2xl dark:text-white font-medium mb-8">
                    {" "}
                    Technology Stack{" "}
                  </h4>
                  <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                    <div className="mb-1">
                      <button className="resume-btn bg-[#FF6464] text-white mr-2">
                        ReactJS
                      </button>
                      <button className="resume-btn bg-[#FF6464] text-white">
                        TypeScript
                      </button>
                    </div>

                    <div className="mb-1">
                      <button className="resume-btn bg-[#9272d4] text-white mr-2">
                        Golang
                      </button>
                      <button className="resume-btn bg-[#9272d4] text-white">
                        NodeJS
                      </button>
                    </div>

                    <div className="mb-1">
                      <button className="resume-btn bg-[#5185d4] text-white mr-2">
                        Kubernetes
                      </button>
                      <button className="resume-btn bg-[#5185d4] text-white mr-2">
                        CI/CD
                      </button>
                      <button className="resume-btn bg-[#5185d4] text-white">
                        O11y
                      </button>
                    </div>

                    <div>
                      <button className="resume-btn bg-teal-500 text-white mr-2">
                        AWS
                      </button>
                      <button className="resume-btn bg-teal-500 text-white mr-2">
                        Azure
                      </button>
                      <button className="resume-btn bg-teal-500 text-white">
                        Openshift
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- working section end --> */}
          </div>
        </div>
      </section>
    </>
  );
};
