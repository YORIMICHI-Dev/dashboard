import { CodeIcon, BrandGithubIcon, UserCircleIcon, HistoryIcon, HeartIcon, CertificateIcon, EditIcon } from 'vue-tabler-icons';

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
    title: 'Certification',
    icon: CertificateIcon,
    to: '/dashboard/certification',
  },
  {
    title: 'Hobby',
    icon: HeartIcon,
    to: '/dashboard/hobby',
  },
  { header: 'Apps' },
  {
    title: 'Repository',
    icon: BrandGithubIcon,
    to: '/apps/github',
    // chip: 'New',
    // chipColor: 'surface',
    // chipBgColor: 'secondary',
  },
  { header: 'Blog' },
  {
    title: 'Zenn',
    icon: EditIcon,
    to: 'https://zenn.dev/yorimichi',
    type: 'external'
  },
];

export default sidebarItem;
