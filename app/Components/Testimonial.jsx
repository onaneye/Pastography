import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from './Rating';
import SocialMediaIcons from './SocialMediaIcons';
import { TestimonialsData } from './constant';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className=' bg-gray-900 h-auto py-12 mt-12'>
      <h3 className="text-md text-white font-medium uppercase text-center font-poppins">Our Testimonials</h3>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize text-white text-center mb-12 font-poppins'>
        What our clients say
      </h1>

      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {TestimonialsData.map((item) => (
          <div key={item.id} className='flex flex-col md:flex-row items-center bg-gray-600  shadow-2xl rounded-xl '>
            <div className='w-full h-full lg:w-[300px] lg:h-[200px]'>
              <Image
                src={item.profilePicture}
                alt={`${item.name}'s profile picture`}
                className='rounded-t-lg h-full w-full md:rounded-l-lg object-cover'
                width={200}
                height={100}
                loading='lazy'
              />
            </div>
            <div className='px-4 md:px-5'>
              <h1 className='text-xl md:text-2xl text-orange-500 font-poppins font-bold'>{item.name}</h1>
              <p className='text-white mt-2'>{item.testimony}</p>
              <Rating rating={item.rating} />
              <SocialMediaIcons
                facebook="https://facebook.com"
                twitter="https://twitter.com"
                instagram="https://instagram.com"
                linkedin="https://linkedin.com"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
