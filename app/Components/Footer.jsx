'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            {/* logo image */}
            <div className='w-[200px]'>
            <img src="./images/logo.png" className='my-7 w-[300px]' alt="" srcset="" />
            </div>
           
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-500 font-poppins-bold">About Us</h3>
            <p className="text-sm leading-relaxed font-Josefin_Sans">
              We are a professional photography team dedicated to capturing your special moments with creativity and precision.
            </p>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-500 font-poppins-bold">Contact Us</h3>
            <ul className="space-y-2 font-Josefin_Sans">
              <li className="text-sm">1234 Photography St, Photo City, PC 12345</li>
              <li className="text-sm">Phone: (123) 456-7890</li>
              <li className="text-sm">Email: info@example.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-500 font-poppins">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                 <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p className='font-Josefin_Sans'>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
