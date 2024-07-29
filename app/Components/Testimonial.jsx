import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Rating from './Rating'

const Testimonial = () => {
  return (
    <div className='bg-gray-900 h-screen mt-12'>
         <h3 className="text-md pt-6 text-white font-medium uppercase font-poppins text-center">Our Testimonials</h3>
      <h1 className='text-2xl md:2xl lg:text-3xl xl:text-5xl  font-bold capitalize font-poppins text-white text-center mb-12'>
        What our clients say
      </h1>
      <div className='testimonials-container w-[90%] mx-auto grid grid-cols-2 space-x-1'>
        <div className=' flex items-center bg-gray-600 w-full shadow-3xl  border-1 border-slate-300  rounded-xl'>
            <img src='./images/portrait-person-wearing-yellow.jpg' alt='' className='object-fit w-[200px]'/>
            <div className='px-5'>
            <h1 className='text-2xl text-orange-500 font-poppins font-bold'>John Doe</h1>
            <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo error illo aliquid dolorum inventore, molestias quibusdam explicabo quaerat fugit ea architecto! Assumenda natus quasi animi porro a et, veniam necessitatibus?</p> 
             <Rating/>   
            </div>
            
        </div>
        <div className='bg-gray-600 w-full shadow-xl  border-1 border-slate-300 py-12 px-7'>

        </div>
      </div>
    </div>
  )
}

export default Testimonial