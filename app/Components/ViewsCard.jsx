import React from 'react';

const ViewsCard = () => {
  // Example data, replace with actual data fetching logic
  const views = 1.4;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-white ">Picture Views</h2>
      <p className="text-2xl font-bold font-Josefin_Sans text-orange-500">{views}k</p>
      <p className="font-Josefin_Sans text-gray-500">Number of people who viewed pictures.</p>
    </div>
  );
};

export default ViewsCard;
