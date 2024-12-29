import { ArrowRightLeft, Home, MessageCircle, ShieldQuestion } from 'lucide-react';
import { NavGroup } from '../types';

export const studentRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/student/dashboard',
    icon: Home,
  },
  {
    title: 'How does it works?',
    url: '/student/how-it-works',
    icon: ShieldQuestion,
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
        title: 'Submit an offer',
        url: '/student/exchanges/submit-an-offer',
      },
      {
        title: 'Find Exchanges',
        url: '/student/exchanges',
      },
      {
        title: 'My Exchanges',
        url: '/student/exchanges/me',
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
