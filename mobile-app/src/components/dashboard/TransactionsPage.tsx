import React from 'react';
import Navigation from './Navigation';

const TransactionsPage = () => {
  // In a real app, transactions would be fetched from an API or passed as props
  const hasTransactions = false;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-4">
        {/* Empty transactions state */}
        {!hasTransactions && (
          <div className="flex flex-col items-center justify-center h-full bg-white rounded-lg p-10 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">No transactions yet</h2>
            <p className="text-gray-500 text-center mb-8">
              Transaction receipts will appear here after fueling up
            </p>
            <button className="w-full py-4 bg-white border border-gray-300 rounded-full text-gray-700 font-semibold">
              Find fuel
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <Navigation activePage="transactions" />
    </div>
  );
};

export default TransactionsPage;
