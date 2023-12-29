import type { profileType } from '@/types/hearderTypes/profileType';
import proUser1 from '/images/svgs/icon-account.svg';
export const profileItems: profileType[] = [
  {
    avatar: proUser1,
    title: 'My Profile',
    subtitle: 'About me',
    href: '/dashboard/profile',
  },
  // {
  //   avatar: proUser2,
  //   title: 'My Inbox',
  //   subtitle: 'Messages & Emails',
  //   href: '/',
  // },
  // {
  //   avatar: proUser3,
  //   title: 'My Tasks',
  //   subtitle: 'To-do and Daily tasks',
  //   href: '/',
  // },
];
