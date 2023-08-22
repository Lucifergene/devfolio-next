"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { showCard } from "../utils";

const About: React.FC = () => {
  useEffect(() => {
    showCard();
  }, []);

  return (
    <>
      <section id="about" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div className="container sm:px-5 md:px-10 lg:px-14">
          <div className="pt-12 px-4 md:px-0">
            <h2 className="after-effect after:left-56">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
          </div>
        </div>

        <div className="pb-12 px-12 lg:px-16 overflow-hidden">
          <p className="text-gray-700 dark:text-white font-normal text-2xl font-source">
            Hey, I'm Avik. I work as a Software Engineer specializing in{" "}
            <Link
              href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
              className="text-blue-700 dark:text-blue-400"
            >
              Openshift Container Platform
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.kubernetes.io"
              className="text-blue-700 dark:text-blue-400"
            >
              Kubernetes
            </Link>{" "}
            at{" "}
            <Link
              href="https://www.redhat.com/en/"
              className="text-blue-700 dark:text-blue-400"
            >
              Red Hat
            </Link>
            . I'm an open-source enthusiast currently focused on Platform
            Engineering and Cloud-native technologies.
            <p className="text-gray-700 dark:text-white font-normal text-2xl font-source pt-2">
              I'm the member of{" "}
              <Link
                href="https://aws.amazon.com/"
                className="text-blue-700 dark:text-blue-400"
              >
                AWS Community Builders
              </Link>{" "}
              program, where I organize workshops and write about various
              services offered by AWS.
            </p>
          </p>
          <p className="text-gray-700 dark:text-white font-normal text-2xl font-source pt-2">
            I like to solve problems, contribute to open source, mentor others,
            and I share what I learn through writing and speaking.
          </p>

          <h3 className="text-4xl text-slate-900 dark:text-white font-semibold pt-8 pb-4">
            Certifications
          </h3>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:p-0 rounded-lg dark:bg-transparent">
            <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-6">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/9cb105f9-dc97-4fd4-a1e8-188c6979e693"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/ckad.webp"
                    alt="CKAD: Certified Kubernetes Application Developer"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/a3b0d7d5-0aa6-4ff2-8df6-836635d8d37a"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/aws.webp"
                    alt="AWS Certified Solutions Architect - Associate"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/f2269f3a-c67e-47fb-8b8f-ed1f084a5ae0"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/azure.webp"
                    alt="Microsoft Certified: Azure Fundamentals"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/625a3360-ba76-4c20-90e3-a3328bac58e3"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/do180.webp"
                    alt="DO180: Red Hat OpenShift Administration I"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/62ce932c-44a3-4aa7-ae41-aab40a7bf07f"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/gitops.webp"
                    alt="GitOps Fundamentals"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Link
                  href="https://www.credly.com/badges/2a07631f-0d82-42a5-8530-b9b429fe2926"
                  target="_blank"
                  className="my-2"
                >
                  <Image
                    src="/assets/images/certs/ccna.webp"
                    alt="Cisco Certified Network Associate"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-10">
              Previous Talks
            </h3>
            <div className="pt-2">
              <p className="text-sm text-gray-500">
                Kubernetes Community Days Chennai - June 2022
              </p>
              <p className="dark:text-white text-xl font-semibold text-gray-900 ">
                Creating Serverless CI/CD on Kubernetes with GitOps
              </p>
              <div className="inline-block">
                <span
                  className={
                    "bg-blue-500 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mt-4 mr-4  "
                  }
                >
                  Knative
                </span>
                <span
                  className={
                    "bg-purple-500 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mt-4 mr-4"
                  }
                >
                  Tekton
                </span>
                <span
                  className={
                    "bg-orange-500 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mt-4 mr-4"
                  }
                >
                  ArgoCD
                </span>
              </div>
              <p className="mt-3 text-base dark:text-[#A6A6A6] text-gray-500">
                Serverless has become one of the most used terms for cloud
                computing. Enterprises have started to adopt and maintain
                several open-source projects which tend to bring all the
                advantages of serverless to the way applications are deployed on
                Kubernetes currently. This session would demonstrate how to
                create Cloud-Native CI/CD Pipelines for deploying serverless
                applications on Kubernetes following GitOps Practices.
              </p>

              <div className="mt-3">
                <Link
                  href={"https://www.youtube.com/watch?v=_aqlanvWL-c"}
                  target="_blank"
                  className="text-base font-semibold text-blue-600 hover:text-blue-400"
                >
                  Watch recording
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
