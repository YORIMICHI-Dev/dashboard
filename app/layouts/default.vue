<script setup lang="ts">
import { useCustomizerStore } from '~/features/@app-layout/stores/customizer';
import LayoutSidebar from '~/features/@app-layout/components/sidebar/index.vue';
import LayoutHeader from '~/features/@app-layout/components/header/index.vue';

const customizer = useCustomizerStore();
const TITLE = 'Kusuda Daisuke Dashboard';

useHead({
  meta: [{ content: TITLE }],
  titleTemplate: (titleChunk: string | undefined) => {
    if (titleChunk !== undefined) return `${titleChunk} | Dashboard`;
    return TITLE;
  },
});
</script>

<template>
  <div class="app-shell" :class="{ 'mini-sidebar': customizer.mini_sidebar }">
    <!-- Sidebar -->
    <LayoutSidebar />

    <!-- Mobile backdrop -->
    <div
      v-if="customizer.Sidebar_drawer"
      class="sidebar-backdrop"
      @click="customizer.SET_SIDEBAR_DRAWER"
    />

    <!-- Content -->
    <div class="content-wrap">
      <LayoutHeader />
      <main class="page-wrapper p-4 md:p-6">
        <div class="maxWidth">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  --sidebar-w: 270px;
  min-height: 100vh;
}
.app-shell.mini-sidebar {
  --sidebar-w: 75px;
}
.content-wrap {
  margin-inline-start: var(--sidebar-w);
  transition: margin 0.2s ease;
  min-height: 100vh;
}
.page-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}
.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 45;
}
@media (max-width: 1263.98px) {
  .content-wrap {
    margin-inline-start: 0;
  }
}
</style>
