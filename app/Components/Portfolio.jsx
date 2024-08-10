'use client'
import React, { useState } from 'react'
import { galleryCategory } from './constant'  // Assuming you have this array defined

// Mock data for gallery items
const galleryItems = [
  { id: 1, category: 'Family', title: 'Beautiful Sunset', url: '/images/sunset.jpg' },
  { id: 2, category: 'Urban', title: 'City Lights', url: '/images/city.jpg' },
  { id: 3, category: 'Nature', title: 'Mountain Peaks', url: '/images/mountains.jpg' },
  { id: 4, category: 'Urban', title: 'Street Art', url: '/images/street-art.jpg' },
  // Add more items as needed
];

const Portfolio = () => {
  const [categoryActive, setCategoryActive] = useState('All');

  // Filter items based on the selected category
  const filteredItems = categoryActive === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === categoryActive);

  return (
    <div className="p-4">
      <h3 className="text-md text-green-500 font-medium uppercase text-center font-poppins mt-[10%]">Our Gallery</h3>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-gray-700 text-center mb-12 font-poppins'>
        Our Works Speak
      </h1>
      <ul className='flex flex-row flex-shrink justify-center items-center my-2 p-3 space-x-2 lg:space-x-12'>
        <li
          onClick={() => setCategoryActive('All')}
          className={`text-md bg-gray-200 shadow-lg rounded-md px-3 py-2 cursor-pointer transition-all ease-in ${categoryActive === 'All' ? 'bg-orange-500 text-white' : 'text-green-500 hover:bg-orange-500 hover:text-white'}`}
        >
          All
        </li>
        {
          galleryCategory.map((item) => (
            <li
              key={item}
              onClick={() => setCategoryActive(item)}
              className={`text-md bg-gray-200 shadow-lg rounded-md px-3 py-2 cursor-pointer transition-all ease-in ${categoryActive === item ? 'bg-orange-500 text-white' : 'text-green-500 hover:bg-orange-500 hover:text-white'}`}
            >
              {item}
            </li>
          ))
        }
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          filteredItems.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={item.url} alt={item.title} className="w-full h-64 object-cover rounded-md mb-2" />
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
