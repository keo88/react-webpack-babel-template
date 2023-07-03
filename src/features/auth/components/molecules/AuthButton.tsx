import React from 'react';

interface AuthButtonProps {
  onClick: () => void;
  imagePath: string;
  text: string;
}

function AuthButton({ imagePath, onClick, text }: AuthButtonProps) {
  return (
    <button
      className='w-full border bg-gradient-to-r from-stone-100 bg-stone-100 text-neutral-900 rounded-[4px] hover:bg-white scale-105 duration-300'
      type='submit'
      onClick={onClick}
    >
      <div className='flex flex-row items-center justify-center'>
        <img className='h-8 w-8 left-1 absolute' src={imagePath} alt='' />
        <span className='ml-5 m-2'>{text}</span>
      </div>
    </button>
  );
}

export default AuthButton;
