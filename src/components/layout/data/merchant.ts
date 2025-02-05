import { Home, MessageCircle } from 'lucide-react';
import { NavGroup } from '../types';

export const merchantRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/merchant/dashboard',
    icon: Home,
  },
  //   {
  //     title: 'How does it works?',
  //     url: '/merchant/how-it-works',
  //     icon: ShieldQuestion,
  //   },
  {
    title: 'Messaging',
    url: '/merchant/chats',
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
