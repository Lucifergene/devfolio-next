"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarMobile = () => {
  const pathname = usePathname();
  return (
    <>
      <nav id="navbar" className="hidden lg:hidden">
        <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
          <li>
            <Link
              className={
                pathname === "/"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/"
            >
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/resume"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/resume"
            >
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/projects"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/projects"
            >
              <span className="mr-2 text-xl">
                <i className="fas fa-briefcase"></i>
              </span>
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/blog"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/blog"
            >
              <span className="mr-2 text-xl">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/research"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/research"
            >
              <span className="mr-2 text-xl">
                <i className="fa-solid fa-book"></i>
              </span>
              Research
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === "/contact"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              }
              href="/contact"
            >
              <span className="mr-2 text-xl">
                <i className="fa-solid fa-address-book"></i>
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
