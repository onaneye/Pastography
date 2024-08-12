import ViewsCard from '../Components/ViewsCard';
import CommentsCard from '../Components/CommentsCard';
import SharesCard from '../Components/SharesCard';
import EngagementTrends from '../Components/EngagmentsTrend';

const HomePage = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ViewsCard/>
      <CommentsCard />
      <SharesCard />
    </div>
    <div className='container p-4 max-w-1/2 h-1/2 mx-auto'>
    <EngagementTrends />
    </div>
    
    </>
  );
};

export default HomePage;
