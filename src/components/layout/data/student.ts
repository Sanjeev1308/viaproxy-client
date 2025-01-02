import { ArrowRightLeft, Book, Currency, Gift, Home, MessageCircle } from 'lucide-react';
import { NavGroup } from '../types';

export const studentRoutes: NavGroup[] = [
  {
    title: 'DASHBOARD',
    url: '/student/dashboard',
    icon: Home,
  },
  {
    title: 'MESSAGING',
    url: '/student/chats',
    icon: MessageCircle,
  },
  {
    title: 'BLOGS',
    url: '/student/blogs',
    icon: Book,
  },
  {
    title: 'EXCHANGES',
    icon: ArrowRightLeft,
    url: '',
    items: [
      {
        title: 'HOW_DOES_IT_WORKS',
        url: '/student/exchanges/how-it-works',
      },
      {
        title: 'SUBMIT_AN_OFFER',
        url: '/student/exchanges/submit-an-offer',
      },
      {
        title: 'FIND_EXCHANGES',
        url: '/student/exchanges',
      },
      {
        title: 'MY_EXCHANGES',
        url: '/student/exchanges/me',
      },
      {
        title: 'LEGAL_INFO',
        url: '/student/exchanges/legal-info',
      },
    ],
  },
  {
    title: 'DONATIONS',
    icon: Gift,
    url: '',
    items: [
      {
        title: 'FIND_DONATIONS',
        url: '/student/donations',
      },
      {
        title: 'MY_DONATIONS',
        url: '/student/donations/me',
      },
    ],
  },
  {
    title: 'SALES',
    icon: Currency,
    url: '',
    items: [
      {
        title: 'FIND_SALES',
        url: '/student/sales',
      },
      {
        title: 'MY_SALES',
        url: '/student/sales/me',
      },
    ],
  },
];
