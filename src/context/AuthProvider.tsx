/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseService } from '@/services/base.service';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define types for user and context
type User = {
  id?: string;
  name?: string;
  email?: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (accessToken: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props type for AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthRoute = (path: string) => {
    return ['/', '/auth/login', '/auth/register', '/auth/verify-email', '/auth/forgot-password'].includes(path);
  };

  useEffect(() => {
    // Check authentication on initial load
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decoded: any = jwtDecode(token);
      setUser((prev) => ({
        ...prev,
        id: decoded.userId,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
      }));
      BaseService.setAuthToken(token);
      setIsAuthenticated(true);
    } else {
      if (!isAuthRoute(location.pathname)) {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/auth/login');
      }
    }
  }, [location.pathname, navigate]);

  const login = (accessToken: string) => {
    if (accessToken) {
      const decoded: any = jwtDecode(accessToken);
      BaseService.setAuthToken(accessToken);
      setIsAuthenticated(true);
      setUser((prev) => ({
        ...prev,
        id: decoded.userId,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
      }));

      navigate(`/${decoded.role}/dashboard`);
    } else {
      console.error('Invalid token provided for login.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    navigate('/auth/login');
  };

  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
};

// Hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
