import React from 'react'
import Image from 'next/image'
import socialImg from "/public/images/socials-img.png"
import mainTheme from "/public/images/main-theme.png"

const Social = () => {
  return (
    <div className='mt-[10%] mb-96'>
        <div className='flex justify-between relative w-full h-12 z-0'>
            <Image src={mainTheme} className='w-full h-[250px]' alt='' />
            <div className='absolute right-40'>
              <h1 className='font-poppins text-2xl text-white text-center py-3'>Follow us</h1>
              <span></span>

            </div>
            
        </div>
        <div className='absolute  z-[10] transform translate-y-[-50%]'>
            <Image src={socialImg} alt="" />
        </div>
    </div>
  )
}

export default Social