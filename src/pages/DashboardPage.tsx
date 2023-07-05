import React, { useEffect, useState } from 'react';
import Branch from 'features/ui/atoms/Branch';
import SideBar from 'features/ui/organisms/SideBar';
import { Outlet } from 'react-router';

function DashboardPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
      <Branch condition={windowWidth > 200}>
        <SideBar />
        <div>Width: {windowWidth}</div>
      </Branch>
      <Outlet />
    </div>
  );
}

export default DashboardPage;
