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
    subtitle: 'UNAIIT Co.',
    textcolor: 'info',
    boldtext: true,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2024/01',
    subtitle: 'Laniakea Co.',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2023/02',
    subtitle: 'iPX Co.',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2021/12',
    subtitle: 'KIOXIA Co.',
    textcolor: 'secondary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2021/08',
    subtitle: 'Sumitomo Electronics Co.',
    textcolor: 'secondary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
  {
    title: '~2019/03',
    subtitle: 'Graduated from  The University of Electro-Communications',
    textcolor: 'primary',
    boldtext: false,
    line: true,
    link: '',
    url: '',
  },
];

export { recentTransaction };
