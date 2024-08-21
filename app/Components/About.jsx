'use client'; // Not necessary in most cases, 'use strict' is implied in modern JS

import Image from 'next/image';
import aboutImg from '/public/images/about.png';
import Social from './Social';


const About = () => {
  const servicePackcage = [
    {
      id: 1,
      title: "complete service",
      text: "Get your preffred photographer for every occasion"
    },
    {
      id: 2,
      title: "unlimited editing",
      text:"Awesome editing to get the best photo possible"
    },
    {
      id: 3,
      title: "fixed rate",
      text: "Easy booking service with fixed rate"
    },
    {
      id: 4,
      title: "Secured payment",
      text: "Payment to photographer when photo is delivered"
    }
  ]
  return (
    <div>
    <div className='lg:flex flex-1 flex-col container mx-auto p-4 items-center justify-between mt-[10%] w-full'>
      <div className='text-container w-full xl:mx-12 px-3 md:w-full lg:w-full xl:w-[100rem]'>
        <h3 className=' text-center mb-6 font-montserrat text-orange-500 text-lg uppercase'>About Us</h3>
        <h1 className='text-4xl md:5xl lg:text-6xl xl:text-5xl font-mona font-bold  text-center uppercase justify-start w-full'>A dedicated team,capturing <br/>precious  <span className=' uppercase'>  moment with every click</span> </h1>
        <div className='mx-auto xl:w-1/2'>
         <p className='md:text-lg lg:xl xl:2xl py-4 text-gray-600 font-Josefin_Sans lg:leading-9 text-center'>God’s Gift Multimedia, located in Ota, Ogun State, Nigeria, was founded in 2019 with an initial investment of ₦1,500 ($3.65) by Adetayo Samuel. Our services primarily cater to Nigerians, constituting approximately 95% of our clientele..</p>
        </div>
      </div>
      <div className='container xl:mx-12 p-4'>
        <Image src={aboutImg} alt='about' className='w-full h-full rounded-[10px] object-cover' />
      </div>
    </div>
    <div className='w-full lg:container lg:mx-16 lg:p-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[2fr_2fr] lg:gap-16 lg:p-2 w-full'>
            <div className='lg:flex lg:justify-between lg:gap-x-4'>
                <h4 className='text-center md:text-start mb-6 font-montserrat text-orange-500 text-lg uppercase'>Why Choose Us</h4>
                <p className='px-2 text-center font-montserrat text-gray-600 text-lg lg:text-start lg:w-1/2'>
                  We create visual stories that provides unique experience. With our dedication to exploring the beauty in every moment, we offer more than just images-we capture
                  the emotion, intimacy, and uniqunes that makes every moment worthwhile
                </p>
            </div>
            <div className='col-span-1'>
              {servicePackcage.map((item)=>(
                 <div  key={item.id}>
                    <h1 className='px-2 text-center text-4xl md:text-5xl lg:text-5xl text-black  font-bold uppercase font-helvetica lg:text-start tracking-tight'>
                        {item.title}
                    </h1>
                    <p className='px-2 py-4 lg:px-5 text-center font-montserrat text-gray-600 text-lg lg:text-start lg:w-1/2'>
                        {item.text}
                    </p>
                </div>
              ))}
            </div>
           
        </div>
    </div>
    <Social/>
    </div>
  );
};

export default About;
