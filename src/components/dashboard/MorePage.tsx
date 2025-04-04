import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

interface MorePageProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    clientId?: string;
  };
  onLogout: () => void;
  appVersion?: string;
}

const MorePage = ({ user, onLogout, appVersion = '1.0.24 20250219.3' }: MorePageProps) => {
  const [fingerprint, setFingerprint] = useState(false);

  // Get user initials for the avatar
  const getInitials = () => {
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  };

  const handleToggleFingerprint = () => {
    setFingerprint(!fingerprint);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">More</h1>

        {/* User Profile Section */}
        <div className="bg-white rounded-lg mb-6">
          <Link to="/profile" className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl font-bold mr-3">
                {getInitials()}
              </div>
              <span className="text-xl font-semibold">{user.firstName} {user.lastName}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Client ID Section (if available) */}
        {user.clientId && (
          <div className="bg-white rounded-lg mb-6">
            <div className="p-4">
              <h2 className="text-xl">Client Id</h2>
              <p className="text-gray-500">{user.clientId}</p>
            </div>
          </div>
        )}

        {/* Manage Section */}
        <div className="bg-white rounded-lg mb-6">
          <h2 className="px-4 pt-4 text-sm font-semibold text-gray-500 uppercase">MANAGE</h2>

          <div className="divide-y divide-gray-100">
            <Link to="/notifications" className="flex items-center justify-between p-4">
              <span className="text-xl">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <Link to="/payment-methods" className="flex items-center justify-between p-4">
              <span className="text-xl">Payment methods</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <div className="flex items-center justify-between p-4">
              <span className="text-xl">Fingerprint authentication</span>
              {/* Toggle Switch */}
              <button
                onClick={handleToggleFingerprint}
                className={`relative inline-flex h-7 w-14 items-center rounded-full ${fingerprint ? 'bg-gray-400' : 'bg-gray-300'}`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${fingerprint ? 'translate-x-8' : 'translate-x-1'}`}
                />
              </button>
            </div>

            <Link to="/rewards" className="flex items-center justify-between p-4">
              <span className="text-xl">Rewards</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <Link to="/invite-friend" className="flex items-center justify-between p-4">
              <span className="text-xl">Invite a Friend</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg mb-6">
          <h2 className="px-4 pt-4 text-sm font-semibold text-gray-500 uppercase">ABOUT</h2>

          <div className="divide-y divide-gray-100">
            <Link to="/terms" className="flex items-center justify-between p-4">
              <span className="text-xl">Terms and Conditions</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <Link to="/privacy" className="flex items-center justify-between p-4">
              <span className="text-xl">Privacy Policy</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <div className="p-4">
              <h3 className="text-xl">App version</h3>
              <p className="text-gray-500">{appVersion}</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full p-4 text-center text-red-600 text-xl font-medium"
        >
          Log out
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto">
        <Navigation activePage="more" />
      </div>
    </div>
  );
};

export default MorePage;
