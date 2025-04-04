import React, { useState } from 'react';
import Navigation from './Navigation';

const FindFuelPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  // Simulate loading for 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 relative">
        {/* Map area (in a real app, this would be a map component) */}
        <div className="h-full bg-gray-200 relative">
          {/* Map buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-4">
            <button className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-md flex items-center">
              <div className="mr-3">
                <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse"></div>
              </div>
              <p className="text-gray-600 text-lg">Loading stations within 100 miles...</p>
            </div>
          )}

          {!isLoading && (
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-gray-600 mb-4">0 STATIONS IN THIS AREA</p>

              {/* Search and route controls */}
              <div className="flex gap-3">
                <div className="flex-1 relative rounded-full bg-gray-100 overflow-hidden">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Current location"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 bg-transparent border-none focus:outline-none"
                  />
                </div>
                <button className="h-12 px-6 rounded-full flex items-center gap-2 bg-red-600 text-white font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                  Route
                </button>
              </div>

              {/* Pull-up indicator */}
              <div className="flex justify-center mt-4">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navigation activePage="findFuel" />
    </div>
  );
};

export default FindFuelPage;
