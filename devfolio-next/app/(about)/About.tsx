import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div className="container sm:px-5 md:px-10 lg:px-14">
          <div className="pt-12 px-4 md:px-0">
            <h2 className="after-effect after:left-56">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
          </div>
        </div>

        <div className="pb-12 px-12 lg:px-16 overflow-hidden">
          <p className="text-gray-700 dark:text-white font-normal text-2xl font-source text-justify">
            Hey, I'm Avik. I work as a Software Engineer specializing in{" "}
            <Link
              href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
              className="text-red-500"
            >
              Openshift Container Platform
            </Link>{" "}
            and{" "}
            <Link href="https://www.kubernetes.io" className="text-red-500">
              Kubernetes
            </Link>{" "}
            at{" "}
            <Link href="https://www.redhat.com/en/" className="text-red-500">
              Red Hat
            </Link>
            . I'm an open-source enthusiast currently focused on Platform
            Engineering and Cloud-native technologies.
            <p className="text-gray-700 dark:text-white font-normal text-2xl font-source text-justify pt-2">
              I'm the member of{" "}
              <Link href="https://aws.amazon.com/" className="text-red-500">
                AWS Community Builders
              </Link>{" "}
              program, where I organize workshops and write about various
              services offered by AWS.
            </p>
          </p>
          <p className="text-gray-700 dark:text-white font-normal text-2xl font-source text-justify pt-2">
            I like to solve problems, contribute to open source, mentor others,
            and I share what I learn through writing and speaking.
          </p>

          <h3 className="text-4xl text-slate-900 dark:text-white font-semibold pt-6 pb-4">
            Certifications
          </h3>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-0 rounded-lg dark:bg-transparent">
            <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/a3b0d7d5-0aa6-4ff2-8df6-836635d8d37a"
                  target="_blank"
                  className="my-2"
                >
                  <img src="../../../assets/images/certs/aws.png" />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/f2269f3a-c67e-47fb-8b8f-ed1f084a5ae0"
                  target="_blank"
                  className="my-2"
                >
                  <img src="../../../assets/images/certs/azure.png" />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/625a3360-ba76-4c20-90e3-a3328bac58e3"
                  target="_blank"
                  className="my-2"
                >
                  <img src="../../../assets/images/certs/do180.png" />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/62ce932c-44a3-4aa7-ae41-aab40a7bf07f"
                  target="_blank"
                  className="my-2"
                >
                  <img src="../../../assets/images/certs/gitops.png" />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/2a07631f-0d82-42a5-8530-b9b429fe2926"
                  target="_blank"
                  className="my-2"
                >
                  <img src="../../../assets/images/certs/ccna.png" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon1.svg"
                  alt="icon-1"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  Ui/Ux Design
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon2.svg"
                  alt="icon-2"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  App Development
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon3.svg"
                  alt="icon-3"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  Photography
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon4.svg"
                  alt="icon-4"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  Photography
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon5.svg"
                  alt="icon-5"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  Management
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
              <div>
                <img
                  className="w-28"
                  src="../../../assets/images/icons/icon5.svg"
                  alt="icon-6"
                />
              </div>
              <div>
                <h4 className="dark:text-white text-xl font-semibold">
                  Web Development
                </h4>
                <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
          </div> */}
          <div>
            <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
              Achievements
            </h3>
            <div className="brand_slider py-6 px-6 rounded-xl dark:bg-black">
              {/* <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div>
              <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div>
              <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div>
              <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div>
              <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div>
              <div className="slide_item py-4 px-8 rounded-md">
                <img src="../../../assets/images/certs/ccna.png" alt="image" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
