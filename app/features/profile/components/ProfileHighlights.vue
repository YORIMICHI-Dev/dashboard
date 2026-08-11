<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import { expertCert, featuredProjects } from '../composables/profileStats';

// 「主力として何を見せたいか」の編集判断のため定数で持つ(経験年数の最大値とは一致しない)
const coreStack = ['Python', 'TypeScript · Nuxt', 'C# · .NET', 'Azure'];
</script>

<template>
  <div class="mt-11">
    <div
      class="flex justify-between items-end border-b border-[#DEDCD4] pb-3"
    >
      <span class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F]">
        HIGHLIGHTS — SELECTED WORKS & CREDENTIALS
      </span>
    </div>

    <div class="mt-3.5 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-2.5">
      <!-- certification -->
      <NuxtLink
        v-if="expertCert"
        to="/certification"
        class="group border border-[#DEDCD4] rounded-2xl px-[18px] py-5 transition-colors hover:bg-[#F7F6F2] flex flex-col"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono-dc text-[10px] tracking-[0.12em] text-[#B7B6B0]">
            TOP CREDENTIAL
          </span>
          <SharedIcon name="certificate" class="size-[26px]" />
        </div>
        <div class="font-display font-bold text-[34px] leading-none mt-4 text-[#111113]">
          {{ expertCert.code }}
        </div>
        <div class="text-[13px] text-[#52525A] mt-1.5">{{ expertCert.name }}</div>
        <div class="mt-auto pt-4 flex items-center justify-between">
          <span
            class="font-mono-dc text-[10px] tracking-[0.12em] text-[#1A9E5E] border border-[#1A9E5E]/30 rounded-full px-2.5 py-1"
          >
            {{ expertCert.level }}
          </span>
          <span
            class="font-mono-dc text-xs text-[#9A998F] transition-colors group-hover:text-[#1A9E5E]"
          >
            ALL CERTS →
          </span>
        </div>
      </NuxtLink>

      <!-- featured projects -->
      <div class="border border-[#DEDCD4] rounded-2xl px-[18px] py-5 flex flex-col">
        <div class="flex items-center justify-between">
          <span class="font-mono-dc text-[10px] tracking-[0.12em] text-[#B7B6B0]">
            FEATURED PROJECTS
          </span>
          <SharedIcon name="history" class="size-[26px]" />
        </div>
        <div class="mt-3 flex flex-col divide-y divide-[#EFEEE9]">
          <NuxtLink
            v-for="p in featuredProjects"
            :key="p.title"
            to="/history"
            class="group py-3 first:pt-1"
          >
            <div class="font-mono-dc text-[11px] tracking-widest text-[#9A998F]">
              {{ p.period }}
            </div>
            <div
              class="font-display font-bold text-[16px] mt-1 text-[#111113] transition-colors group-hover:text-[#1A9E5E]"
            >
              {{ p.title }}
            </div>
          </NuxtLink>
        </div>
        <NuxtLink
          to="/history"
          class="mt-auto pt-3 self-end font-mono-dc text-xs text-[#9A998F] transition-colors hover:text-[#1A9E5E]"
        >
          FULL HISTORY →
        </NuxtLink>
      </div>

      <!-- core stack -->
      <NuxtLink
        to="/skill"
        class="group border border-[#DEDCD4] rounded-2xl px-[18px] py-5 transition-colors hover:bg-[#F7F6F2] flex flex-col"
      >
        <div class="flex items-center justify-between">
          <span class="font-mono-dc text-[10px] tracking-[0.12em] text-[#B7B6B0]">
            CORE STACK
          </span>
          <SharedIcon name="code" class="size-[26px]" />
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="s in coreStack"
            :key="s"
            class="border border-[#DEDCD4] rounded-full px-3 py-1.5 text-[13px] text-[#2B2B30] bg-white"
          >
            {{ s }}
          </span>
        </div>
        <div class="mt-auto pt-4 text-right">
          <span
            class="font-mono-dc text-xs text-[#9A998F] transition-colors group-hover:text-[#1A9E5E]"
          >
            ALL SKILLS →
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
