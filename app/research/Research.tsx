"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";

import { AuthorProps, PostItemProps } from "../../typings";
import { posts } from "./data";
import { hideCard } from "../utils";

export const Research: React.FC = () => {
  useEffect(() => {
    hideCard("research");
  }, []);
  return (
    <>
      <section id="research">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 px-4 md:px-0">
              <h2 className="after-effect after:left-72">Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
            </div>
          </div>

          <div className="pb-16 px-8 sm:px-6 lg:px-16 lg:pb-12">
            <div className="relative mx-auto ">
              <div className="mt-6">
                {posts.map((post: PostItemProps) => (
                  <div key={post.title} className="mb-8">
                    <div className="inline-block">
                      <span
                        className={classNames(
                          post.category.color,
                          "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                        )}
                      >
                        {post.category.name}
                      </span>
                    </div>
                    <Link
                      href={post.href}
                      className="block mt-2"
                      target={"_blank"}
                    >
                      <p className="dark:text-white text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-[#A6A6A6]">
                        {post.description}
                      </p>
                    </Link>
                    <div className="grid lg:grid-cols-4 lg:gap-x-1 lg:gap-y-12">
                      {post.authors.map((author: AuthorProps) => (
                        <div
                          key={author.name}
                          className="mt-6 flex items-center"
                        >
                          <div className="ml-3">
                            <p className="dark:text-white text-sm font-medium text-gray-900">
                              {author.name}
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <span>{author.role}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
