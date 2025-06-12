'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Define navigation item interface
interface NavItem {
  path: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

export const Navbar = () => {
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

  return (
    <>
      <header
        className='ml-auto mb-10 hidden h-[144px] rounded-[16px] p-[30px] font-geist lg:block lg:w-[660px]'
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow:
            '0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-10px)',
        }}
      >
        <nav className='hidden lg:block'>
          <ul className='flex justify-center'>
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  className={classNames(
                    'transform bg-[linear-gradient(180deg,#555555,#000000)] transition-transform duration-150 ease-out hover:scale-105 hover:bg-[linear-gradient(180deg,#777777,#222222)]',
                    pathname === item.path
                      ? 'menu-active bg-[linear-gradient(180deg,#555555,#000000)]'
                      : 'menu-item scale-90 bg-[linear-gradient(180deg,#333333,#111111)] text-[#EDEDED]'
                  )}
                  href={item.path}
                >
                  <span className='mb-1 text-xl'>
                    <i className={item.icon}></i>
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
