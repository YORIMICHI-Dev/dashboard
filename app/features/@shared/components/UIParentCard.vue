<script setup lang="ts">
import Icon from '../../@app-layout/components/sidebar/Icon.vue';
const props = defineProps<{
  title: string;
  icon?: string;
}>();
const { title } = props;
</script>

<template>
  <UCard class="mb-6" :ui="{ header: 'bg-secondary/10', body: '' }">
    <template #header>
      <div class="sm:flex items-center">
        <div class="text-xl font-semibold flex items-center">
          <span v-if="icon" class="mr-2 flex items-center">
            <Icon :item="icon" :level="0" />
          </span>
          {{ title }}
        </div>
        <slot name="action" />
      </div>
    </template>

    <slot />
  </UCard>
</template>
