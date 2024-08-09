"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });

  const formInput = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock form submission
    setTimeout(() => {
      setLoading(false);
      alert('Form submitted successfully!');
      setUser({
        fullname: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div
      className='flex justify-center items-center  py-12 mt-12 bg-image bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url(/images/contact-us-bg.jpeg)` }}
    >
      <div className='flex justify-center items-center w-full max-w-4xl p-4'>
        <div className='shadow-2xl flex flex-col bg-orange-500/25 backdrop-blur-md rounded-lg border border-slate-200 w-full p-6'>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold capitalize text-white mb-12 font-poppins text-center'>
              Contact Us
            </h1>
            <div className='w-full mb-6 relative'>
              <label htmlFor="fullname" className='font-poppins-bold text-white pb-2 block'>Fullname</label>
              <input
                id='fullname'
                type="text"
                className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                name="fullname"
                value={user.fullname}
                onChange={formInput}
                placeholder="Enter Your name"
                required
              />
              <span className='text-gray-300 absolute left-0 bottom-3 mx-2'><FontAwesomeIcon icon={faUserCircle} size="2x" /></span>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
              <div className='relative'>
                <label htmlFor="email" className='font-poppins-bold text-white pb-2 block'>Email</label>
                <input
                  id='email'
                  type="email"
                  className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                  name="email"
                  value={user.email}
                  onChange={formInput}
                  placeholder="Enter Your email"
                  required
                />
                <span className='text-gray-300 absolute left-0 bottom-3 mx-2'><FontAwesomeIcon icon={faEnvelope} size="2x" /></span>
              </div>
              <div className='relative'>
                <label htmlFor="phone" className='font-poppins-bold text-white pb-2 block'>Phone</label>
                <input
                  id='phone'
                  type="tel"
                  className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                  name="phone"
                  value={user.phone}
                  onChange={formInput}
                  placeholder="Enter Your phone number"
                  required
                />
                <span className='text-gray-300 absolute left-0 bottom-3 mx-2'><FontAwesomeIcon icon={faPhone} size="2x" /></span>
              </div>
            </div>
            <div className='w-full mb-6 relative'>
              <label htmlFor="message" className='font-poppins-bold text-white pb-2 block'>Message</label>
              <textarea
                id='message'
                className='py-4 px-3 w-full rounded-lg bg-transparent border border-slate-200 shadow-sm shadow-slate-800 focus:border-orange-500 text-orange-500 font-poppins text-xl placeholder:text-lg placeholder-opacity-50 pl-12'
                name="message"
                value={user.message}
                onChange={formInput}
                placeholder="Enter Your message"
                rows="4"
                required
              />
              <span className='text-gray-300 absolute left-0 bottom-3 mx-2'><FontAwesomeIcon icon={faPaperPlane} size="2x" /></span>
            </div>
            <button
              type="submit"
              className='w-full py-3 px-6 rounded-lg bg-orange-500 text-white font-bold text-xl hover:bg-orange-600 transition-colors duration-300'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
