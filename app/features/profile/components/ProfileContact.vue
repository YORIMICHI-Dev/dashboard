<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';

const contacts = [
  {
    label: 'GITHUB',
    value: 'YORIMICHI-Dev',
    href: 'https://github.com/YORIMICHI-Dev',
    icon: 'brand-github',
    external: true,
  },
  {
    label: 'EMAIL',
    value: 'yorimichi.dev@gmail.com',
    href: 'mailto:yorimichi.dev@gmail.com',
    icon: 'mail',
    external: false,
  },
];
</script>

<template>
  <div class="mt-11">
    <div
      class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F] border-b border-[#DEDCD4] pb-3"
    >
      CONTACT — GET IN TOUCH
    </div>
    <div class="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      <a
        v-for="c in contacts"
        :key="c.label"
        :href="c.href"
        :target="c.external ? '_blank' : undefined"
        :rel="c.external ? 'noopener noreferrer' : undefined"
        class="group flex items-center gap-3.5 border border-[#DEDCD4] rounded-xl px-[18px] py-4 transition-colors hover:bg-[#F7F6F2]"
      >
        <SharedIcon :name="c.icon" class="size-[26px] shrink-0" />
        <div class="min-w-0">
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F]">
            {{ c.label }}
          </div>
          <div class="font-display font-bold text-[15px] text-[#111113] truncate">
            {{ c.value }}
          </div>
        </div>
        <span
          class="ml-auto font-mono-dc text-xs text-[#9A998F] transition-colors group-hover:text-[#1A9E5E]"
        >
          →
        </span>
      </a>
    </div>
  </div>
</template>
