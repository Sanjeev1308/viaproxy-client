import { type SidebarData } from '../types';
import { adminRoutes } from './admin';
import { citizenRoutes } from './citizen';
import { merchantRoutes } from './merchant';
import { studentRoutes } from './student';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: (role: string) => {
    switch (role) {
      case 'admin':
        return adminRoutes;

      case 'student':
        return studentRoutes;

      case 'eco-citizen':
        return citizenRoutes;

      case 'merchant':
        return merchantRoutes;

      default:
        return [];
    }
  },
};
