<script setup lang="ts">
type Props = {
  day: string;
  certification: string;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="">
    <span class="text-body">{{ props.day }}</span>
    <h5 class="h5">{{ props.certification }}</h5>
    <VDivider class="my-3" />
  </div>
</template>
