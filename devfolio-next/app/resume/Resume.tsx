import React from "react";

export const Resume = () => {
  return (
    <>
      <div>
        {/* <!-- resume section start --> */}
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="py-12 px-4 md:px-0">
              {/* <!-- resume page title --> */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {/* <!-- eductation start --> */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
                    <h4 className="text-5xl dark:text-white font-medium">
                      {" "}
                      Education{" "}
                    </h4>
                  </div>
                  <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2021-2023
                    </span>
                    <h3 className="text-xl dark:text-white">
                      {" "}
                      Ph.D in Horriblensess{" "}
                    </h3>
                    <p className="dark:text-[#b7b7b7]">
                      {" "}
                      ABC University, Los Angeles, CA{" "}
                    </p>
                  </div>
                  <div className="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2019 - Present
                    </span>
                    <h3 className="text-xl dark:text-white">
                      {" "}
                      Sr. Software Tester{" "}
                    </h3>
                    <p className="dark:text-[#b7b7b7]">Google Inc.</p>
                  </div>
                  <div className="py-4 pl-5 bg-[#fff4f4] dark:bg-transparent pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2021
                    </span>
                    <h3 className="text-xl dark:text-white">Best Developer</h3>
                    <p className="dark:text-[#b7b7b7]">
                      {" "}
                      University Of Melbourne, NA{" "}
                    </p>
                  </div>
                </div>
                {/* <!-- eductation end --> */}

                {/* <!-- experiment start --> */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <i className="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
                    <h4 className="text-5xl dark:text-white font-medium">
                      {" "}
                      Experience{" "}
                    </h4>
                  </div>
                  <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2017-2021
                    </span>
                    <h3 className="text-xl dark:text-white">
                      {" "}
                      Computer Science{" "}
                    </h3>
                    <p className="dark:text-[#b7b7b7]">
                      {" "}
                      Imperialize Technical Institute{" "}
                    </p>
                  </div>
                  <div className="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2015-2017
                    </span>
                    <h3 className="text-xl dark:text-white">
                      {" "}
                      Cr. Web Developer{" "}
                    </h3>
                    <p className="dark:text-[#b7b7b7]">Drz-themes ltd.</p>
                  </div>
                  <div className="py-4 bg-[#eef5fa] dark:bg-transparent pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2">
                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                      2008
                    </span>
                    <h3 className="text-xl dark:text-white">Best Writter</h3>
                    <p className="dark:text-[#b7b7b7]">
                      {" "}
                      Online Typodev Soluation Ltd.{" "}
                    </p>
                  </div>
                </div>
                {/* <!-- experiment start --> */}
              </div>
            </div>
          </div>

          {/* <!-- working section start --> */}
          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1">
                <h4 className="text-5xl dark:text-white font-medium mb-6">
                  {" "}
                  Working Skills{" "}
                </h4>
                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                      Web Design
                    </span>
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                      65%
                    </span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                    <div
                      className="bg-[#FF6464] h-1 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                      Mobile App
                    </span>
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                    <div
                      className="bg-[#9272d4] h-1 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                      Illustrator
                    </span>
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6">
                      75%
                    </span>
                  </div>
                  <div className="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                    <div
                      className="bg-[#5185d4] h-1 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className=" font-semibold text-[#526377] dark:text-[#A6A6A6]">
                      Photoshope
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
                  Knowledges{" "}
                </h4>
                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  <button className="resume-btn">Digital Design</button>
                  <button className="resume-btn">Marketing</button>
                  <button className="resume-btn">Social Media</button>
                  <button className="resume-btn">Print</button>
                  <button className="resume-btn">Time Management</button>
                  <button className="resume-btn">Flexibility</button>
                  <button className="resume-btn">Print</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- working section end --> */}
        </div>
        {/* <!-- resume section start --> */}
      </div>
    </>
  );
};
