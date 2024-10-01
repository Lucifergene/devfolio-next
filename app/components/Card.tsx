import React from "react";
import {
  EMAIL_ID,
  GITHUB_URL,
  HASHNODE_URL,
  LINKEDIN_URL,
  RESUME_URL,
  TWITTER_URL,
} from "../../const";

const Card = () => {
  return (
    <>
      <div
        id="card"
        className="col-span-12 lg:col-span-4 lg:block lg:sticky lg:h-screen top-44"
      >
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          {/* <!-- profile image --> */}
          <div className="bg-profilePic dark:bg-profilePic-dark w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] "></div>

          <div className="pt-[100px] pb-8">
            <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
              Avik Kundu
            </h1>
            <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
              Software Engineer | Opensource Contributor
            </h3>
            <div className="flex justify-center space-x-3">
              {/* <!-- linkedin icon and link --> */}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#0072b1]">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
              {/* <!-- twitter icon and link --> */}
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#1C9CEA]">
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
              </a>
              {/* <!-- github icon and link --> */}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#383c42] dark:text-[#A6A6A6]">
                  <i className="fa-brands fa-github"></i>
                </span>
              </a>

              {/* <!-- hashnode icon and link --> */}
              <a href={HASHNODE_URL} target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#325ccf]">
                  <i className="fa-brands fa-hashnode"></i>
                </span>
              </a>
            </div>

            {/* <!-- personal info start --> */}
            <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#c92525] shadow-md">
                  <i className="fa-brands fa-redhat"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Company
                  </p>
                  <p className="dark:text-white">Red Hat</p>
                </div>
              </div>

              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Location
                  </p>
                  <p className="dark:text-white">Bangalore, India</p>
                </div>
              </div>

              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="text-left ml-2.5" title={EMAIL_ID}>
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Email
                  </p>
                  <p className="dark:text-white truncate md:w-36 xl:w-auto">
                    {EMAIL_ID}
                  </p>
                </div>
              </div>

              <div className="flex py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                  <i className="fa-solid fa-house"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Devfolio
                  </p>
                  <p className="dark:text-white">www.avikkundu.in</p>
                </div>
              </div>
            </div>
            {/* <!-- personal info end --> */}

            {/* <!-- dowanload button --> */}
            {/* <a href={RESUME_URL}>
              <button className="dowanload-btn">
                <img
                  className="mr-3"
                  src="./assets/images/icons/dowanload.webp"
                  alt="icon"
                />
                Download Resume
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
