import Image from 'next/image';
import React from 'react';

const AdminProfile = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4 bg-gray-900 rounded-lg shadow-lg'>
      <Image 
        src='/images2/samuel 2.jpg' 
        width={100} 
        height={100} 
        className='rounded-full border-2 border-gray-600' 
        alt='Profile picture of Samuel O'
      />
      <h1 className='text-white font-bold text-2xl py-2 text-center font-poppins'>
        Samuel O
      </h1>
      <p className='text-center text-gray-300 mb-4 text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusantium dolore incidunt rerum earum quasi quas necessitatibus eaque explicabo qui facilis eius debitis. Quia natus dolor neque minima molestias voluptates?
      </p>
      
      {/* Compact Metrics Section */}
      <div className='flex flex-col md:flex-row md:space-x-4 text-center text-white space-y-2 md:space-y-0'>
        <div className='bg-gray-800 p-3 rounded-md shadow-sm'>
          <h2 className='text-lg font-semibold font-poppins'>Blog Posts</h2>
          <p className='text-2xl font-bold mt-1 text-orange-500'>42</p>
        </div>
        <div className='bg-gray-800 p-3 rounded-md shadow-sm'>
          <h2 className='text-lg font-semibold'>Pictures Posted</h2>
          <p className='text-2xl font-bold mt-1 text-orange-500'>15</p>
        </div>
        <div className='bg-gray-800 p-3 rounded-md shadow-sm'>
          <h2 className='text-lg font-semibold'>Engagement Activity</h2>
          <p className='text-2xl font-bold mt-1 text-orange-500'>128</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
