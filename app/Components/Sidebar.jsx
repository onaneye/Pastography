"use client";
import React from 'react';
import Link from 'next/link'; // Using Next.js Link for navigation
import { useSelectedLayoutSegment } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();

  const sideBarOptions = [
    {
      name: "Dashboard",
      href: '/dashboard',
      icon: faHome,
      current: !segment || segment === '' // Adjust logic to correctly identify the active segment
    },
    {
      name: "Projects",
      href: '/dashboard/project',
      icon: faRProject,
      current: segment === 'project'
    },
    {
      name: "Blogs",
      href: '/dashboard/blog',
      icon: faPlusCircle,
      current: segment === 'blog'
    }
  ];

  return (
    <div className="">
      <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col'>
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-4 '>
          <div className="flex h-16 shrink-0 items-center">
            <h3 className='text-3xl font-bold text-white'>Logo</h3>
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              {sideBarOptions.map((option) => (
                <li key={option.name}>
                  <Link href={option.href} className={`group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold font-poppins ${option.current ? "bg-orange-500 text-white" : "text-gray-200 hover:text-white hover:bg-orange-500"}`}>
                    <span>
                      <FontAwesomeIcon icon={option.icon} size='lg' />
                    </span>
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
