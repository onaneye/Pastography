import React from 'react'
import Image from 'next/image'
import socialImg from '/public/images/socials-img.png'
import mainTheme from '/public/images/main-theme.png'
import SocialMediaIcons from './SocialMediaIcons';

const Social = () => {
  return (
    <div className=" container p-4 mt-[10%] mx-auto mb-96 relative">
      <div className="flex justify-between  w-full h-12 z-0">
        <Image src={mainTheme} className="w-full h-[250px]" alt="Main theme" />
        <div className="p-6 lg:p-0 absolute lg:right-10 lg:w-1/2 xl:right-40 ml-4">
          <h3 className="text-md pt-6 text-white font-medium uppercase font-poppins">Our Socials</h3>
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold capitalize font-poppins text-white">Get the latest from our social platforms</h1>
          <form className="subscribe-container py-4 w-full flex items-center relative">
            <input type="email" className="w-full py-4 shadow-lg focus:border-transparent focus:outline-none text-orange-600 text-xl" placeholder="Enter your email" />
            <button className="text-white p-5 bg-orange-600 shadow-lg absolute right-0">Subscribe</button>
          </form>
         <SocialMediaIcons facebook="https://facebook.com" twiter="https://twitter.com" instagram="https://instagram.com" linkedin="https://linkedin.com"/>
        </div>
      </div>
      <div className="hidden md:hidden lg:block absolute z-10 transform -translate-y-1/2 lg:left-[-100px] xl:left-[-50px] 2xl:left-0">
        <Image src={socialImg} alt="Social media" className='' />
      </div>
    </div>
  )
}

export default Social
