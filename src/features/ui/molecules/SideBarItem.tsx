import React, { memo } from 'react';
import Icon from '../atoms/Icon';

export interface SideBarItemProps {
  name: string;
  icon: string;
  onClick: () => void;
}

function SideBarItem({ icon, name, onClick }: SideBarItemProps) {
  return (
    <li>
      <button type='button' onClick={onClick} className='w-full'>
        <div className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
          <Icon svgString={icon} width={5} height={5} />
          <span className='ml-2 text-sm tracking-wide truncate'>{name}</span>
        </div>
      </button>
    </li>
  );
}

export default memo(SideBarItem);
