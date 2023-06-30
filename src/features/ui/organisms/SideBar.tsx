import React from 'react';
import SideBarCategory from '../atoms/SideBarCategory';
import SideBarItem, { SideBarItemProps } from '../molecules/SideBarItem';

const menuItems: SideBarItemProps[] = [
  {
    name: '전체 노트',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    onClick: () => {},
  },
  {
    name: '공유 노트',
    icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
    onClick: () => {},
  },
  {
    name: '휴지통',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    onClick: () => {},
  },
];

const underMenuItems: SideBarItemProps[] = [
  {
    name: '설정',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    onClick: () => {},
  },
  {
    name: '알림',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    onClick: () => {},
  },
  {
    name: '로그아웃',
    icon: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
    onClick: () => {},
  },
];

function SideBar() {
  return (
    <div className='flex flex-col top-0 left-0 w-64 bg-white border-r'>
      <div className='flex items-center justify-center h-14 border-b'>
        <div>Synote Sidebar</div>
      </div>
      <div className='overflow-y-auto overflow-x-hidden flex-grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          <SideBarCategory text='노트' key='note' />
          {menuItems.map((item) => (
            <SideBarItem
              name={item.name}
              icon={item.icon}
              onClick={item.onClick}
              key={item.name}
            />
          ))}
          <SideBarCategory text='설정' key='settings' />
          {underMenuItems.map((item) => (
            <SideBarItem
              name={item.name}
              icon={item.icon}
              onClick={item.onClick}
              key={item.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
