import React from 'react';

const SharesCard = () => {
  // Example data, replace with actual data fetching logic
  const shares = 89;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-3">
      <h2 className="text-xl font-semibold text-white">Shares</h2>
      <p className="text-2xl font-bold text-orange-500">{shares}</p>
      <p className="text-gray-500">Number of times content was shared.</p>
    </div>
  );
};

export default SharesCard;
