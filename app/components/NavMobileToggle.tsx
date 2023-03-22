"use client";
import React from "react";

export const NavMobileToggle = () => {
  return (
    <>
      <button
        id="menu-toggle"
        type="button"
        className="menu-toggle-btn"
        onClick={() => {
          const menuToggleOpenIcon = document.getElementById(
            "menu-toggle-open-icon"
          ) as HTMLButtonElement;
          const menuToggleCloseIcon = document.getElementById(
            "menu-toggle-close-icon"
          ) as HTMLButtonElement;
          const navbarMobile = document.getElementById(
            "navbar-mobile"
          ) as HTMLDivElement;

          menuToggleOpenIcon.classList.toggle("hidden");
          menuToggleCloseIcon.classList.toggle("hidden");
          navbarMobile.classList.toggle("hidden");
        }}
      >
        <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl"></i>
        <i
          id="menu-toggle-close-icon"
          className="fa-solid fa-xmark text-xl hidden"
        ></i>
      </button>
    </>
  );
};
