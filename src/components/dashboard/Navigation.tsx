import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activePage: 'dashboard' | 'findFuel' | 'transactions' | 'more';
}

const Navigation = ({ activePage }: NavigationProps) => {
  const navItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      path: '/dashboard',
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )
    },
    {
      id: 'findFuel',
      name: 'Find Fuel',
      path: '/find-fuel',
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
          />
        </svg>
      )
    },
    {
      id: 'transactions',
      name: 'Transactions',
      path: '/transactions',
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )
    },
    {
      id: 'more',
      name: 'More',
      path: '/more',
      icon: (isActive: boolean) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )
    }
  ];

  return (
    <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-4
                ${isActive ? 'text-black' : 'text-gray-600'}`}
            >
              {item.icon(isActive)}
              <span className="text-xs mt-1">{item.name}</span>
              {isActive && (
                <div className="h-1 w-full bg-gray-200 rounded-full mt-1">
                  <div className="h-full w-full bg-gray-500 rounded-full"></div>
                </div>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Navigation;
