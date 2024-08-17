"use client"

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';;

const Page = () => {
    const [error, setError] = useState()
    const router = useRouter()
    const [admin, setAdmin] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
          await signInWithEmailAndPassword(auth, admin.email, admin.password);
          router.push('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
          setError(error.message);
        } finally{
            setLoading(false)
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat h-screen fixed flex justify-center items-center"
            style={{
                backgroundImage: `url(/images/contact-us-bg.jpeg), linear-gradient(rgba(255, 165, 0, 1), rgba(255, 165, 0, 1))`
            }}
        >
            <div className='shadow-2xl flex flex-col bg-orange-500/25 backdrop-blur-md rounded-lg border border-slate-200 p-6 w-[400px]'>
                <h1 className='text-white text-center text-2xl font-poppins font-bold'>Admin</h1>
                <form onSubmit={handleSubmit}>
                    <div className='w-full mb-6 relative'>
                        <label htmlFor="email" className='font-poppins-bold text-white pb-2 block'>Email</label>
                        <input
                            id='email'
                            type="email"
                            className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                            name="email"
                            value={admin.email}
                            onChange={handleChange}
                            placeholder="Enter Your email"
                            required
                        />
                        <span className='text-gray-300 absolute left-0 bottom-3 mx-2'>
                            <FontAwesomeIcon icon={faUserCircle} size="2x" />
                        </span>
                    </div>
                    <div className='w-full mb-6 relative'>
                        <label htmlFor="password" className='font-poppins-bold text-white pb-2 block'>Password</label>
                        <input
                            id='password'
                            type="password"
                            className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                            name="password"
                            value={admin.password}
                            onChange={handleChange}
                            placeholder="Enter Your password"
                            required
                        />
                        <span className='text-gray-300 absolute left-0 bottom-3 mx-2'>
                            <FontAwesomeIcon icon={faEye} size="2x" />
                        </span>
                    </div>
                    <button
                        type="submit"
                        className='w-full py-3 px-6 rounded-lg bg-orange-500 text-white font-bold text-xl hover:bg-orange-600 transition-colors duration-300'
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
