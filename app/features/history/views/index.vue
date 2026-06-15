<script setup lang="ts">
import { companies } from '../composables/history';

const TITLE = 'History';
useHead({ title: TITLE });

const projectCount = companies.reduce((n, c) => n + c.projects.length, 0);
const companyCount = companies.length;
</script>

<template>
  <section class="font-jp text-[#111113]">
    <!-- ===== top meta ===== -->
    <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
      <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
        HISTORY — WORK & PROJECTS
      </span>
      <span class="font-mono-dc text-xs text-[#9A998F]">UPDATED 2026.06</span>
    </div>

    <!-- ===== title + stats ===== -->
    <div class="mt-7 flex justify-between items-end gap-8 flex-wrap">
      <div>
        <h1 class="font-display font-bold text-[64px] sm:text-[80px] leading-[0.92] tracking-[-0.035em] m-0">
          History<span class="text-[#22C55E]">.</span>
        </h1>
        <p class="mt-[18px] text-base text-[#52525A] max-w-[540px]">
          受託開発の現場で担ってきたプロジェクトの記録。要件定義から実装、クラウド設計・運用まで、フルスタックでの関わりを企業ごとにまとめています。
        </p>
      </div>
      <div class="flex gap-2.5">
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ projectCount }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            PROJECTS
          </div>
        </div>
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ companyCount }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            COMPANIES
          </div>
        </div>
        <div class="bg-[#111113] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none text-[#22C55E]">2019</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A9890] mt-0.5">SINCE</div>
        </div>
      </div>
    </div>

    <!-- ===== companies ===== -->
    <template v-for="(company, ci) in companies" :key="company.name">
      <!-- company divider -->
      <div
        class="mt-11 flex items-baseline gap-4 pb-3.5 flex-wrap"
        :class="company.current ? 'border-b-2 border-[#111113]' : 'border-b-2 border-[#DEDCD4]'"
      >
        <h2
          class="font-display font-bold text-[28px] tracking-[-0.02em] m-0"
          :class="company.current ? '' : 'text-[#52525A]'"
        >
          {{ company.name }}
        </h2>
        <span
          class="font-mono-dc text-xs"
          :class="company.current ? 'text-[#1A9E5E]' : 'text-[#1184C7]'"
        >
          {{ company.period }}
        </span>
        <div class="flex-1" />
        <span class="font-mono-dc text-[11px] tracking-[0.12em] text-[#9A998F]">
          {{ company.role }}
        </span>
      </div>

      <!-- project cards -->
      <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div
          v-for="project in company.projects"
          :key="project.title"
          class="proj-card bg-white border border-[#E7E5DF] rounded-[20px] p-[30px] min-w-0"
        >
          <div class="flex justify-between items-center gap-3">
            <span class="font-mono-dc text-xs tracking-[0.08em] text-[#9A998F]">
              {{ project.period }}
            </span>
            <span
              v-if="project.phase"
              class="font-mono-dc text-[11px] tracking-[0.1em] text-[#1A9E5E] border border-[#BFE9CF] bg-[#EAF8F0] px-[11px] py-1 rounded-full shrink-0"
            >
              {{ project.phase }}
            </span>
          </div>
          <h3 class="font-display font-bold text-xl leading-[1.4] tracking-[-0.01em] mt-3.5">
            {{ project.title }}
          </h3>
          <div class="h-px bg-[#EFEEE9] mt-5" />

          <!-- TASK -->
          <div class="flex items-center gap-2.5 mt-[22px]">
            <span class="w-[17px] h-[17px] rounded-[5px] bg-[#22C55E] flex items-center justify-center shrink-0">
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span class="font-mono-dc text-xs tracking-[0.14em] text-[#111113]">TASK</span>
          </div>
          <div
            v-for="(task, ti) in project.tasks"
            :key="ti"
            class="flex gap-[11px] items-start mt-3"
          >
            <span class="w-1.5 h-1.5 rounded-[2px] bg-[#22C55E] shrink-0 mt-[9px]" />
            <span class="text-sm leading-[1.75] text-[#2B2B30]">{{ task }}</span>
          </div>

          <!-- ROLE -->
          <div class="flex items-center gap-2.5 mt-[26px]">
            <span class="w-[17px] h-[17px] rounded-[5px] bg-[#1184C7] flex items-center justify-center shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-white" />
            </span>
            <span class="font-mono-dc text-xs tracking-[0.14em] text-[#111113]">ROLE</span>
          </div>
          <div
            v-for="(role, ri) in project.roles"
            :key="ri"
            class="flex gap-[11px] items-start mt-3"
          >
            <span class="w-1.5 h-1.5 rounded-[2px] bg-[#1184C7] shrink-0 mt-[9px]" />
            <span class="text-sm leading-[1.75] text-[#2B2B30]">{{ role }}</span>
          </div>

          <!-- SKILL -->
          <template v-if="project.skills.length">
            <div class="flex items-center gap-2.5 mt-[26px]">
              <span class="w-[17px] h-[17px] rounded-[5px] bg-[#111113] flex items-center justify-center shrink-0 font-mono-dc text-[8px] text-[#22C55E]">
                &lt;/&gt;
              </span>
              <span class="font-mono-dc text-xs tracking-[0.14em] text-[#111113]">SKILL</span>
            </div>
            <div class="flex flex-wrap gap-2 mt-3.5">
              <span
                v-for="(skill, si) in project.skills"
                :key="si"
                class="w-9 h-9 flex items-center justify-center border border-[#DEDCD4] bg-[#FAFAF8] rounded-[10px]"
              >
                <img :src="skill" class="max-w-5 max-h-5" alt="skill" />
              </span>
            </div>
          </template>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
.proj-card {
  transition: border-color 0.18s, box-shadow 0.18s;
}
.proj-card:hover {
  border-color: #cfcdc4;
  box-shadow: 0 14px 40px rgba(17, 17, 19, 0.06);
}
</style>
