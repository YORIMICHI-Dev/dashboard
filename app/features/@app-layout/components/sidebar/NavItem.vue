<script setup lang="ts">
import Icon from './Icon.vue';
const props = defineProps<{
  item: any;
  level: number;
}>();
const { item } = props;
const isExternal = item.type === 'external';
</script>

<template>
  <NuxtLink
    :to="isExternal ? item.to : item.to"
    :target="isExternal ? '_blank' : undefined"
    class="flex items-center gap-3 py-2.5 pr-3.5 rounded-lg text-default transition-colors hover:bg-primary/10 hover:text-primary"
    active-class=""
    exact-active-class="!bg-primary !text-inverted"
    :class="{ 'opacity-50 pointer-events-none': item.disabled }"
    :style="{ paddingLeft: `${14 + level * 16}px` }"
  >
    <Icon :item="item.icon" :level="level" />
    <span class="flex-1 hide-menu">{{ item.title }}</span>
    <UBadge
      v-if="item.chip"
      :color="item.chipColor || 'primary'"
      :variant="(item.chipVariant as any) || 'solid'"
      size="sm"
      class="hide-menu"
    >
      {{ item.chip }}
    </UBadge>
  </NuxtLink>
</template>
