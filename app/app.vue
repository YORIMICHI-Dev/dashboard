<script setup lang="ts">
import { NuxtLayout, NuxtLoadingIndicator, NuxtPage, UApp } from '#components';
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
