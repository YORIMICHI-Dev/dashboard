<script setup lang="ts">
import SkillList from './SkillList.vue';
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import { SKILLS_UPDATED, skillCategories } from '../composables/skills';

const programming = skillCategories.find((c) => c.key === 'programming');
const framework = skillCategories.find((c) => c.key === 'framework');

// ヘッダー統計(データから算出)
const languages = programming?.items.length ?? 0;
const frameworks = framework?.items.length ?? 0;
const topSkill = [...(programming?.items ?? [])].sort((a, b) => b.years - a.years)[0];
const peakCode = (topSkill?.name ?? '').replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();

const featuredCategories = skillCategories.filter((c) => c.featured);
const gridCategories = skillCategories.filter((c) => !c.featured);
</script>

<template>
  <section class="font-jp text-[#111113]">
    <!-- ===== top meta ===== -->
    <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
      <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
        SKILL — STACK & TOOLING
      </span>
      <span class="font-mono-dc text-xs text-[#9A998F]">UPDATED {{ SKILLS_UPDATED }}</span>
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
            {{ topSkill ? topSkill.years.toFixed(1) : '—' }}
          </div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A9890] mt-0.5">
            PEAK · {{ peakCode }}
          </div>
        </div>
      </div>
    </div>

    <!-- ===== featured cards ===== -->
    <div
      v-for="category in featuredCategories"
      :key="category.key"
      class="mt-12 border border-[#E7E5DF] rounded-[20px] bg-white px-7 pt-7 pb-7 lg:px-9 lg:pt-8"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2.5">
          <SharedIcon :name="category.headerIcon" class="size-5 text-[#22C55E]" />
          <span class="font-display font-bold text-[22px] text-[#111113]">{{ category.title }}</span>
        </div>
        <span class="font-mono-dc text-[11px] tracking-widest text-[#9A998F]">
          CAREER · YEARS
        </span>
      </div>
      <div class="h-px bg-[#EFEEE9] my-6" />
      <SkillList :items="category.items" size="lg" />
    </div>

    <!-- ===== grid cards ===== -->
    <div class="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div
        v-for="category in gridCategories"
        :key="category.key"
        class="border border-[#E7E5DF] rounded-[20px] bg-white px-7 pt-7 pb-6"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2.5">
            <SharedIcon :name="category.headerIcon" class="size-5 text-[#22C55E]" />
            <span class="font-display font-bold text-[20px] text-[#111113]">{{ category.title }}</span>
          </div>
          <span class="font-mono-dc text-[10px] tracking-[0.14em] text-[#9A998F]">
            {{ category.items.length }} SKILLS
          </span>
        </div>
        <div class="h-px bg-[#EFEEE9] my-5" />
        <SkillList :items="category.items" size="sm" />
      </div>
    </div>
  </section>
</template>
