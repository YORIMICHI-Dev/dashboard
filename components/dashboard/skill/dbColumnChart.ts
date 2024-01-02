import { DatabaseCogIcon } from 'vue-tabler-icons';

export const dbOptions = {
  chart: {
    type: 'bar',
    height: 300,
    fontFamily: `inherit`,
    toolbar: {
      show: false,
    },
  },
  // colors: ['#fb7cf1', '#6ac3fd', '#3a34fd', '#46ac3fd', '#asc3fd', ],
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '20%',
      distributed: true,
    },
  },
  colors: [
    '#33b2df',
    '#ddb1fa',
    '#d4526e',
    '#13d8aa',
    '#A5978B',
    '#2b908f',
    '#f9a3a4',
    '#90ee7e',
    '#f48024',
    '#69d2e7',
  ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['PostgreSQL', 'HDF', 'MySQL', 'SQL Server'],
  },
  yaxis: {
    title: {
      text: 'Career (years)',
    },
  },
  fill: {},
  tooltip: {
    theme: 'dark',
    y: {
      formatter(val: string) {
        return `${val} years`;
      },
    },
  },
  grid: {
    show: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    width: '50px',
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false,
        },
      },
    },
  ],
};

export const dbChart = {
  // chunk name and career years
  series: [
    {
      name: 'On work',
      data: [1, 1, 0.5, 0.5],
    },
  ],
};

export const dbIcon = DatabaseCogIcon;
