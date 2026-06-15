<script setup lang="ts">
import profileBg from '/images/profile/profile-card.png';
import userImage from '/images/profile/user-7.jpg';

const stats = [
  { value: '3', label: 'YEARS EXP' },
  { value: '6', label: 'SKILLS' },
];
</script>

<template>
  <!-- section label -->
  <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
    <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
      PROFILE —  EDITORIAL
    </span>
    <span class="inline-flex items-center gap-2 font-mono-dc text-xs text-[#1A9E5E]">
      <span class="w-[7px] h-[7px] rounded-full bg-[#22C55E] inline-block" />
      AVAILABLE FOR WORK
    </span>
  </div>

  <!-- name + stats -->
  <div class="mt-[30px] flex justify-between items-end gap-[30px] flex-wrap">
    <div>
      <h1
        class="font-display font-bold text-[56px] sm:text-[84px] leading-[0.92] tracking-[-0.035em] m-0"
      >
        Kusuda<br />Daisuke<span class="text-[#22C55E]">.</span>
      </h1>
      <p class="mt-[18px] text-base text-[#52525A] max-w-[520px]">
        Software Engineer based in Nagoya —
        フルスタックでの受託開発、RAGアプリ、現場データの可視化に取り組んでいます。
      </p>
    </div>
    <div class="flex gap-2.5">
      <div
        v-for="s in stats"
        :key="s.label"
        class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[96px]"
      >
        <div class="font-display font-bold text-[30px] text-[#111113]">{{ s.value }}</div>
        <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
          {{ s.label }}
        </div>
      </div>
    </div>
  </div>

  <!-- hero image -->
  <div
    class="relative mt-9 h-[380px] rounded-[18px] overflow-hidden border border-[#E7E5DF]"
  >
    <img :src="profileBg" alt="workspace" class="absolute inset-0 w-full h-full object-cover" />
    <div
      class="absolute inset-0"
      style="background: linear-gradient(120deg, rgba(34, 197, 94, 0.1), rgba(56, 189, 248, 0.12))"
    />
    <div class="absolute left-8 bottom-7 flex items-center gap-4">
      <div
        class="w-[84px] h-[84px] rounded-full overflow-hidden bg-[#111113]"
        style="box-shadow: 0 0 0 4px #faf9f6, 0 0 0 6px #22c55e"
      >
        <img :src="userImage" alt="Kusuda Daisuke" class="w-full h-full object-cover" />
      </div>
      <div class="bg-[#111113] text-white px-[17px] py-[11px] rounded-xl">
        <div class="font-display font-bold text-base leading-tight whitespace-nowrap">
          Kusuda Daisuke
        </div>
        <div class="font-mono-dc text-[11px] text-[#7FE3A8] mt-0.5">@unaiit · Engineer</div>
      </div>
    </div>
  </div>
</template>
