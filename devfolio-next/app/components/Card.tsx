import React from "react";

const Card = () => {
  return (
    <>
      <div className="col-span-12 md:col-span-4 lg:block lg:sticky h-screen top-44">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          {/* <!-- profile image --> */}
          <img
            src="./assets/images/about/avatar.jpg"
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
            alt="about avatar"
          />

          <div className="pt-[100px] pb-8">
            <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
              Avik Kundu
            </h1>
            <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
              Software Engineer | Opensource Contributor
            </h3>
            <div className="flex justify-center space-x-3">
              {/* <!-- linkedin icon and link --> */}
              <a
                href="https://www.linkedin.com/in/avik-kundu-0b837715b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#0072b1]">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
              {/* <!-- twitter icon and link --> */}
              <a
                href="https://twitter.com/avik6028"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#1C9CEA]">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </a>
              {/* <!-- github icon and link --> */}
              <a
                href="https://github.com/Lucifergene/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#383c42]">
                  <i className="fa-brands fa-github"></i>
                </span>
              </a>

              {/* <!-- hashnode icon and link --> */}
              <a
                href="https://blog.avikkundu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    Email
                  </p>
                  <p className="dark:text-white">avikkundu8d@gmail.com</p>
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
            <a href="https://drive.google.com/file/d/11Ws3nFlWCiZYKAgwBoQIxKtQauh4jziJ/view?usp=sharing">
              <button className="dowanload-btn">
                <img
                  className="mr-3"
                  src="./assets/images/icons/dowanload.png"
                  alt="icon"
                />
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
