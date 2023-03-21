"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { string, object } from "yup";
import { Notification } from "./Notification";
import { IContactProps } from "../../typings";

const initialValues: IContactProps = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validate: any = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  subject: string().required("Subject is required"),
  message: string()
    .required("Message is required")
    .min(20, "Message must be at least 20 characters"),
});

export const Contact = () => {
  const [message, setMessage] = useState("");
  const isLoaded = document.getElementById("loading");

  useEffect(() => {
    if (isLoaded) {
      const sectionElement = document.getElementById(
        "contact"
      ) as HTMLDivElement;
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const formSubmit = (
    values: IContactProps,
    { setSubmitting, resetForm }: any
  ) => {
    setSubmitting(true);
    console.log(values);
    fetch("https://formsubmit.co/ajax/2b90c706f0ae682a5f6a19a9caf16cc1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        setMessage("success");
        console.log(res);
        setSubmitting(false);
        resetForm();
      })
      .catch((err) => {
        setMessage("error");
        console.log(err);
        setSubmitting(false);
      });
  };

  return (
    <>
      <section id="contact">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 px-4 md:px-0">
              <h2 className="after-effect after:left-64">Contact me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
            </div>
          </div>

          <div>
            <div className=" pb-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:pb-24">
              <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                  <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-[#A6A6A6]">
                    Want to discuss about a project or just want to say hi?{" "}
                    <br /> Feel free to contact me.
                  </p>
                </div>
                <div className="mt-12">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={formSubmit}
                  >
                    {({ handleSubmit, isSubmitting, isValidating }) => (
                      <Form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="name"
                            className="dark:text-[#A6A6A6] block text-sm font-medium text-gray-700"
                          >
                            Your Name
                          </label>
                          <div className="mt-1">
                            <Field
                              as="input"
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="dark:text-[#A6A6A6] block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <Field
                              as="input"
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="dark:text-[#A6A6A6] block text-sm font-medium text-gray-700"
                          >
                            Subject
                          </label>
                          <div className="mt-1">
                            <Field
                              as="input"
                              type="text"
                              name="subject"
                              id="subject"
                              autoComplete="organization"
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border  border-gray-300 rounded-md"
                            />
                            <ErrorMessage
                              name="subject"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="dark:text-[#A6A6A6] block text-sm font-medium text-gray-700"
                          >
                            Message
                          </label>
                          <div className="mt-1">
                            <Field
                              as="textarea"
                              name="message"
                              id="message"
                              rows={4}
                              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                              placeholder="Write your message here"
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            disabled={isSubmitting || isValidating}
                            className="w-full inline-flex items-center justify-center px-6 py-3 shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
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
