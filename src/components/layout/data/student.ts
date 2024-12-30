import { ArrowRightLeft, Book, Currency, Gift, Home, MessageCircle } from 'lucide-react';
import { NavGroup } from '../types';

export const studentRoutes: NavGroup[] = [
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
  {
    title: 'Blogs',
    url: '/student/blogs',
    icon: Book,
  },
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
      {
        title: 'My Exchanges',
        url: '/student/exchanges/me',
      },
      {
        title: 'Legal Information',
        url: '/student/exchanges/legal-info',
      },
    ],
  },
  {
    title: 'Donation',
    icon: Gift,
    url: '',
    items: [
      {
        title: 'Find Donations',
        url: '/student/donations',
      },
      {
        title: 'My Donations',
        url: '/student/donations/me',
      },
    ],
  },
  {
    title: 'Sales',
    icon: Currency,
    url: '',
    items: [
      {
        title: 'Find Sales',
        url: '/student/sales',
      },
      {
        title: 'My Sales',
        url: '/student/sales/me',
      },
    ],
  },
];
