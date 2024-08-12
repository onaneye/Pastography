import ViewsCard from '../Components/ViewsCard';
import CommentsCard from '../Components/CommentsCard';
import SharesCard from '../Components/SharesCard';
import EngagementTrends from '../Components/EngagmentsTrend';

const HomePage = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <ViewsCard/>
      <CommentsCard />
      <SharesCard />
      <div className='space-y-3'>
         <div className='bg-gray-800 p-5 h-full'></div>
         <div className='bg-gray-800 p-5 h-full'></div>
         <div className='bg-gray-800 p-5 h-full'></div>
      </div>
    </div>
    <div className='container p-4 max-w-4xl h-1/2 '>
    <EngagementTrends />
    </div>
    
    </>
  );
};

export default HomePage;
