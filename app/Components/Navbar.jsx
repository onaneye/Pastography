'use client'
import React from 'react'
import { navList } from './constant'

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = React.useState(null)

    const onMouseHover = (index) => {
        setHoveredItem(index)
    }
    const onMouseLeave = () => {
        setHoveredItem(null)
    }

    return (
        <nav className='w-full h-full p-2 my-4 flex items-center justify-between'>
            <div>
                <img src="./images/logo.png" className='w-[200px]' alt="" srcset="" />
                <ul className='hidden bg-gray-400 p-5 h-full w-[300px] overflow-hidden text-center text-white mx-auto'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <ul className='hidden lg:flex space-x-8'>
                {navList.map((nav, index) => (
                    <li
                        key={index}
                        className='cursor-pointer text-md'
                        onMouseEnter={() => onMouseHover(index)}
                        onMouseLeave={onMouseLeave}
                    >
                        {nav}
                        {hoveredItem === index && nav === 'Services' && (
                            <ul className='bg-orange-500/30 backdrop-blur-lg  h-[fit-content] px-6 py-2 text-white mt-5 shadow-2xl absolute z-[10] transform translate-y-[10%] w-[fit-content]'>
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
            <div className='hidden lg:block bg-orange-500 p-5 rounded-lg shadow-md text-center text-white'>
                <p>Subscribe</p>
            </div>
        </nav>
    )
}

export default Navbar
