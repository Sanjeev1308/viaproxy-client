import { CreditCard, Grid, Home, Megaphone, MessageCircle, Package, Settings, User } from 'lucide-react';
import { NavGroup } from '../types';

export const adminRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: Home,
  },
  {
    title: 'Messaging',
    url: '/admin/chats',
    icon: MessageCircle,
  },
  {
    title: 'Users Management',
    url: '/admin/users',
    icon: User,
  },
  {
    title: 'Service Management',
    url: '/admin/services',
    icon: Settings,
  },
  {
    title: 'Product Management',
    url: '/admin/products',
    icon: Package,
  },
  {
    title: 'Category Management',
    url: '/admin/categories',
    icon: Grid,
  },
  {
    title: 'Transaction Management',
    url: '/admin/transactions',
    icon: CreditCard,
  },
  {
    title: 'Ads Management',
    url: '/admin/ads',
    icon: Megaphone,
  },
];
