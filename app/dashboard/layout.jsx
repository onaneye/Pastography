import DasboardNav from '../Components/DasboardNav';
import Sidebar from '../Components/Sidebar';


export const metadata = {
  title: "Dashboard",
  description: "Capturing beautiful moments",
};

const Layout = ({ children }) => {
  return (
    <div className="flex  min-h-screen bg-gray-900">
      <div className="hidden lg:block lg:w-72">
        <Sidebar />
      </div>
      <main className="flex-1 md:max-w-5xl lg:max-w-5xl xl:max-w-7xl container p-4 mx-auto">
        <DasboardNav/>
        {children}
      </main>
    </div>
  );
};

export default Layout;
