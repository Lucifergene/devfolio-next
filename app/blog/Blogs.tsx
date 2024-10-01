"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { hideCard } from "../utils";
import { fetchBlogs } from "./blog-utils";
import { IPostItemProps } from "../../typings";
import { HASHNODE_URL } from "../../const";
import { BlogSkeleton } from "./BlogSkeleton";

export const NUMBER_OF_BLOGS = 5;

const Blogs: React.FC = () => {
  const [posts, setPosts] = React.useState<IPostItemProps[]>([]);
  useEffect(() => {
    (async () => {
      const allPosts: IPostItemProps[] = await fetchBlogs();
      setPosts(allPosts.slice(0, NUMBER_OF_BLOGS));
    })();
  }, []);

  useEffect(() => {
    hideCard("blogs");
  }, []);

  return (
    <>
      <section id="blogs">
        <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="pt-12 px-4 md:px-0">
              <h2 className="after-effect after:left-40">Blogs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"></div>
            </div>
          </div>

          <div className="pb-16 px-8 overflow-hidden sm:px-6 lg:px-16 lg:pb-12">
            <div className="relative mx-auto ">
              <div>
                <p className="text-lg text-gray-500 dark:text-[#A6A6A6]">
                  Some of my Articles sorted by their date of creation. You can
                  view all my articles on Hashnode from{" "}
                  <Link
                    href={HASHNODE_URL}
                    className="text-blue-800 dark:text-blue-500"
                    target={"_blank"}
                  >
                    here
                  </Link>
                </p>
              </div>
              {posts.length === 0 ? (
                <BlogSkeleton />
              ) : (
                <div className="mt-6 pt-10">
                  {posts.map((post: IPostItemProps) => {
                    const dateObj = new Date(post.publishedAt);
                    const date = dateObj.getDate();
                    const month = dateObj.toLocaleString("default", {
                      month: "long",
                    });
                    const dateAdded = date + " " + month;
                    return (
                      <div key={post.title} className="mb-6">
                        <p className="text-sm text-gray-500">
                          <time dateTime={post.publishedAt}>{dateAdded}</time>
                        </p>
                        <Link
                          href={"https://www.hashnode.com/post/" + post.slug}
                          className="mt-2 block"
                          target={"_blank"}
                        >
                          <p className="dark:text-white text-xl font-semibold text-gray-900 ">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 dark:text-[#A6A6A6]">
                            {post.brief}
                          </p>
                        </Link>
                        <div className="mt-3">
                          <Link
                            href={"https://www.hashnode.com/post/" + post.slug}
                            className="text-base font-semibold text-blue-600 hover:text-blue-400"
                            target={"_blank"}
                          >
                            Read article
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
