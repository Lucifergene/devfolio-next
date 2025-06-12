'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { string, object } from 'yup';
import { Notification } from './Notification';
import { IContactProps } from '../../typings';
import { hideCard } from '../utils';

const initialValues: IContactProps = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validate = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  subject: string().required('Subject is required'),
  message: string()
    .required('Message is required')
    .min(20, 'Message must be at least 20 characters'),
});

export const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    hideCard();
  }, []);

  const formSubmit = (
    values: IContactProps,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    setSubmitting(true);
    console.log(values);
    fetch('https://formsubmit.co/ajax/2b90c706f0ae682a5f6a19a9caf16cc1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        setMessage('success');
        console.log(res);
        setSubmitting(false);
        resetForm();
      })
      .catch(err => {
        setMessage('error');
        console.log(err);
        setSubmitting(false);
      });
  };

  return (
    <>
      <section id='contact'>
        <div
          className='lg:rounded-2xl'
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(70px)',
            WebkitBackdropFilter: 'blur(70px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow:
              '0 15px 30px rgba(0, 0, 0, 0.30), 0 10px 10px rgba(0, 0, 0, 0.20)',
            transform: 'translateY(-10px)',
          }}
        >
          <div className='container sm:px-5 md:px-10 lg:px-14'>
            <div className='px-4 pt-12 md:px-0'>
              <h2 className='after-effect bg-[linear-gradient(180deg,#555555,#000000)] bg-clip-text font-geist text-[40px] font-semibold text-transparent after:left-64 dark:bg-[linear-gradient(180deg,#ffffff,#adadad)]'>
                Contact me
              </h2>
              <div className='mt-[30px] grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-2'></div>
            </div>
          </div>

          <div>
            <div className='overflow-hidden px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24'>
              <div className='relative mx-auto max-w-xl'>
                <div className='text-center'>
                  <p className='mt-4 text-lg leading-6 text-[#232933] dark:text-[#A6A6A6]'>
                    Want to discuss about a project or just want to say hi?{' '}
                    <br /> Feel free to contact me.
                  </p>
                </div>
                <div className='mt-12 px-4'>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={formSubmit}
                  >
                    {({ handleSubmit, isSubmitting, isValidating }) => (
                      <Form
                        onSubmit={handleSubmit}
                        className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                      >
                        <div>
                          <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700 dark:text-[#A6A6A6]'
                          >
                            Your Name
                          </label>
                          <div className='mt-1'>
                            <Field
                              as='input'
                              type='text'
                              name='name'
                              id='name'
                              autoComplete='name'
                              className='focus:border-grey-500 focus:ring-grey-500 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm'
                            />
                            <ErrorMessage
                              name='name'
                              component='div'
                              className='text-center text-sm font-medium text-red-900 dark:text-red-400'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700 dark:text-[#A6A6A6]'
                          >
                            Email
                          </label>
                          <div className='mt-1'>
                            <Field
                              as='input'
                              type='email'
                              name='email'
                              id='email'
                              autoComplete='email'
                              className='focus:border-grey-500 focus:ring-grey-500 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm'
                            />
                            <ErrorMessage
                              name='email'
                              component='div'
                              className='text-center text-sm font-medium text-red-900 dark:text-red-400'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='subject'
                            className='block text-sm font-medium text-gray-700 dark:text-[#A6A6A6]'
                          >
                            Subject
                          </label>
                          <div className='mt-1'>
                            <Field
                              as='input'
                              type='text'
                              name='subject'
                              id='subject'
                              autoComplete='organization'
                              className='focus:border-grey-500 focus:ring-grey-500 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm'
                            />
                            <ErrorMessage
                              name='subject'
                              component='div'
                              className='text-center text-sm font-medium text-red-900 dark:text-red-400'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-700 dark:text-[#A6A6A6]'
                          >
                            Message
                          </label>
                          <div className='mt-1'>
                            <Field
                              as='textarea'
                              name='message'
                              id='message'
                              rows={4}
                              className='focus:border-grey-500 focus:ring-grey-500 block w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm'
                              placeholder='Write your message here'
                            />
                            <ErrorMessage
                              name='message'
                              component='div'
                              className='text-center text-sm font-medium text-red-900 dark:text-red-400'
                            />
                          </div>
                        </div>

                        <div className='sm:col-span-2'>
                          <button
                            type='submit'
                            disabled={isSubmitting || isValidating}
                            className='mt-4 flex w-full items-center justify-center rounded-full bg-[#161616] px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-[#444444] dark:bg-[#ededed] dark:text-[#161616] dark:hover:bg-[#eaeaeac2]'
                          >
                            Send Message
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {message && <Notification message={message} />}
    </>
  );
};
