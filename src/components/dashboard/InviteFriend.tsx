import React from 'react';
import { Link } from 'react-router-dom';

const InviteFriend = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Get 250 points</h2>
      <p className="text-lg text-gray-700 mb-4">by inviting a friend to join 10-4 by WEX</p>

      <Link
        to="/invite-friend"
        className="block w-full bg-red-600 text-white text-center py-4 rounded-full font-semibold"
      >
        Send invite code
      </Link>
    </div>
  );
};

export default InviteFriend;
