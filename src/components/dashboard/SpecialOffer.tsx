import React from 'react';

const SpecialOffer = () => {
  return (
    <div className="p-4 bg-green-100 rounded-xl flex items-start">
      <div className="mr-3 mt-1 text-teal-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.23-4.23a2.25 2.25 0 0 0 0-3.181L11.06 5.68A3 3 0 0 0 8.938 4.8H5.25ZM3.75 5.25a1.5 1.5 0 0 1 1.5-1.5h3.088c.38 0 .74.151 1.01.422l7.257 7.257a.75.75 0 0 1 0 1.06L12.53 17.5a.75.75 0 0 1-1.06 0L2.422 8.43A1.5 1.5 0 0 1 1.5 7.25V5.25a1.5 1.5 0 0 1 2.25-1.5Z" clipRule="evenodd" />
          <path d="M8.25 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-lg">Special offer</h3>
        <p className="text-md">Save an additional $20 on your first transaction of 75 gallons or more!</p>
      </div>
    </div>
  );
};

export default SpecialOffer;
