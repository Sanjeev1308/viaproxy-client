import { ArrowRightLeft, Home, MessageCircle } from 'lucide-react';
import { NavGroup, type SidebarData } from '../types';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: (role: string) => {
    if (role === 'student') return studentRoutes;
    return [];
  },
};

const studentRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/student/dashboard',
    icon: Home,
  },
  {
    title: 'Messaging',
    url: '/student/chats',
    icon: MessageCircle,
  },
  // {
  //   title: 'Shops & Customers',
  //   url: '',
  //   icon: ShoppingBag,
  //   items: [
  //     {
  //       title: 'Shops',
  //       url: '/student/shops',
  //     },
  //     {
  //       title: 'Products',
  //       url: '/student/products',
  //     },
  //   ],
  // },
  // {
  //   title: 'Promotions/Challenges',
  //   icon: Settings,
  //   url: '',
  //   items: [
  //     {
  //       title: 'Proxy Checks',
  //       url: '/student/proxy-checks',
  //     },
  //     {
  //       title: 'Promo Coupons',
  //       url: '/student/coupons',
  //     },
  //     {
  //       title: 'Promotions',
  //       url: '/student/promotions',
  //     },
  //   ],
  // },
  {
    title: 'Exchanges',
    icon: ArrowRightLeft,
    url: '',
    items: [
      {
        title: 'How does it works?',
        url: '/student/exchanges/how-it-works',
      },
      {
        title: 'Submit an offer',
        url: '/student/exchanges/submit-an-offer',
      },
      {
        title: 'Find Exchanges',
        url: '/student/exchanges',
      },
      // {
      //   title: 'B2B Sales',
      //   url: '/student/exchange/b2b-sales',
      // },
      {
        title: 'Legal Information',
        url: '/student/exchanges/legal-info',
      },
    ],
  },
];
