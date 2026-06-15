export interface menu {
  header?: string;
  title?: string;
  icon?: string;
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
    icon: 'user-circle',
    chipColor: 'surface',
    chipBgColor: 'secondary',
    to: '/',
  },
  {
    title: 'Skill',
    icon: 'code',
    to: '/skill',
  },
  {
    title: 'History',
    icon: 'history',
    to: '/history',
  },
  {
    title: 'Certification',
    icon: 'certificate',
    to: '/certification',
  },
  { header: 'Blog' },
  {
    title: 'Zenn',
    icon: 'zenn',
    to: 'https://zenn.dev/yorimichi',
    type: 'external',
  },
];

export default sidebarItem;
