import React from 'react';

const CommentsCard = () => {
  // Example data, replace with actual data fetching logic
  const comments = 56;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Blog Comments</h2>
      <p className="text-2xl font-bold">{comments}</p>
      <p className="text-gray-500">Number of comments on blog posts.</p>
    </div>
  );
};

export default CommentsCard;
