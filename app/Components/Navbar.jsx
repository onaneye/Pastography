'use client'
import React from 'react'
import { navList } from './constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = React.useState(null);

    const onMouseHover = (id) => {
        setHoveredItem(id);
    }
    const onMouseLeave = () => {
        setHoveredItem(null);
    }

    return (
        <nav className='w-full px-6 py-2 flex items-center justify-between bg-transparent absolute top-4 text-white'>
            <div>
                <img src="./images/logo.png" className='w-[200px]' alt="Logo" srcSet="" />
                <ul className='hidden bg-gray-400 p-5 h-full w-[300px] overflow-hidden text-center text-white mx-auto'>
                    <li>Home | </li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <ul className='hidden lg:flex space-x-8 bg-gray-300/40 backdrop-filter backdrop-blur-lg/3 px-3 py-4 rounded-2xl'>
                {navList.map((nav) => (
                    <li
                        key={nav.id}  // Assuming nav.id is unique
                        className='cursor-pointer text-md'
                        onMouseEnter={() => onMouseHover(nav.id)}
                        onMouseLeave={onMouseLeave}
                    >
                        {nav} {"|"}
                        {hoveredItem === nav.id && nav.name === 'Services' && (
                            <ul className='bg-orange-500/30 backdrop-blur-lg h-[fit-content] px-6 py-2 text-white mt-5 shadow-2xl absolute z-[10] transform translate-y-[10%] w-[fit-content]'>
                                <li>Photoshoot</li>
                                <li>Videography</li>
                                <li>Wildlife</li>
                                <li>Weddings</li>
                                <li>Birthday Celebration</li>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <div className='hidden lg:flex items-center animated hover:animate-bounce'>
                <button className='bg-white px-4 py-2 rounded-full shadow-md text-center text-orange-600 cursor-pointer hover:bg-orange-600 hover:text-white'>
                    <p>Subscribe</p>
                </button>
                <button className='bg-white px-3 py-2 rounded-full shadow-md text-center text-orange-600'>
                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
