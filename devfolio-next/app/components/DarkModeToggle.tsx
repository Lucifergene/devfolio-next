"use client";

import React, { useEffect } from "react";

export const DarkModeToggle = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      document
        .querySelector("#theme-toggle-dark-icon")
        ?.classList.remove("hidden");
      document
        .querySelector("#theme-toggle-light-icon")
        ?.classList.add("hidden");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      document
        .querySelector("#theme-toggle-dark-icon")
        ?.classList.add("hidden");
      document
        .querySelector("#theme-toggle-light-icon")
        ?.classList.remove("hidden");
    }
  }, []);
  return (
    <>
      <button
        type="button"
        className="dark-light-btn"
        onClick={() => {
          const html = document.querySelector("html");
          if (html?.classList.contains("dark")) {
            html.classList.remove("dark");
            document
              .querySelector("#theme-toggle-dark-icon")
              ?.classList.add("hidden");
            document
              .querySelector("#theme-toggle-light-icon")
              ?.classList.remove("hidden");

            localStorage.setItem("theme", "light");
          } else {
            html?.classList.add("dark");
            document
              .querySelector("#theme-toggle-dark-icon")
              ?.classList.remove("hidden");
            document
              .querySelector("#theme-toggle-light-icon")
              ?.classList.add("hidden");

            localStorage.setItem("theme", "dark");
          }
        }}
      >
        <i
          id="theme-toggle-dark-icon"
          className="fa-solid text-xl fa-moon hidden"
        ></i>
        <i
          id="theme-toggle-light-icon"
          className="fa-solid fa-sun text-xl hidden"
        ></i>
      </button>
    </>
  );
};
