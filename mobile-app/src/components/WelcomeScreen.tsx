import { Link } from 'react-router-dom';
import truckImage from '../assets/truck-sunset.jpg';

const WelcomeScreen = () => {
  return (
    <div className="relative flex h-screen w-full flex-col">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={truckImage}
          alt="Truck at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content overlaid on the image */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
        {/* Top section with title */}
        <div className="mt-20">
          <h1 className="text-5xl font-bold leading-tight">Welcome to</h1>
          <div className="mt-4">
            <div className="flex items-end">
              <h1 className="text-8xl font-bold tracking-tighter">10-4</h1>
            </div>
            <div className="flex items-center">
              <p className="mr-1 text-sm">BY</p>
              <p className="text-2xl font-bold">wex</p>
              <span className="text-xs">™</span>
            </div>
          </div>
        </div>

        {/* Bottom section with slogan and button */}
        <div className="mb-20 flex flex-col">
          <p className="mb-8 text-4xl font-bold">Diesel savings simplified</p>
          <Link
            to="/register"
            className="mb-6 w-full rounded-full bg-red-600 p-4 text-center text-lg font-semibold text-white"
          >
            Get started
          </Link>
          <div className="text-center">
            <p className="text-lg">
              Already have an account?{' '}
              <Link to="/login" className="font-bold underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
