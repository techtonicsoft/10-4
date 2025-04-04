import { useEffect } from 'react';

const SplashScreen = () => {
  // Add styling for mobile view
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-red-600 fade-in">
      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* Logo with subtle design elements to match the provided image */}
        <div className="relative flex flex-col items-center">
          {/* Circular background elements (subtle) */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-red-700 opacity-20"></div>
          <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-red-700 opacity-20"></div>

          {/* Logo text */}
          <div className="flex flex-col items-center">
            <h1 className="text-9xl font-bold tracking-tighter text-white">10-4</h1>
            <div className="mt-2 flex items-center">
              <p className="mr-1 text-lg font-medium text-white">BY</p>
              <p className="text-3xl font-bold text-white">wex</p>
              <span className="text-xs text-white">™</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
