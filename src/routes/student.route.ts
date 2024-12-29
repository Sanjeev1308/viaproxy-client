import ComingSoon from '@/components/coming-soon';
import Dashboard from '@/pages/students/dashboard';
import { Exchanges } from '@/pages/students/exchanges/find-exchanges';
import HowItWorks from '@/pages/students/exchanges/how-it-works';
import SubmitOffer from '@/pages/students/exchanges/submit-an-offer';
import EditExchangeOffer from '@/pages/students/exchanges/submit-an-offer/edit-exchange';
import NewExchangeOffer from '@/pages/students/exchanges/submit-an-offer/new-exchange';
import Chats from '@/pages/students/messaging';
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
        content: ComingSoon,
      },
      {
        title: 'Products',
        url: '/student/products',
        content: ComingSoon,
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
        content: ComingSoon,
      },
      {
        title: 'Promo Coupons',
        url: '/student/coupons',
        content: ComingSoon,
      },
      {
        title: 'Promotions',
        url: '/student/promotions',
        content: ComingSoon,
      },
    ],
  },
  {
    title: 'Exchanges',
    icon: Settings,
    url: '',
    routeChildren: [
      {
        title: 'Legal Information',
        url: '/student/exchanges/legal-info',
        content: ComingSoon,
      },
      {
        title: 'How does it works?',
        url: '/student/exchanges/how-it-works',
        content: HowItWorks,
      },
      {
        title: 'Submit an offer',
        url: '/student/exchanges/submit-an-offer',
        content: SubmitOffer,
      },
      {
        title: '',
        url: '/student/exchanges/new',
        content: NewExchangeOffer,
      },
      {
        title: '',
        url: '/student/exchanges/:id',
        content: EditExchangeOffer,
      },
      {
        title: 'B2B Exchanges',
        url: '/student/exchanges',
        content: Exchanges,
      },
      {
        title: 'B2B Sales',
        url: '/student/exchange/b2b-sales',
        content: ComingSoon,
      },
    ],
  },
];
