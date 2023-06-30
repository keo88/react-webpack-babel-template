import React, { memo } from 'react';

interface SideBarCategoryProps {
  text: string;
}

function SideBarCategory({ text }: SideBarCategoryProps) {
  return (
    <li className='px-5'>
      <div className='flex flex-row items-center h-8'>
        <div className='text-sm font-light tracking-wide text-gray-500'>
          {text}
        </div>
      </div>
    </li>
  );
}

export default memo(SideBarCategory);
