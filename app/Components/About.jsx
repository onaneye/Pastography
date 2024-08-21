'use client'; // Not necessary in most cases, 'use strict' is implied in modern JS

import Image from 'next/image';
import aboutImg from '/public/images/about.png';
import Social from './Social';
import WhyGodgift from './whyGodgift';

const About = () => {
  return (
    <>
    <div className='lg:flex flex-1 flex-col container mx-auto p-4 items-center justify-between mt-[10%] w-full'>
      <div className='text-container w-full xl:mx-12 px-3 md:w-full lg:w-full xl:w-[100rem]'>
        <h3 className='text-md md:text-[#00a859] lg:text-black text-sm font-medium uppercase font-poppins-bold text-center mb-6'>About Us</h3>
        <h1 className='text-3xl md:3xl lg:text-3xl xl:text-5xl font-medium  font-poppins-bold  text-center uppercase justify-start'>A dedicated team,capturing <br/>precious  <span className='text-orange-500 uppercase'>  moment with every click</span> </h1>
        <div className='mx-auto xl:w-1/2'>
         <p className='md:text-lg lg:xl xl:2xl py-4 text-gray-600 font-Josefin_Sans lg:leading-9 text-center'>God’s Gift Multimedia, located in Ota, Ogun State, Nigeria, was founded in 2019 with an initial investment of ₦1,500 ($3.65) by Adetayo Samuel. Our services primarily cater to Nigerians, constituting approximately 95% of our clientele..</p>
        </div>
      </div>
      <div className='container xl:mx-12 p-4'>
        <Image src={aboutImg} alt='about' className='w-full h-full rounded-[10px] object-cover' />
      </div>
    </div>
    <WhyGodgift/>
    <Social/>
    </>
  );
};

export default About;
