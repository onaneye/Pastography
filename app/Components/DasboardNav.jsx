'use client';

import React, { useState, useEffect } from 'react';
import { faBell, faMoon, faSearch, faSun, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';

const DashboardNav = () => {
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const dashboardNavList = [
    { name: 'searchBar', icon: faSearch },
    { name: 'notification', icon: faBell },
    { name: 'toggleMode', icon: isDark ? faSun : faMoon },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/admin'); // Redirect to login if not authenticated
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin'); // Redirect to login after logout
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if (!user) {
    return <p className="text-white">Loading...</p>; // Ensure loading text is visible
  }

  

  return (
    <div className="bg-gray-800 flex items-center my-2 p-4 rounded-md w-full">
      <h3 className="text-white text-md font-poppins mr-auto">Dashboard</h3>
      <ul className="flex justify-between items-center gap-x-4 mx-6">
        {dashboardNavList.map((nav, index) => (
          <li key={index} className="text-white cursor-pointer">
            <FontAwesomeIcon icon={nav.icon} size="2x" /> {/* Adjust size as needed */}
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center">
        <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-white" /> {/* Adjust size as needed */}
        <div className="px-2">
          <span className="text-white font-semibold font-poppins text-sm">welcome,</span><br />
          <h3 className="text-white font-bold font-poppins text-lg">{user.email.slice(0, 14)}</h3>
          
        </div>
        <button
            onClick={handleLogout}
            className="mx-4 mt-4 px-2 py-1 bg-red-600 text-white rounded-md"
          >
            Logout
          </button>
      </div>
      
    </div>
  );
};

export default DashboardNav;
