import React from "react";

export const Resume = () => {
  return (
    <>
      <div>
        {/* <!-- resume section start --> */}
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 pb-4 px-4 md:px-0">
              {/* <!-- resume page title --> */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="mt-[30px]">
                {/* <!-- experience --> */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
                    <h4 className="text-5xl dark:text-white font-medium">
                      {" "}
                      Experience{" "}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px] px-8">
                    <div className="items-center space-x-2">
                      <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                          2022-Present
                        </span>
                        <h3 className="text-xl dark:text-white">
                          {" "}
                          Software Engineer{" "}
                        </h3>
                        <p className="dark:text-[#b7b7b7]">
                          {" "}
                          Red Hat, Bengaluru, IND{" "}
                        </p>
                      </div>
                    </div>
                    <div className="items-center space-x-2">
                      <div className="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
                        <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                          2021-2022
                        </span>
                        <h3 className="text-xl dark:text-white">
                          {" "}
                          DevOps Engineer Intern{" "}
                        </h3>
                        <p className="dark:text-[#b7b7b7]">
                          {" "}
                          HighRadius, Hyderabad, IND
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- experience --> */}

                {/* <!-- education - --> */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 mt-8">
                    <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
                    <h4 className="text-5xl dark:text-white font-medium">
                      {" "}
                      Education{" "}
                    </h4>
                  </div>
                  <div className="px-8">
                    <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                      <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                        2018-2022
                      </span>
                      <h3 className="text-xl dark:text-white">
                        {" "}
                        B.Tech in Computer Engineering{" "}
                      </h3>
                      <p className="dark:text-[#b7b7b7]">
                        {" "}
                        KIIT University, Bhubaneswar, IND{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- education --> */}
              </div>
            </div>
          </div>

          {/* <!-- working section start --> */}
          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-8 px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
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
                      className="bg-[#ca56f2] h-1 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-8">
                  {" "}
                  Technology Stack{" "}
                </h4>
                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  <button className="resume-btn">ReactJS</button>
                  <button className="resume-btn">TypeScript</button>
                  <button className="resume-btn">Golang</button>
                  <button className="resume-btn">NodeJS</button>
                  <button className="resume-btn">Kubernetes</button>
                  <button className="resume-btn">CI/CD</button>
                  <button className="resume-btn">O11y</button>
                  <button className="resume-btn">AWS</button>
                  <button className="resume-btn">Azure</button>
                  <button className="resume-btn">Openshift</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          
          {/* <!-- working section end --> */}
        </div>
        {/* <!-- resume section start --> */}
      </div>
    </>
  );
};
