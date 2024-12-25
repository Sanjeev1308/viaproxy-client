import { studentRoutes } from '@/routes/student.route';
import { type SidebarData } from '../types';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  // navGroups: [
  //   {
  //     title: '',
  //     items: [
  //       {
  //         title: 'Dashboard',
  //         url: '/student/dashboard',
  //         icon: Home,
  //       },
  //       {
  //         title: 'Messaging',
  //         url: '/student/chats',
  //         badge: '3',
  //         icon: MessageCircle,
  //       },
  //       {
  //         title: 'Shops & Customers',
  //         icon: ShoppingBag,
  //         items: [
  //           {
  //             title: 'Shops',
  //             url: '/shops',
  //           },
  //           {
  //             title: 'Products',
  //             url: '/products',
  //           },
  //           {
  //             title: 'Customers',
  //             url: '/customers',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Promotions/Challenges',
  //         icon: Settings,
  //         items: [
  //           {
  //             title: 'Proxy Checks',
  //             url: '/proxy-checks',
  //           },
  //           {
  //             title: 'Promo Coupons',
  //             url: '/coupons',
  //           },
  //           {
  //             title: 'Promotions',
  //             url: '/promotions',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Exchanges',
  //         icon: Settings,
  //         items: [
  //           {
  //             title: 'How does it works?',
  //             url: '/how-it-works',
  //           },
  //           {
  //             title: 'B2B Exchanges',
  //             url: '/b2b-exchanges',
  //           },
  //           {
  //             title: 'B2B Sales',
  //             url: '/b2b-sales',
  //           },
  //           {
  //             title: 'Legal Information',
  //             url: '/legal-info',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
  navGroups: studentRoutes,
};
