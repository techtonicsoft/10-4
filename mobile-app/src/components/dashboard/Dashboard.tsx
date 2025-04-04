import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import SpecialOffer from './SpecialOffer';
import RewardProgress from './RewardProgress';
import InviteFriend from './InviteFriend';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  totalSavings?: number;
  fillUps?: number;
  rewardPoints?: number;
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  // Update the greeting based on the time of day
  useEffect(() => {
    const updateGreeting = () => {
      const hour = currentTime.getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good morning');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();

    // Update current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      updateGreeting();
    }, 60000);

    return () => clearInterval(interval);
  }, [currentTime]);

  // Set default values if not provided
  const totalSavings = user.totalSavings || 0.00;
  const fillUps = user.fillUps || 0;
  const rewardPoints = user.rewardPoints || 0;

  // Get user initials for the avatar
  const getInitials = () => {
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col p-6 pb-0">
        {/* Special Offer Banner */}
        <SpecialOffer />

        {/* User Greeting Section */}
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <div className="flex items-center">
            {/* User Avatar */}
            <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold">
              {getInitials()}
            </div>

            {/* Greeting */}
            <div className="ml-4">
              <h2 className="text-gray-500 text-2xl">{greeting}</h2>
              <h1 className="text-black text-3xl font-bold">{user.firstName} {user.lastName}</h1>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-6">
            <div>
              <p className="text-lg text-gray-600">Total savings</p>
              <p className="text-4xl font-bold">${totalSavings.toFixed(2)}</p>
            </div>
            <div className="border-l border-gray-300 pl-6">
              <p className="text-lg text-gray-600">Fill ups</p>
              <p className="text-4xl font-bold">{fillUps}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reward Section */}
      <div className="px-6 mt-6">
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Unlock May bonus</h2>
          <div className="mb-2">
            <p className="text-4xl font-bold">{rewardPoints}</p>
            <p className="text-gray-600">Reward points</p>
          </div>

          <RewardProgress points={rewardPoints} />

          <p className="text-sm text-gray-600 mt-2">1 gallon = 1 point</p>
        </div>
      </div>

      {/* Invite Friend Section */}
      <div className="px-6 mt-6">
        <InviteFriend />
      </div>

      {/* Navigation */}
      <div className="mt-auto">
        <Navigation activePage="dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
