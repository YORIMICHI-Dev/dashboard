<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';

const props = defineProps<{
  item: string;
  level: number;
}>();
</script>

<template>
  <SharedIcon :name="props.item" :class="props.level > 0 ? 'size-4' : 'size-5'" />
</template>
