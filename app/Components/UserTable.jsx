// components/UserTable.js
'use client'

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/UserTable.module.css'; // Import the CSS module

const UserTable = ({ users }) => {
  const [userList, setUserList] = useState(users);

  const handleRemove = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  return (
    <div className="overflow-x-auto mb-7 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-white m-5 px-auto font-poppins font-bold text-2xl">Workforce</h3>
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr className="text-white bg-gray-900">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Position</th>
            <th className="px-4 py-2 text-left">Date Joined</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 nth:child(even):bg-gray-800">
          {userList.map(user => (
            <tr key={user.id} className={styles.tableRow}>
              <td className="px-4 py-2 flex items-center gap-x-2">
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full w-[50px] h-[50px]"
                />
                <span className='text-white font-bold font-poppins'>{user.name}</span>
              </td>
              <td className="px-4 py-2 text-white">{user.position}</td>
              <td className="px-4 py-2 text-white">{new Date(user.dateJoined).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleRemove(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
