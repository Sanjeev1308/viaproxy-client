import { Gift, Home, Settings2, User } from 'lucide-react';
import { NavGroup } from '../types';

export const adminRoutes: NavGroup[] = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: Home,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: User,
  },
  {
    title: 'Promotions',
    url: '/admin/promotions',
    icon: Gift,
  },
  {
    title: 'Ads',
    url: '/admin/ads',
    icon: Settings2,
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
