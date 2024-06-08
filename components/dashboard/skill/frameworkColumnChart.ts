import { IdIcon } from 'vue-tabler-icons';

export const frameworkOptions = {
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
    categories: ['Nuxt.js', 'Next.js', '.NET', 'FastAPI', 'Django'],
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

export const frameworkChart = {
  // chunk name and career years
  series: [
    {
      name: 'Frontend',
      data: [1, 1, 0, 0, 0],
    },
    {
      name: 'Backend',
      data: [0, 0, 1, 1.5, 0.5],
    },
  ],
};

export const frameworkIcon = IdIcon;
