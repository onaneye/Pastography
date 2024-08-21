"use client"
import React from 'react'

const WhyGodgift = () => {
  return (
    <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full'>
            <div className='col-span-1'>
                <h4 className='font-poppins-bold text-gray-600 text-lg uppercase'>Why Choose Us</h4>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1'>
                <p className='font-poppins-bold text-gray-600 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Ea officiis sunt magnam veniam optio iste nesciunt minima error. In
                </p>
            </div>
            <div className='col-span-1'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-black font-poppins-bold font-bold uppercase'>
                    Complete Service
                </h1>
            </div>
        </div>
    </div>
  )
}

export default WhyGodgift
