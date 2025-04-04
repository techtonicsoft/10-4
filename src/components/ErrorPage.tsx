import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  code?: number;
  message?: string;
}

const ErrorPage = ({ code = 403, message = "You don't have permission to access this page." }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      {/* Logo */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-red-600">wex</h1>
      </div>

      {/* Error code */}
      <h2 className="text-8xl font-bold text-red-500 mb-4">{code}</h2>

      {/* Error title */}
      <h3 className="text-3xl font-bold text-gray-700 mb-4">Access Forbidden</h3>

      {/* Error message */}
      <p className="text-xl text-gray-500 mb-8">{message}</p>

      {/* Action button */}
      <Link
        to="/dashboard"
        className="w-full max-w-xs bg-white border border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-lg"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
