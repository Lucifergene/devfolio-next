import React from 'react'

const About = () => {
  return (
    <>
     <section className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
              <div className="pb-12">
                <h2
                  className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 pt-12"
                >
                  About Me
                </h2>
                <div className="mt-[30px] ">
                  <p
                    className="text-gray-700 dark:text-slate-500 leading-7 font-semibold"
                  >
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs.
                  </p>
                  <p
                    className="text-gray-700 dark:text-slate-500 leading-7 font-semibold mt-3"
                  >
                    My aim is to bring across your message and identity in the
                    most creative way. I created web design for many famous
                    brand companies.
                  </p>

                  <h3
                    className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4"
                  >
                    What I do!
                  </h3>

                  <div
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
                  >
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-1.svg"
                          alt="icon-1"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          Ui/Ux Design
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-2.svg"
                          alt="icon-2"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          App Development
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-3.svg"
                          alt="icon-3"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          Photography
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-4.svg"
                          alt="icon-4"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          Photography
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-5.svg"
                          alt="icon-5"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          Management
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5"
                    >
                      <div>
                        <img
                          className="w-28"
                          src="./images/icons/icon-6.svg"
                          alt="icon-6"
                        />
                      </div>
                      <div>
                        <h4 className="dark:text-white text-xl font-semibold">
                          Web Development
                        </h4>
                        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4"
                    >
                      My Client!
                    </h3>
                    <div
                      className="brand_slider py-6 px-6 rounded-xl dark:bg-black"
                    >
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-1.png" alt="image" />
                      </div>
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-2.png" alt="image" />
                      </div>
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-3.png" alt="image" />
                      </div>
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-4.png" alt="image" />
                      </div>
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-1.png" alt="image" />
                      </div>
                      <div className="slide_item py-4 px-8 rounded-md">
                        <img src="./images/slide-item-2.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="dark:bg-black p-6 text-center mt-8 rounded-br-xl rounded-bl-xl"
              >
                <p className="text-slate-800 dark:text-slate-50">
                  &#169; <span id="year"></span> All Rights Reserved by
                  ib-themes.
                </p>
              </div>
            </div>
          </section>
    </>
  )
}

export default About