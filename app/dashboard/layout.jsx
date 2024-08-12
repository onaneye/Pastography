import Sidebar from '../Components/Sidebar';


export const metadata = {
  title: "Dashboard",
  description: "Capturing beautiful moments",
};

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="hidden lg:block lg:w-72">
        <Sidebar />
      </div>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
