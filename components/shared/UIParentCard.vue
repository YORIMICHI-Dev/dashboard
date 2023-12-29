<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
const { title } = props;
</script>

// ===============================|| Ui Parent
Card||=============================== //
<template>
  <VCard class="mb-6" elevation="10">
    <VCardItem class="py-4 px-6">
      <div class="d-sm-flex align-center">
        <v-card-title class="text-h4">{{ title }}</v-card-title>
        <!-- <template v-slot:append> -->
        <slot name="action"></slot>
        <!-- </template> -->
      </div>
    </VCardItem>
    <VDivider></VDivider>
    <VCardText>
      <slot />
    </VCardText>
  </VCard>
</template>
