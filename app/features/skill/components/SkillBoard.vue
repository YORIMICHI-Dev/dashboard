<script setup lang="ts">
import SkillColumnChart from './SkillColumnChart.vue';
import SkillBarList from './SkillBarList.vue';
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import { columnOptions, columnChart, columnIcon } from '../composables/cordColumnChart';
import { frameworkOptions, frameworkChart, frameworkIcon } from '../composables/frameworkColumnChart';
import { azureOptions, azureChart, azureIcon } from '../composables/azureColumnChart';
import { dbOptions, dbChart, dbIcon } from '../composables/dbColumnChart';
import { osOptions, osChart, osIcon } from '../composables/osColumnChart';

const progCategories = columnOptions.xaxis.categories as string[];
const progValues = columnChart.series[0]!.data;

// ヘッダー統計（データから算出）
const languages = progCategories.length;
const frameworks = (frameworkOptions.xaxis.categories as string[]).length;
const peak = Math.max(...progValues);
const topLang = progCategories[progValues.indexOf(peak)] ?? '';
const peakCode = topLang.slice(0, 2).toUpperCase();

// type 'A' = 1系列の縦棒 / 'B' = 2系列の横バー
const cards = [
  {
    type: 'A' as const,
    title: 'Programming',
    icon: columnIcon,
    categories: progCategories,
    values: progValues,
  },
  {
    type: 'B' as const,
    title: 'Framework',
    icon: frameworkIcon,
    categories: frameworkOptions.xaxis.categories as string[],
    series: frameworkChart.series,
  },
  {
    type: 'A' as const,
    title: 'Azure',
    icon: azureIcon,
    categories: azureOptions.xaxis.categories as string[],
    values: azureChart.series[0]!.data,
  },
  {
    type: 'A' as const,
    title: 'DB',
    icon: dbIcon,
    categories: dbOptions.xaxis.categories as string[],
    values: dbChart.series[0]!.data,
  },
  {
    type: 'B' as const,
    title: 'OS',
    icon: osIcon,
    categories: osOptions.xaxis.categories as string[],
    series: osChart.series,
  },
];
</script>

<template>
  <section class="font-jp text-[#111113]">
    <!-- ===== top meta ===== -->
    <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
      <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
        SKILL — STACK & TOOLING
      </span>
      <span class="font-mono-dc text-xs text-[#9A998F]">UPDATED 2026.06</span>
    </div>

    <!-- ===== title + stats ===== -->
    <div class="mt-7 flex justify-between items-end gap-8 flex-wrap">
      <div>
        <h1 class="font-display font-bold text-[64px] sm:text-[80px] leading-[0.92] tracking-[-0.035em] m-0">
          Skillset<span class="text-[#22C55E]">.</span>
        </h1>
        <p class="mt-[18px] text-base text-[#52525A] max-w-[540px]">
          言語からフレームワーク、クラウドまで。受託開発で磨いたフルスタックのスキルセットを、年数ベースで可視化しています。
        </p>
      </div>

      <div class="flex gap-2.5">
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ languages }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            LANGUAGES
          </div>
        </div>
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ frameworks }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            FRAMEWORKS
          </div>
        </div>
        <div class="bg-[#111113] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none text-[#22C55E]">
            {{ peak.toFixed(1) }}
          </div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A9890] mt-0.5">
            PEAK · {{ peakCode }}
          </div>
        </div>
      </div>
    </div>

    <!-- ===== cards ===== -->
    <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div
        v-for="card in cards"
        :key="card.title"
        class="border border-[#E7E5DF] rounded-[20px] bg-white px-7 pt-7 pb-5"
      >
        <!-- card header -->
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2.5">
            <SharedIcon :name="card.icon" class="size-5 text-[#22C55E]" />
            <span class="font-display font-bold text-[20px] text-[#111113]">{{ card.title }}</span>
          </div>
          <span
            v-if="card.type === 'A'"
            class="font-mono-dc text-[11px] tracking-widest text-[#9A998F]"
          >
            CAREER · YEARS
          </span>
          <div v-else class="flex items-center gap-4 font-mono-dc text-[10px] text-[#9A998F]">
            <span
              v-for="(s, idx) in card.series"
              :key="s.name"
              class="inline-flex items-center gap-1.5"
            >
              <span
                class="w-2 h-2 rounded-full inline-block"
                :style="{ background: idx === 0 ? '#22C55E' : '#38BDF8' }"
              />
              {{ s.name.toUpperCase() }}
            </span>
          </div>
        </div>

        <div class="h-px bg-[#EFEEE9] my-5" />

        <!-- card body -->
        <SkillColumnChart
          v-if="card.type === 'A'"
          :categories="card.categories"
          :values="card.values!"
        />
        <SkillBarList v-else :categories="card.categories" :series="card.series!" />
      </div>
    </div>
  </section>
</template>
