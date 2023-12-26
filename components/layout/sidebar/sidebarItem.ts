import {
  CodeIcon,
  BrandGithubIcon,
  UserCircleIcon,
  HistoryIcon,
  HeartIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Profile',
    icon: UserCircleIcon,
    chip: 'New',
    chipColor: 'surface',
    chipBgColor: 'secondary',
    to: '/dashboard/profile',
  },
  {
    title: 'Skill',
    icon: CodeIcon,
    to: '/dashboard/skill',
  },
  {
    title: 'History',
    icon: HistoryIcon,
    to: '/dashboard/history',
  },
  {
    title: 'Hobby',
    icon: HeartIcon,
    to: '/dashboard/hobby',
  },
  { header: 'Apps' },
  {
    title: 'Github Repository',
    icon: BrandGithubIcon,
    to: '/apps/github',
    chip: '1',
    chipColor: 'surface',
    chipBgColor: 'secondary',
  },

  // {
  //   title: 'Blog',
  //   icon: ChartDonut3Icon,
  //   to: '/',
  //   children: [
  //     {
  //       title: 'Posts',
  //       icon: PointIcon,
  //       to: '/apps/blog/posts',
  //     },
  //     {
  //       title: 'Detail',
  //       icon: PointIcon,
  //       to: '/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
  //     },
  //   ],
  // },
];

export default sidebarItem;
