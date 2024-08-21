'use client';
import React, { useEffect, useState } from 'react';
import { heroSlider } from './constant';
import Link from 'next/link';
import Navbar from './Navbar';

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
                <div className="slider-inner flex transition-transform duration-900 relative z-0"
                     style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'ease-in' }}>
                    {heroSlider.map((item) => (
                        <div key={item.id}
                             className="slider-item min-w-full h-screen bg-cover bg-center flex items-center justify-start text-start z-0"
                             style={{ backgroundImage: `url(${item.bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Navbar />
                            <div className="w-full lg:absolute text-start transform -translate-y-1/2 shadow-md lg:w-1/2 rounded-md mx-4 p-3 my-auto">
                                <h2 className='text-3xl text-white lg:text-5xl'>{item.title}</h2>
                                <p className='text-sm lg:text-md text-white my-4'>{item.description}</p>
                                <div className='button-container my-8'>
                                    <Link href={item.buttonLink} className='bg-orange-500 p-4 text-white'>
                                        {item.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className='hidden lg:flex space-x-2 h-[fit-content] right-10 bottom-12 rounded-md absolute z-[10]'>
                {heroSlider.map((item, index) => {
                    const isActive = currentIndex === index;
                    return (
                        <div key={item.id}
                             className={`shadow-2xl flex space-x-1 bg-gray-500/20 p-5 backdrop-blur-md rounded-lg border border-slate-200 ${isActive ? 'border-orange-500' : ''}`}>
                            <img src={item.bgImage} alt={item.title} className={`w-[100px] h-[100px] rounded-lg ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                            <div className='px-2'>
                                <h2 className='text-white font-poppins text-lg px-4'>{item.title}</h2>
                                <p className='text-sm text-white font-Josefin_Sans font-normal px-4'>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Hero;
