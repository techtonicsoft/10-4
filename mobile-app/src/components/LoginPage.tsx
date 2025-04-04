import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (email: string, password: string) => boolean;
}

const LoginPage = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const loginSuccess = onLogin(email, password);
      if (loginSuccess) {
        // Redirect to dashboard on successful login
        navigate('/dashboard');
      }
    }
  };

  // Eye icon for password visibility
  const EyeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );

  return (
    <div className="flex flex-col items-center p-8">
      {/* Logo */}
      <div className="mb-12 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="text-7xl font-bold tracking-tighter text-red-600">10-4</h1>
          </div>
          <div className="flex items-center">
            <p className="mr-1 text-xs font-medium text-red-600">BY</p>
            <p className="text-xl font-bold text-red-600">wex</p>
            <span className="text-xs text-red-600">™</span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border border-gray-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-lg border border-gray-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <EyeIcon />
          </button>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="mb-4">
          <Link to="/forgot-password" className="text-black text-lg font-medium">
            Forgot password?
          </Link>
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="h-6 w-6 border-gray-300"
          />
          <label htmlFor="remember-me" className="ml-2 text-lg text-black">
            Keep me logged in
          </label>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mb-6 w-full rounded-full bg-gray-200 p-4 text-lg font-semibold text-gray-600"
        >
          Log in
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-lg text-gray-700">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-black">
              Get started
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
