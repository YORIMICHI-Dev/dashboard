import { IdIcon } from 'vue-tabler-icons';

export const osOptions = {
  chart: {
    type: 'bar',
    height: 300,
    fontFamily: `inherit`,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ['#edb4ed', '#6ac3fd'],
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '20%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Windows', 'Ubuntu', 'Miracle Linux'],
  },
  yaxis: {
    title: {
      text: 'Career (years)',
    },
  },
  fill: {
    opacity: 1,
  },
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

export const osChart = {
  // chunk name and career years
  series: [
    {
      name: 'Linux',
      data: [0, 2, 1],
    },
    {
      name: 'Windows',
      data: [2, 0, 0],
    },
  ],
};

export const osIcon = IdIcon;
