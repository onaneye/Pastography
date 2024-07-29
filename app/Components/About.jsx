'use client'; // Not necessary in most cases, 'use strict' is implied in modern JS

import Image from 'next/image';
import aboutImg from '/public/images/about.png';
import Social from './Social';

const About = () => {
  return (
    <>
    <div className='lg:flex container mx-auto p-4 justify-between mt-[10%] w-full'>
      <div className='image-container w-full'>
        <Image src={aboutImg} alt='about' className='w-[90%] h-[90%] rounded-[10px] object-cover' />
      </div>
      <div className='text-container mt-12 w-full'>
        <h3 className='text-md text-[#00a859] text-sm font-medium uppercase font-poppins-bold'>About Us</h3>
        <h1 className='text-2xl md:2xl lg:text-3xl xl:text-5xl font-bold capitalize font-poppins text-gray-900'>Bringing Clarity to Life's Moments <span className='text-orange-500'>Through Photography</span> </h1>
        <p className='md:text-lg lg:xl xl:2xl py-4 text-gray-600 font-Josefin_Sans lg:leading-9'>God’s Gift Multimedia, located in Ota, Ogun State, Nigeria, was founded in 2019 with an initial investment of ₦1,500 ($3.65) by Adetayo Samuel. Our services primarily cater to Nigerians, constituting approximately 95% of our clientele.
            Issue:
            Busy families often struggle to capture high-quality videography and photography to preserve their special moments. Professional photo studios are typically visited only on rare occasions like weddings or family portraits, leading to missed opportunities and potential business losses when clients fail to initiate contact.

            Solution:
            At God’s Gift Multimedia, we specialize in preserving cherished memories and presenting our clients in the best possible light. We prioritize building lasting relationships with our clients by providing timely reminders for photo sessions. This proactive approach ensures that no important moment goes uncaptured, fostering repeat business based on trust and reliability.

            Our commitment lies in helping families and individuals capture and preserve their most precious memories with exceptional quality and personalized service
        .</p>
      </div>
    </div>
    <Social/>
    </>
  );
};

export default About;
