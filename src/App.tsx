import React, { useEffect, useState } from 'react';
import Branch from './features/ui/atoms/Branch';
import SideBar from './features/ui/organisms/SideBar';

function App() {
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
      <div className='flex flex-col flex-1 justify-center items-center'>
        <h1 className='text-3xl font-light'>Start VAD</h1>
        <button
          type='submit'
          className='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700'
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default App;
