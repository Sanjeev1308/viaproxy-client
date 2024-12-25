import Dashboard from '@/pages/customers/dashboard';
import Chats from '@/pages/customers/messaging';
import { Shops } from '@/pages/customers/shops';
import { Home, MessageCircle, Settings, ShoppingBag } from 'lucide-react';
import { IRoutes } from './types';

export const studentRoutes: IRoutes[] = [
  {
    title: 'Dashboard',
    url: '/student/dashboard',
    content: Dashboard,
    icon: Home,
  },
  {
    title: 'Messaging',
    url: '/student/chats',
    content: Chats,
    icon: MessageCircle,
  },
  {
    title: 'Shops & Customers',
    url: '',
    icon: ShoppingBag,
    routeChildren: [
      {
        title: 'Shops',
        url: '/student/shops',
        content: Shops,
      },
      {
        title: 'Products',
        url: '/student/products',
        content: Shops,
      },
    ],
  },
  {
    title: 'Promotions/Challenges',
    icon: Settings,
    url: '',
    routeChildren: [
      {
        title: 'Proxy Checks',
        url: '/student/proxy-checks',
        content: Shops,
      },
      {
        title: 'Promo Coupons',
        url: '/student/coupons',
        content: Shops,
      },
      {
        title: 'Promotions',
        url: '/student/promotions',
        content: Shops,
      },
    ],
  },
  {
    title: 'Exchanges',
    icon: Settings,
    url: '',
    routeChildren: [
      {
        title: 'How does it works?',
        url: '/student/exchange/how-it-works',
        content: Shops,
      },
      {
        title: 'B2B Exchanges',
        url: '/student/exchange/b2b-exchanges',
        content: Shops,
      },
      {
        title: 'B2B Sales',
        url: '/student/exchange/b2b-sales',
        content: Shops,
      },
      {
        title: 'Legal Information',
        url: '/student/exchange/legal-info',
        content: Shops,
      },
    ],
  },
];
