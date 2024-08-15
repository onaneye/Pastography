'use client'
import { faBell, faMoon, faSearch, faSun, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DasboardNav = () => {
  const [isDark, setIsDark] = useState(true)
  const dashboardNavList = [{name: "searchBar", icon: faSearch,},{name: "notification", icon: faBell,},{name: "toggleMode", icon: isDark ? faSun : faMoon,}]
  return (
    <div className=' bg-gray-800 flex  items-center  my-2 p-4 rounded-md w-full'>
        <h3 className='text-white text-md font-poppins mr-auto'>Dashboard</h3>
        <ul className='flex justify-between items-center gap-x-4 mx-6'>
            {dashboardNavList.map((nav)=>(
              <li className='text-white cursor-pointer'><FontAwesomeIcon icon={nav.icon} size={4}/></li>
            ))}
        </ul>
        <div className='flex items-center'>
            <FontAwesomeIcon icon={faUserCircle} size='2' className='text-white text-6xl'/>
            <div className='px-2'>
            <span className='text-white font-semibold font-poppins text-sm -inset-2'>Ola</span><br />
            <h3 className='text-white font-bold font-poppins text-lg'>Samuel</h3>
            </div>
        </div>
    </div>
  )
}

export default DasboardNav