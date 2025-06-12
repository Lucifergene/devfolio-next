'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { showCard } from '../utils';

const About: React.FC = () => {
  useEffect(() => {
    showCard();
  }, []);

  return (
    <>
      <section
        id='about'
        className='lg:rounded-2xl'
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(50px)',
          WebkitBackdropFilter: 'blur(50px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow:
            '0 15px 30px rgba(0, 0, 0, 0.30), 0 10px 10px rgba(0, 0, 0, 0.20)',
          transform: 'translateY(-10px)',
        }}
      >
        <div className='container sm:px-5 md:px-10 lg:px-14'>
          <div className='px-4 pt-12 md:px-0'>
            <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-56 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
              About Me
            </h2>
            <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
          </div>
        </div>

        <div className='overflow-hidden px-12 pb-12 lg:px-16'>
          <p className='font-source-sans text-2xl font-normal text-gray-700 dark:text-[#EDEDED]'>
            Hey, I&apos;m Avik. I work as a Software Engineer specializing in{' '}
            <Link
              href='https://www.redhat.com/en/technologies/cloud-computing/openshift'
              className='text-[#0072F5] dark:text-[#52A8FF]'
            >
              Openshift Container Platform
            </Link>{' '}
            and{' '}
            <Link
              href='https://www.kubernetes.io'
              className='text-[#0072F5] dark:text-[#52A8FF]'
            >
              Kubernetes
            </Link>{' '}
            at{' '}
            <Link
              href='https://www.redhat.com/en/'
              className='text-[#0072F5] dark:text-[#52A8FF]'
            >
              Red Hat
            </Link>
            . I&apos;m an open-source enthusiast currently focused on Platform
            Engineering and Cloud-native technologies.
          </p>
          {/* <p className="text-gray-700 dark:text-[#EDEDED] font-normal text-2xl font-source-sans pt-2">
        I'm the member of{" "}
        <Link
          href="https://aws.amazon.com/"
          className="text-[#0072F5] dark:text-[#52A8FF]"
        >
          AWS Community Builders
        </Link>{" "}
        program, where I organize workshops and write about various services
        offered by AWS.
          </p> */}
          <p className='font-source-sans pt-2 text-2xl font-normal text-gray-700 dark:text-[#EDEDED]'>
            I like to solve problems, contribute to open source, mentor others,
            and I share what I learn through writing and speaking.
          </p>

          <h3 className='pt-8 pb-4 text-2xl font-semibold text-slate-900 dark:text-[#EDEDED]'>
            Certifications
          </h3>

          <div className='mx-auto max-w-7xl rounded-lg px-4 dark:bg-transparent sm:px-6 lg:p-0'>
            <div className='grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-6'>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/9cb105f9-dc97-4fd4-a1e8-188c6979e693'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/ckad.webp'
                    alt='CKAD: Certified Kubernetes Application Developer'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/a3b0d7d5-0aa6-4ff2-8df6-836635d8d37a'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/aws.webp'
                    alt='AWS Certified Solutions Architect - Associate'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/f2269f3a-c67e-47fb-8b8f-ed1f084a5ae0'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/azure.webp'
                    alt='Microsoft Certified: Azure Fundamentals'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/625a3360-ba76-4c20-90e3-a3328bac58e3'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/do180.webp'
                    alt='DO180: Red Hat OpenShift Administration I'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/62ce932c-44a3-4aa7-ae41-aab40a7bf07f'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/gitops.webp'
                    alt='GitOps Fundamentals'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
                <Link
                  href='https://www.credly.com/badges/2a07631f-0d82-42a5-8530-b9b429fe2926'
                  target='_blank'
                  className='my-2'
                >
                  <Image
                    src='/assets/images/certs/ccna.webp'
                    alt='Cisco Certified Network Associate'
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className='pt-10 pb-3 text-2xl font-semibold text-slate-900 dark:text-slate-50'>
              Previous Talks
            </h3>
            <div className='pt-2'>
              <p className='text-sm text-[#232933] dark:text-[#EDEDED]'>
                Kubernetes Community Days Chennai - June 2022
              </p>
              <p className='text-xl font-semibold text-gray-900 dark:text-[#EDEDED]'>
                Creating Serverless CI/CD on Kubernetes with GitOps
              </p>
              <div className='inline-block'>
                {['Knative', 'Tekton', 'ArgoCD'].map(tag => (
                  <span
                    key={tag}
                    className='mt-4 mr-4 inline-flex items-center rounded-full bg-slate-900 px-3 py-0.5 text-sm font-medium text-[#EDEDED]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className='mt-3 text-base text-[#171717] dark:text-[#EDEDED]'>
                Serverless has become one of the most used terms for cloud
                computing. Enterprises have started to adopt and maintain
                several open-source projects which tend to bring all the
                advantages of serverless to the way applications are deployed on
                Kubernetes currently. This session would demonstrate how to
                create Cloud-Native CI/CD Pipelines for deploying serverless
                applications on Kubernetes following GitOps Practices.
              </p>

              <div className='mt-3'>
                <Link
                  href={'https://www.youtube.com/watch?v=_aqlanvWL-c'}
                  target='_blank'
                  className='text-base font-semibold text-[#0072F5] dark:text-[#52A8FF]'
                >
                  Watch recording
                </Link>
              </div>
            </div>
            <div className='pt-4'>
              {' '}
              <p className='text-sm text-[#232933] dark:text-[#EDEDED]'>
                KubeKloud: CNCF Hooghly - October 2023
              </p>
              <p className='text-xl font-semibold text-gray-900 dark:text-[#EDEDED]'>
                Introduction to Containers and Container Orchestrators
              </p>
              <div className='inline-block'>
                {['Containers', 'Kubernetes'].map(tag => (
                  <span
                    key={tag}
                    className='mt-4 mr-4 inline-flex items-center rounded-full bg-slate-900 px-3 py-0.5 text-sm font-medium text-[#EDEDED]'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className='mt-3 text-base text-[#171717] dark:text-[#EDEDED]'>
                Containers and microservices have revolutionized the way
                applications are deployed on the cloud. Since its launch in
                2014, Kubernetes has become a de-facto standard as a container
                orchestration tool. This session would introduce the audience to
                the world of containers and container orchestrators. We would
                also discuss the advantages of using Kubernetes as a container
                orchestrator.
              </p>
              <div className='mt-3'>
                <Link
                  href={
                    'https://docs.google.com/presentation/d/1ftWWr0uceye1Bg1NmMq2D5a84pX_rMeJ/edit?usp=sharing&ouid=105557108377826887705&rtpof=true&sd=true'
                  }
                  target='_blank'
                  className='text-base font-semibold text-[#0072F5] dark:text-[#52A8FF]'
                >
                  Speaker Deck
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
