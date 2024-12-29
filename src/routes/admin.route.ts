import Dashboard from '@/pages/students/dashboard';
import { IRoutes } from './types';

export const adminRoutes: IRoutes[] = [
  {
    title: 'Dashboard',
    url: 'dashboard',
    content: Dashboard,
  },
];
