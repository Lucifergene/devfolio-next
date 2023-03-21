"use client";

import Link from "next/link";
import React, { useEffect } from "react";

import { fetchBlogs } from "./utils";

const Blogs = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetchBlogs();
      setPosts(res);
    })();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const sectionElement = document.getElementById("blogs") as HTMLDivElement;
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [posts, setPosts]);

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
                  The list of my Articles sorted by where I've worked on them.
                  You can view my Hashnode Profile from{" "}
                  <Link
                    href="https://blog.avikkundu.in/"
                    className="text-blue-800 dark:text-blue-500"
                    target={"_blank"}
                  >
                    here
                  </Link>
                </p>
              </div>
              <div className="mt-6 pt-10">
                {posts.map((post: any) => {
                  const dateObj = new Date(post.dateAdded);
                  const date = dateObj.getDate();
                  const month = dateObj.toLocaleString("default", {
                    month: "long",
                  });
                  const dateAdded = date + " " + month;
                  return (
                    <div key={post.title} className="mb-6">
                      <p className="text-sm text-gray-500">
                        <time dateTime={post.dateUpdated}>{dateAdded}</time>
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
                        >
                          Read full story
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
