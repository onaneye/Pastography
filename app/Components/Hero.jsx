'use client';
import React, { useEffect, useState } from 'react';
import { heroSlider } from './constant';
import Link from 'next/link';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlider.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlider.length]);

    return (
        <>
        <section className='slider relative overflow-x-hidden h-screen z-0'>
            <div className="slider-inner flex transition-transform duration-900  relative z-0" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'ease-in' }}>
                {heroSlider.map((item) => (
                    <div key={item.id} 
                         className="slider-item min-w-full h-screen bg-cover bg-center flex items-center justify-start text-start z-0" 
                         style={{backgroundImage: `url(${item.bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="w-full lg:absolute text-start transform -tranlate-y-1/2  shadow-md lg:w-1/2 rounded-md mx-4 p-3 my-auto">
                            <h2 className='text-3xl text-white lg:text-5xl'>{item.title}</h2>
                            <p className='text-sm lg:text-md text-white my-4'>{item.description}</p>
                            <div className='button-container my-8'>
                                <Link href={item.buttonLink} className='bg-orange-500 p-4 text-white'>{item.buttonText}</Link>
                            </div>
                        </div>    
                    </div>
                    
                ))}
            </div>
            
           
        </section>
        <div className='hidden lg:flex space-x-2 h-[20vh] translate-x-[70%] bottom-0 rounded-md absolute z-[10]'>
                {heroSlider.map((item, index) => (
                    <div key={item.id} className={`shadow-2xl ${currentIndex === index ? '' : ''}`}>
                        <img src={item.bgImage} alt="" className={`w-[200px] h-[200px] rounded-lg shadow-xl shadow-slate-100${currentIndex === index ? 'border-1 border-gray-200' : ''}`}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Hero;
