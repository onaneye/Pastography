// pages/index.js

import ViewsCard from '../Components/ViewsCard';
import CommentsCard from '../Components/CommentsCard';
import SharesCard from '../Components/SharesCard';
import EngagementTrends from '../Components/EngagmentsTrend'; // Ensure correct import
import UserTable from '../Components/UserTable';
import AdminProfile from '../Components/AdminProfile';

const HomePage = () => {
  const users = [
    { id: 1, name: 'John Doe', position: 'Manager', picture: '/images2/samuel 2.jpg', dateJoined: '2023-01-15' },
    { id: 2, name: 'Jane Smith', position: 'Secretary', picture: '/images2/samuel 2.jpg', dateJoined: '2023-02-20' },
    // Add more users as needed
  ];

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 p-4 w-full'>
        <div className='container mx-auto p-2'>
        <div className="flex-row lg:flex justify-between items-start gap-x-2">
          <ViewsCard />
          <CommentsCard />
          <SharesCard />  
        </div>
        <div className="w-full">
              <UserTable users={users} />
              <EngagementTrends />
          </div>
        </div>
        
        <div className="space-y-4">
            <div className="bg-gray-800 p-5 rounded-lg h-[800px]"><AdminProfile/></div> {/* Adjusted */}
            <div className="bg-gray-800 p-5 rounded-lg "></div> {/* Specific height */}
            <div className="bg-gray-800 p-5 rounded-lg h-auto"></div> {/* Adjusted */}
          </div>
      </div>
      
    </>
  );
};

export default HomePage;


