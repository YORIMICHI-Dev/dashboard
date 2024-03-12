type recentTrans = {
  title: string;
  subtitle: string;
  textcolor: string;
  boldtext: boolean;
  line: boolean;
  link: string;
  url: string;
};

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
  {
    title: 'Currently',
    subtitle: '株式会社UNAIIT',
    textcolor: 'info',
    boldtext: true,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2024/01',
    subtitle: 'Laniakea株式会社',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2023/02',
    subtitle: '株式会社iPX',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2021/12',
    subtitle: 'KIOXIA株式会社',
    textcolor: 'secondary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2021/08',
    subtitle: '住友電気工業株式会社',
    textcolor: 'secondary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2019/03',
    subtitle: '電気通信大学大学院機械知能システム学専攻',
    textcolor: 'primary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
];

export { recentTransaction };
