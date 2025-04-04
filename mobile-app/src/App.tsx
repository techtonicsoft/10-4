import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import TransactionsPage from './components/dashboard/TransactionsPage';
import FindFuelPage from './components/dashboard/FindFuelPage';
import MorePage from './components/dashboard/MorePage';
import ErrorPage from './components/ErrorPage';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  inviteCode: string;
  totalSavings?: number;
  fillUps?: number;
  rewardPoints?: number;
  clientId?: string;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    inviteCode: '',
    totalSavings: 0,
    fillUps: 0,
    rewardPoints: 0
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Restore user state from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // Check if we have a token or other auth indicator
        const hasAuthToken = localStorage.getItem('authToken');
        if (hasAuthToken) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error('Failed to parse stored user data');
      }
    }
  }, []);

  // Show splash screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleUserChange = (newUser: User) => {
    setUser(newUser);
    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(newUser));
  };

  const handleLogin = (email: string, password: string): boolean => {
    // In a real app, this would validate against a backend
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const storedUser = JSON.parse(storedUserData);
      if (storedUser.email === email && storedUser.password === password) {
        setIsAuthenticated(true);
        // Save auth token
        localStorage.setItem('authToken', 'dummy-token');
        return true;
      }
    }

    alert('Invalid email or password');
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  // Add some mock data for development
  const mockUser: User = {
    firstName: 'Nerlan',
    lastName: 'Sanchez',
    email: 'nerlan.sanchez@example.com',
    phone: '555-123-4567',
    password: 'Password123',
    inviteCode: '',
    totalSavings: 0.00,
    fillUps: 0,
    rewardPoints: 0,
    clientId: 'ABCD1234'
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/register"
          element={<RegistrationPage user={user} onUserChange={handleUserChange} />}
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />

        {/* Protected routes - redirect to login if not authenticated */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard user={mockUser} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/transactions"
          element={isAuthenticated ? <TransactionsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/find-fuel"
          element={isAuthenticated ? <FindFuelPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/more"
          element={isAuthenticated ? <MorePage user={mockUser} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />

        {/* Error pages */}
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/forbidden" element={<ErrorPage code={403} />} />
        <Route path="/not-found" element={<ErrorPage code={404} message="Page not found" />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
