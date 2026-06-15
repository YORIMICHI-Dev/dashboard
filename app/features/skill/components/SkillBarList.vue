<script setup lang="ts">
interface Series {
  name: string;
  data: number[];
}

const props = defineProps<{
  categories: string[];
  series: Series[];
}>();

// 系列0=緑, 系列1=青
const BAR_COLORS = ['#22C55E', '#38BDF8'];
const TRACK_COLORS = ['rgba(34,197,94,0.14)', 'rgba(56,189,248,0.16)'];

// 各カテゴリを、値を持つ系列に割り当て（データ値は変更しない）
const items = props.categories
  .map((label, i) => {
    let si = 0;
    let best = props.series[0]?.data[i] ?? 0;
    props.series.forEach((s, idx) => {
      const v = s.data[i] ?? 0;
      if (v > best) {
        best = v;
        si = idx;
      }
    });
    return { label, value: best, group: props.series[si]?.name ?? '', idx: si };
  })
  .sort((a, b) => b.value - a.value);

const maxVal = Math.max(...items.map((it) => it.value), 0.0001);
</script>

<template>
  <div class="flex flex-col gap-[18px] mt-1">
    <div v-for="it in items" :key="it.label">
      <div class="flex justify-between items-baseline mb-2">
        <div class="flex items-baseline gap-2.5">
          <span class="font-display font-bold text-[15px] text-[#111113]">{{ it.label }}</span>
          <span class="font-mono-dc text-[10px] tracking-widest text-[#9A998F]">
            {{ it.group.toUpperCase() }}
          </span>
        </div>
        <span class="font-display font-bold text-[17px]" :style="{ color: BAR_COLORS[it.idx] }">
          {{ it.value.toFixed(1) }}
        </span>
      </div>
      <div class="h-2 rounded-full overflow-hidden" :style="{ background: TRACK_COLORS[it.idx] }">
        <div
          class="h-full rounded-full transition-[width] duration-500"
          :style="{ width: `${(it.value / maxVal) * 100}%`, background: BAR_COLORS[it.idx] }"
        />
      </div>
    </div>
  </div>
</template>
