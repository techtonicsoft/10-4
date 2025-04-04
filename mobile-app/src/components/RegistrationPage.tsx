import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  inviteCode: string;
}

interface RegistrationPageProps {
  user: User;
  onUserChange: (user: User) => void;
}

const RegistrationPage = ({ user, onUserChange }: RegistrationPageProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasMinLength = password.length >= 8;
    const hasEmailPart = user.email ? password.includes(user.email) : false;

    return hasUpperCase && hasLowerCase && hasNumber && hasMinLength && !hasEmailPart;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      onUserChange({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validate fields
    if (!user.firstName) newErrors.firstName = 'First name is required';
    if (!user.lastName) newErrors.lastName = 'Last name is required';
    if (!user.email) newErrors.email = 'Email is required';
    if (!user.phone) newErrors.phone = 'Phone number is required';

    if (!user.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(user.password)) {
      newErrors.password = 'Password does not meet requirements';
    }

    if (confirmPassword !== user.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, save data and redirect to dashboard
    localStorage.setItem('userData', JSON.stringify(user));

    // Set authentication token
    localStorage.setItem('authToken', 'dummy-token');

    // Redirect to dashboard
    navigate('/dashboard');
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

  // Eye-slash icon for password visibility
  const EyeSlashIcon = () => (
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
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );

  return (
    <div className="flex flex-col p-6 text-slate-700">
      {/* Back button */}
      <div className="mb-6 flex items-center">
        <button className="p-2 text-2xl font-bold" onClick={() => navigate(-1)}>&larr;</button>
        <h1 className="text-2xl font-bold">Create free account</h1>
      </div>

      <p className="mb-8 text-lg text-slate-500">
        Enter your information and create a password
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* First Name */}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={user.firstName}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.firstName ? 'border-red-500' : ''
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={user.lastName}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.lastName ? 'border-red-500' : ''
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={user.phone}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.phone ? 'border-red-500' : ''
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
          <p className="mt-1 text-xs text-slate-400">
            Must be at least 8 characters, include 1 upper case letter, 1 lower
            case letter, 1 number, and cannot include part of the email
          </p>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChange}
            className={`w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Invite Code */}
        <div>
          <input
            type="text"
            name="inviteCode"
            placeholder="Invite code (Optional)"
            value={user.inviteCode}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 p-4 text-lg focus:border-blue-500 focus:outline-none"
          />
          <p className="mt-1 text-xs text-slate-400">
            Enter your friend's invite code if you were invited to the app
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 rounded-lg bg-blue-600 p-4 text-lg font-semibold text-white hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
