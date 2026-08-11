<script setup lang="ts">
import Icon from './Icon.vue';
import LayoutSidebarNavCollapse from './NavCollapse.vue';
import LayoutSidebarNavItem from './NavItem.vue';
const props = defineProps<{
  item: any;
  level: number;
}>();
const { item, level } = props;
const open = ref(false);
</script>

<template>
  <UCollapsible v-model:open="open">
    <button
      type="button"
      class="flex items-center gap-3 py-2.5 pr-3.5 rounded-lg text-default transition-colors hover:bg-primary/10 hover:text-primary w-full"
      :style="{ paddingLeft: `${14 + level * 16}px` }"
    >
      <Icon :item="item.icon" :level="level" />
      <span class="flex-1 text-left hide-menu">{{ item.title }}</span>
      <Icon
        item="chevron-down"
        :level="1"
        class="transition-transform hide-menu"
        :class="{ 'rotate-180': open }"
      />
    </button>

    <template #content>
      <template v-for="(subitem, i) in item.children" :key="i">
        <LayoutSidebarNavCollapse v-if="subitem.children" :item="subitem" :level="level + 1" />
        <LayoutSidebarNavItem v-else :item="subitem" :level="level + 1" />
      </template>
    </template>
  </UCollapsible>
</template>
