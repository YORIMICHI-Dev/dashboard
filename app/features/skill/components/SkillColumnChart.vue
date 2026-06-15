<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps<{
  categories: string[];
  values: number[];
}>();

const GREEN = '#22C55E';
// 強調以外はやわらかい淡い緑で、緑系のモノトーンに統一
const GREEN_SOFT = '#86D9A8';

// 値の降順に並べ替え（データ値は変更しない）
const pairs = props.categories
  .map((label, i) => ({ label, value: props.values[i] ?? 0 }))
  .sort((a, b) => b.value - a.value);

const labels = pairs.map((p) => p.label);
const data = pairs.map((p) => p.value);
// 先頭（最大値）のみ濃い緑、その他は淡い緑
const colors = data.map((_, i) => (i === 0 ? GREEN : GREEN_SOFT));
// ラベルがバー上に十分収まるようヘッドルームを確保（数字の重なり防止）
const headroom = Math.max(...data) * 1.35;

const chartOptions = {
  chart: { type: 'bar', height: 300, fontFamily: 'inherit', toolbar: { show: false } },
  plotOptions: {
    bar: {
      columnWidth: '55%',
      borderRadius: 6,
      borderRadiusApplication: 'end',
      distributed: true,
      dataLabels: { position: 'top' },
    },
  },
  colors,
  dataLabels: {
    enabled: true,
    formatter: (v: number) => v.toFixed(1),
    offsetY: -16,
    style: {
      fontSize: '13px',
      fontWeight: 700,
      fontFamily: "'Space Grotesk', sans-serif",
      colors: ['#111113'],
    },
  },
  legend: { show: false },
  grid: { show: false, padding: { top: 16, left: 0, right: 0 } },
  xaxis: {
    categories: labels,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: { fontFamily: "'Space Mono', monospace", fontSize: '12px', colors: '#8A8980' },
    },
  },
  yaxis: { show: false, max: headroom },
  tooltip: { enabled: false },
  states: { hover: { filter: { type: 'none' } }, active: { filter: { type: 'none' } } },
};

const series = [{ name: 'years', data }];
</script>

<template>
  <client-only>
    <VueApexCharts type="bar" height="300" :options="chartOptions" :series="series" />
  </client-only>
</template>
