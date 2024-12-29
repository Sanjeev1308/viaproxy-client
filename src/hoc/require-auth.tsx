/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { BaseService } from '@/services/base.service';
import { jwtDecode } from 'jwt-decode';
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const requireAuth = <P extends ComponentType>(WrappedComponent: ComponentType<P>) => {
  return (props: any) => {
    const { setUser, setIsAuthenticated } = useActions();
    const navigate = useNavigate();
    const { isAuthenticated } = useTypedSelector((state) => state.auth);

    useEffect(() => {
      // Check authentication on initial load
      const token = localStorage.getItem('accessToken');
      if (token) {
        const decoded: any = jwtDecode(token);
        setUser({
          id: decoded.userId,
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
        });
        BaseService.setAuthToken(token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/auth/login');
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};
