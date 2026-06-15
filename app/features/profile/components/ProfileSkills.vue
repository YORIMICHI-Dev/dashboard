<script setup lang="ts">
const skills = [
  { y: '3', n: 'Full Stack', tag: 'CORE' },
  { y: '2', n: 'Frontend', tag: 'WEB' },
  { y: '2', n: 'C# · .NET', tag: 'API' },
  { y: '3', n: 'Python', tag: 'API' },
  { y: '3', n: 'GitHub', tag: 'OSS' },
  { y: '2', n: 'Married', tag: 'LIFE' },
];
</script>

<template>
  <div class="mt-3.5 font-mono-dc text-xs tracking-[0.16em] text-[#9A998F]">
    — STACK & EXPERIENCE
  </div>
  <div
    class="mt-3.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-[#E7E5DF] rounded-2xl overflow-hidden bg-white"
  >
    <div
      v-for="s in skills"
      :key="s.n"
      class="px-[18px] py-6 border-r border-b border-[#EFEEE9] transition-colors hover:bg-[#F7F6F2]"
    >
      <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#B7B6B0]">{{ s.tag }}</div>
      <div class="font-display font-bold text-[46px] leading-none mt-2.5 mb-1.5 text-[#111113]">
        {{ s.y }}
      </div>
      <div class="text-[13px] text-[#52525A]">{{ s.n }}</div>
    </div>
  </div>
</template>
