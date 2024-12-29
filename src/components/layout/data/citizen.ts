import { Home, MessageCircle, ShieldQuestion } from 'lucide-react';
import { NavGroup } from '../types';

export const citizenRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/eco-citizen/dashboard',
    icon: Home,
  },
  {
    title: 'How does it works?',
    url: '/eco-citizen/how-it-works',
    icon: ShieldQuestion,
  },
  {
    title: 'Messaging',
    url: '/eco-citizen/chats',
    icon: MessageCircle,
  },
  // {
  //   title: 'Shops & Customers',
  //   url: '',
  //   icon: ShoppingBag,
  //   items: [
  //     {
  //       title: 'Shops',
  //       url: '/eco-citizen/shops',
  //     },
  //     {
  //       title: 'Products',
  //       url: '/eco-citizen/products',
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
  //       url: '/eco-citizen/proxy-checks',
  //     },
  //     {
  //       title: 'Promo Coupons',
  //       url: '/eco-citizen/coupons',
  //     },
  //     {
  //       title: 'Promotions',
  //       url: '/eco-citizen/promotions',
  //     },
  //   ],
  // },
  //   {
  //     title: 'Exchanges',
  //     icon: ArrowRightLeft,
  //     url: '',
  //     items: [
  //       {
  //         title: 'Submit an offer',
  //         url: '/eco-citizen/exchanges/submit-an-offer',
  //       },
  //       {
  //         title: 'Find Exchanges',
  //         url: '/eco-citizen/exchanges',
  //       },
  //       {
  //         title: 'My Exchanges',
  //         url: '/eco-citizen/exchanges/me',
  //       },
  //       // {
  //       //   title: 'B2B Sales',
  //       //   url: '/eco-citizen/exchange/b2b-sales',
  //       // },
  //       {
  //         title: 'Legal Information',
  //         url: '/eco-citizen/exchanges/legal-info',
  //       },
  //     ],
  //   },
];
