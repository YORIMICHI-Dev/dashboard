<script setup lang="ts">
import { useCustomizerStore } from '~/features/@app-layout/stores/customizer';
import LayoutHeaderProfile from './Profile.vue';

const customizer = useCustomizerStore();
</script>

<template>
  <header class="app-header flex items-center px-4">
    <!-- Toggle mini sidebar (lg+) -->
    <UButton
      class="hidden lg:inline-flex"
      icon="i-tabler-menu-2"
      color="primary"
      variant="ghost"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    />

    <!-- Toggle sidebar drawer (mobile) -->
    <UButton
      class="inline-flex lg:hidden"
      icon="i-tabler-menu-2"
      color="primary"
      variant="ghost"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
    />

    <UButton
      to="https://github.com/YORIMICHI-Dev"
      target="_blank"
      variant="ghost"
      color="primary"
    >
      Github
    </UButton>
    <UButton to="https://zenn.dev/yorimichi" target="_blank" variant="ghost" color="primary">
      Zenn
    </UButton>

    <div class="ml-auto">
      <LayoutHeaderProfile />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--ui-bg);
  border-bottom: 1px solid var(--ui-border);
  gap: 4px;
}
</style>
