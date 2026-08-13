<script setup lang="ts">
import Icon from './Icon.vue';
const props = defineProps<{
  item: any;
  level: number;
}>();
const { item } = props;
const isExternal = item.type === 'external';

// 完全一致に加えて配下の動的ページ(/history/unaiit など)でもハイライトする
const route = useRoute();
const isActive = computed(
  () => !isExternal && (route.path === item.to || route.path.startsWith(`${item.to}/`)),
);
</script>

<template>
  <NuxtLink
    :to="isExternal ? item.to : item.to"
    :target="isExternal ? '_blank' : undefined"
    class="flex items-center gap-3 py-2.5 pr-3.5 rounded-lg text-default transition-colors hover:bg-primary/10 hover:text-primary"
    active-class=""
    exact-active-class=""
    :class="{ 'opacity-50 pointer-events-none': item.disabled, '!bg-primary !text-inverted': isActive }"
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
