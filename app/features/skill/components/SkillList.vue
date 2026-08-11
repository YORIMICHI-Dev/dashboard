<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import type { SkillItem } from '../composables/skills';

const props = defineProps<{
  items: SkillItem[];
  /** lg = 主役カード用の大きめ表示 */
  size?: 'lg' | 'sm';
}>();

const GREEN = '#22C55E';
const GREEN_SOFT = '#86D9A8';
const TRACK = 'rgba(34, 197, 94, 0.13)';

// 年数の降順で表示(データ値は変更しない)
const sorted = computed(() => [...props.items].sort((a, b) => b.years - a.years));
const maxYears = computed(() => Math.max(...props.items.map((i) => i.years), 0.0001));

const initials = (name: string) => name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || '?';
</script>

<template>
  <div class="flex flex-col" :class="size === 'lg' ? 'gap-6' : 'gap-[18px]'">
    <div
      v-for="(item, i) in sorted"
      :key="item.name"
      class="flex items-center"
      :class="size === 'lg' ? 'gap-4' : 'gap-3'"
    >
      <!-- index (lgのみ) -->
      <span v-if="size === 'lg'" class="font-mono-dc text-[10px] text-[#C9C7BE] w-5 shrink-0">
        {{ String(i + 1).padStart(2, '0') }}
      </span>

      <!-- icon tile -->
      <span
        class="shrink-0 rounded-xl border border-[#E7E5DF] bg-[#FAFAF8] flex items-center justify-center"
        :class="size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'"
      >
        <img
          v-if="item.icon && item.icon.includes('/')"
          :src="item.icon"
          :alt="item.name"
          class="object-contain"
          :class="size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'"
        />
        <SharedIcon
          v-else-if="item.icon"
          :name="item.icon"
          class="shrink-0"
          :class="size === 'lg' ? 'size-6' : 'size-5'"
        />
        <span v-else class="font-mono-dc font-bold text-[11px] text-[#52525A]">
          {{ initials(item.name) }}
        </span>
      </span>

      <!-- name + bar -->
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-baseline mb-1.5 gap-3">
          <div class="flex items-baseline gap-2 min-w-0">
            <span
              class="font-display font-bold text-[#111113] truncate"
              :class="size === 'lg' ? 'text-[17px]' : 'text-[15px]'"
            >
              {{ item.name }}
            </span>
            <span v-if="item.tag" class="font-mono-dc text-[9px] tracking-[0.14em] text-[#9A998F] shrink-0">
              {{ item.tag }}
            </span>
          </div>
          <span
            class="font-display font-bold shrink-0"
            :class="[size === 'lg' ? 'text-[18px]' : 'text-[15px]', i === 0 ? 'text-[#1A9E5E]' : 'text-[#111113]']"
          >
            {{ item.years.toFixed(1) }}<span class="font-mono-dc font-normal text-[9px] text-[#9A998F] ml-1">YRS</span>
          </span>
        </div>
        <div
          class="rounded-full overflow-hidden"
          :class="size === 'lg' ? 'h-2.5' : 'h-2'"
          :style="{ background: TRACK }"
        >
          <div
            class="h-full rounded-full transition-[width] duration-500"
            :style="{ width: `${(item.years / maxYears) * 100}%`, background: i === 0 ? GREEN : GREEN_SOFT }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
