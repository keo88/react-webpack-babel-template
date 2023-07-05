import React from 'react';
import AuthBox from 'features/auth/components/organisms/AuthBox';

function AuthPage() {
  return (
    <div className='min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
      <div className='flex flex-col flex-1 justify-center items-center'>
        <AuthBox />
      </div>
    </div>
  );
}

export default AuthPage;
