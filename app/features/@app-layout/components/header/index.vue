<script setup lang="ts">
import { useCustomizerStore } from '~/features/@app-layout/stores/customizer';
import LayoutHeaderProfile from './Profile.vue';

const customizer = useCustomizerStore();
const route = useRoute();

const crumb = computed(() => {
  const seg = route.path.split('/').filter(Boolean)[0];
  if (!seg) return 'Profile';
  return seg.charAt(0).toUpperCase() + seg.slice(1);
});
</script>

<template>
  <header class="app-header flex items-center gap-6 px-6 lg:px-10">
    <div class="flex items-center gap-[14px]">
      <!-- Toggle mini sidebar (lg+) -->
      <button
        type="button"
        class="toggle-box hidden lg:flex"
        @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <!-- Toggle sidebar drawer (mobile) -->
      <button
        type="button"
        class="toggle-box flex lg:hidden"
        @click.stop="customizer.SET_SIDEBAR_DRAWER"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <span class="crumb font-mono-dc">
        <span class="hidden sm:inline">DASHBOARD / </span><span class="crumb-current">{{ crumb }}</span>
      </span>
    </div>

    <nav class="ml-2 flex items-center gap-[22px]">
      <a href="https://github.com/YORIMICHI-Dev" target="_blank" class="nav-link nav-link--gh">
        Github
      </a>
      <a href="https://zenn.dev/yorimichi" target="_blank" class="nav-link nav-link--zenn">
        Zenn
      </a>
    </nav>

    <div class="flex-1" />

    <LayoutHeaderProfile />
  </header>
</template>

<style scoped>
.app-header {
  height: 68px;
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(250, 249, 246, 0.82);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e7e5df;
}
.toggle-box {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #e7e5df;
  border-radius: 10px;
  color: #111113;
  cursor: pointer;
  transition: background 0.18s ease;
}
.toggle-box:hover {
  background: #f2f1ec;
}
.crumb {
  font-size: 12px;
  letter-spacing: 0.06em;
  color: #a7a6a0;
  white-space: nowrap;
}
.crumb-current {
  color: #111113;
}
.nav-link {
  font-family: "Space Grotesk", "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #52525a;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.18s ease, border-color 0.18s ease;
}
.nav-link:hover {
  color: #111113;
}
.nav-link--gh:hover {
  border-color: #22c55e;
}
.nav-link--zenn:hover {
  border-color: #38bdf8;
}
</style>
