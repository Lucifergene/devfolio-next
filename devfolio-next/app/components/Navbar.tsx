"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
        <nav className="hidden lg:block">
          <ul className="flex">
            <li>
              <Link
                className={pathname === "/" ? "menu-active" : "menu-item"}
                href="/"
              >
                <span className="text-xl mb-1">
                  <i className="fa-regular fa-user"></i>
                </span>
                About
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/resume" ? "menu-active" : "menu-item"}
                href="/resume"
              >
                <span className="text-xl mb-1">
                  <i className="fa-regular fa-file-lines"></i>
                </span>
                Resume
              </Link>
            </li>
            {/* <li>
              <Link
                className={
                  pathname === "/projects" ? "menu-active" : "menu-item"
                }
                href="/projects"
              >
                <span className="text-xl mb-1">
                  <i className="fas fa-briefcase"></i>
                </span>
                Projects
              </Link>
            </li> */}
            <li>
              <Link
                className={pathname === "/blog" ? "menu-active" : "menu-item"}
                href="/blog"
              >
                <span className="text-xl mb-1">
                  <i className="fa-brands fa-blogger"></i>
                </span>
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/research" ? "menu-active" : "menu-item"
                }
                href="/research"
              >
                <span className="text-xl mb-1">
                  <i className="fa-solid fa-book"></i>
                </span>
                Research
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/contact" ? "menu-active" : "menu-item"
                }
                href="/contact"
              >
                <span className="text-xl mb-1">
                  <i className="fa-solid fa-address-book"></i>
                </span>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
