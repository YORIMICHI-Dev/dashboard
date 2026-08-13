<script setup lang="ts">
import { careerSummary } from '../composables/profileStats';
</script>

<template>
  <div class="mt-11">
    <div
      class="flex justify-between items-end border-b border-[#DEDCD4] pb-3"
    >
      <span class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F]">CAREER</span>
      <NuxtLink
        to="/history"
        class="font-mono-dc text-xs text-[#9A998F] transition-colors hover:text-[#1A9E5E]"
      >
        FULL HISTORY →
      </NuxtLink>
    </div>
    <div class="divide-y divide-[#EFEEE9]">
      <NuxtLink
        v-for="c in careerSummary"
        :key="c.name"
        :to="`/history/${c.slug}`"
        class="group flex flex-wrap items-baseline gap-x-5 gap-y-1 py-4"
      >
        <span
          class="font-mono-dc text-[11px] tracking-widest w-[130px] shrink-0"
          :class="c.current ? 'text-[#1A9E5E]' : 'text-[#9A998F]'"
        >
          {{ c.period }}
        </span>
        <span
          class="font-display font-bold text-[17px] text-[#111113] transition-colors group-hover:text-[#1A9E5E]"
        >
          {{ c.name }}
        </span>
        <span class="ml-auto font-mono-dc text-[11px] tracking-[0.12em] text-[#B7B6B0]">
          {{ c.role }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
