<script setup lang="ts">
const props = defineProps<{
  item: string;
  level: number;
}>();
</script>

<template>
  <UIcon :name="props.item" :class="props.level > 0 ? 'size-4' : 'size-5'" />
</template>
