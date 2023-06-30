import React, { memo } from 'react';

interface IconProps {
  svgString: string;
  width?: number;
  height?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Icon({ svgString, width, height }: IconProps) {
  return (
    <span className='inline-flex justify-center items-center ml-4'>
      <svg
        className='w-5 h-5'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d={svgString}
        />
      </svg>
    </span>
  );
}

Icon.defaultProps = {
  width: 5,
  height: 5,
};

export default memo(Icon);
