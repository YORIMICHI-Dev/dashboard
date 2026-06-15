<script setup lang="ts">
type Props = {
  day: string;
  certification: string;
};
const props = defineProps<Props>();
</script>

<template>
  <div>
    <span class="text-base">{{ props.day }}</span>
    <h5 class="text-lg font-semibold">{{ props.certification }}</h5>
    <USeparator class="my-3" />
  </div>
</template>
