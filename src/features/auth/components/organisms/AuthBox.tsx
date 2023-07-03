import React from 'react';
import googleLogo from 'assets/images/google_logo.svg';
import appleLogo from 'assets/images/apple_logo.svg';
import AuthButton from 'features/auth/components/molecules/AuthButton';
import { GOOGLE_AUTH_TEXT, APPLE_AUTH_TEXT } from 'constants/strings';

function AuthBox() {
  const authenticateWithGoogle = () => {};

  const authenticateWithApple = () => {};

  return (
    <div className='min-w-fit flex-col border bg-white px-6 py-8 shadow-md rounded-[4px] '>
      <div className='mb-8 flex justify-center'>
        <img className='w-24' src={googleLogo as string} alt='logo' />
      </div>
      <AuthButton
        imagePath={googleLogo as string}
        onClick={authenticateWithGoogle}
        text={GOOGLE_AUTH_TEXT}
      />
      <div className='h-5' />
      <AuthButton
        imagePath={appleLogo as string}
        onClick={authenticateWithApple}
        text={APPLE_AUTH_TEXT}
      />
      <div className='mt-5 flex text-center text-sm text-gray-400'>
        <p>
          This site is protected by reCAPTCHA and the Google <br />
          <a className='underline' href='/'>
            Privacy Policy
          </a>{' '}
          and{' '}
          <a className='underline' href='/'>
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}

export default AuthBox;
