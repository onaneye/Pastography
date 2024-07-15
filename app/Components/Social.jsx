import React from 'react'
import Image from 'next/image'
import socialImg from "/public/images/socials-img.png"
import mainTheme from "/public/images/main-theme.png"

const Social = () => {
  return (
    <div className='mt-[10%] mb-96'>
        <div className='flex justify-between relative w-full h-12 z-0'>
            <Image src={mainTheme} className='w-full h-[250px]' alt='' />
            <div className='flex flex-col justify-center lg:absolute right-40'>
            <h3 className='text-md pt-6 text-white text-sm font-medium uppercase font-raleway'>Our Socials</h3>
            <h1 className='text-2xl md:2xl lg:text-3xl xl:text-4xl font-bold capitalize font-poppins text-white'>Getting the latest from our social platforms</h1>
            <form className='subscribe-container py-4 w-full flex items-center'>
              <input type="email" className='w-full py-4 shadow-lg focus:border-transparent focus:outline-none text-orange-600 relative text-xl' name="" id="" />
              <button className='text-white p-5 bg-orange-600 shadow-lg absolute right-0'>Subscribe</button>
            </form>
            <div className='social-media-container'>

            </div>
             
            </div>
            
        </div>
        <div className='hidden lg:block absolute  z-[10] transform translate-y-[-50%]'>
            <Image src={socialImg} alt="" />
        </div>
    </div>
  )
}

export default Social