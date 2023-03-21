"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const NavbarMobile = () => {
  const pathname = usePathname();

  const handleClose = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    const menuToggleCloseIcon = document.getElementById(
      "menu-toggle-close-icon"
    ) as HTMLButtonElement;
    const menuToggleOpenIcon = document.getElementById(
      "menu-toggle-open-icon"
    ) as HTMLButtonElement;
    const navbarMobile = document.getElementById(
      "navbar-mobile"
    ) as HTMLDivElement;
    navbarMobile.classList.toggle("hidden");
    menuToggleCloseIcon.classList.toggle("hidden");
    menuToggleOpenIcon.classList.toggle("hidden");
  };

  return (
    <>
      <nav id="navbar-mobile" className="lg:hidden hidden">
        <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
          <li>
            <Link
              className={classNames(
                pathname === "/"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              )}
              href="/"
              onClick={() => {
                handleClose("");
              }}
            >
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/resume"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              )}
              href="/resume"
              onClick={() => {
                handleClose("resume");
              }}
            >
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </Link>
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <Link
              className={classNames(
                pathname === "/blog"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              )}
              href="/blog"
              onClick={() => {
                handleClose("blogs");
              }}
            >
              <span className="mr-2 text-xl">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/research"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              )}
              href="/research"
              onClick={() => {
                handleClose("research");
              }}
            >
              <span className="mr-2 text-xl">
                <i className="fa-solid fa-book"></i>
              </span>
              Research
            </Link>
          </li>
          <li>
            <Link
              className={classNames(
                pathname === "/contact"
                  ? "mobile-menu-items-active"
                  : "mobile-menu-items"
              )}
              href="/contact"
              onClick={() => {
                handleClose("contact");
              }}
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
