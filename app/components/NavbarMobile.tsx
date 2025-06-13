'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { hideCard } from '../utils';

// Define navigation item interface
interface NavItem {
  path: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

export const NavbarMobile = () => {
  const pathname = usePathname();

  // Define navigation items
  const navItems: NavItem[] = [
    {
      path: '/',
      label: 'About',
      icon: 'fa-regular fa-user',
    },
    {
      path: '/resume',
      label: 'Resume',
      icon: 'fa-regular fa-file-lines',
    },
    // Commented out for now
    // {
    //   path: '/projects',
    //   label: 'Projects',
    //   icon: 'fas fa-briefcase',
    // },
    {
      path: '/blog',
      label: 'Blogs',
      icon: 'fa-brands fa-blogger',
    },
    {
      path: '/research',
      label: 'Research',
      icon: 'fa-solid fa-book',
    },
    {
      path: '/contact',
      label: 'Contact',
      icon: 'fa-solid fa-address-book',
    },
    {
      path: '/links',
      label: 'Links',
      icon: 'fa-solid fa-up-right-from-square',
    },
  ];

  const handleClose = () => {
    hideCard();

    const menuToggleCloseIcon = document.getElementById(
      'menu-toggle-close-icon'
    ) as HTMLButtonElement;
    const menuToggleOpenIcon = document.getElementById(
      'menu-toggle-open-icon'
    ) as HTMLButtonElement;
    const navbarMobile = document.getElementById(
      'navbar-mobile'
    ) as HTMLDivElement;
    navbarMobile.classList.toggle('hidden');
    menuToggleCloseIcon.classList.toggle('hidden');
    menuToggleOpenIcon.classList.toggle('hidden');
  };

  return (
    <>
      <nav
        id='navbar-mobile'
        className='fixed inset-x-0 bottom-0 top-[5.9rem] z-50 hidden lg:hidden'
      >
        <ul
          className='absolute inset-0 z-[22222222222222] flex h-full w-full flex-col justify-center p-[6.5rem] font-montserrat text-xl shadow-md'
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow:
              '0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.15)',
          }}
        >
          {navItems.map(item => (
            <li key={item.path} className='m-2'>
              <Link
                className={classNames(
                  'inline-flex',
                  pathname === item.path
                    ? 'mobile-menu-items-active'
                    : 'mobile-menu-items'
                )}
                href={item.path}
                onClick={() => {
                  handleClose();
                }}
              >
                <span className='mr-2 w-8 text-center text-xl'>
                  <i className={item.icon}></i>
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
