<script setup lang="ts">
const props = defineProps<{
  item: any;
}>();
</script>

<template>
  <div class="px-3.5 pt-4 pb-2 text-xs font-semibold uppercase tracking-wide text-muted hide-menu">
    {{ props.item.header }}
  </div>
</template>
