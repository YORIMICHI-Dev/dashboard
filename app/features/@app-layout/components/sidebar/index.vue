<script setup lang="ts">
import sidebarItem from './sidebarItem';
import { useCustomizerStore } from '~/features/@app-layout/stores/customizer';
import Logo from '~/features/@shared/components/Logo.vue';
import LayoutSidebarNavGroup from './NavGroup.vue';
import LayoutSidebarNavCollapse from './NavCollapse.vue';
import LayoutSidebarNavItem from './NavItem.vue';
import LayoutSidebarProfile from './Profile.vue';

const sidebarMenu = shallowRef(sidebarItem);
const customizer = useCustomizerStore();
</script>

<template>
  <aside
    class="app-sidebar"
    :class="[
      customizer.mini_sidebar ? 'is-mini' : '',
      customizer.Sidebar_drawer ? 'is-open' : '',
    ]"
  >
    <!-- Logo -->
    <div class="p-5">
      <Logo />
    </div>

    <!-- Navigation -->
    <div class="scrollnavbar">
      <nav class="p-4">
        <template v-for="item in sidebarMenu">
          <LayoutSidebarNavGroup v-if="item.header" :key="item.title" :item="item" />
          <LayoutSidebarNavCollapse
            v-else-if="item.children"
            :key="item.children.at(0)?.title"
            :item="item"
            :level="0"
          />
          <LayoutSidebarNavItem v-else :key="item.title" :item="item" :level="0" />
        </template>
      </nav>

      <!-- Profile card -->
      <div class="p-4 userbottom">
        <LayoutSidebarProfile v-if="!customizer.mini_sidebar" />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.app-sidebar {
  position: fixed;
  inset-block: 0;
  inset-inline-start: 0;
  width: 270px;
  display: flex;
  flex-direction: column;
  z-index: 50;
  background: var(--ui-bg);
  border-inline-end: 1px solid var(--ui-border);
  transition: width 0.2s ease, transform 0.2s ease;
}
.app-sidebar.is-mini:hover {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
}
.scrollnavbar {
  flex: 1;
  overflow-y: auto;
}
.app-sidebar.is-mini {
  width: 75px;
}
.app-sidebar.is-mini :deep(.hide-menu) {
  display: none;
}
.app-sidebar.is-mini:hover {
  width: 270px;
}
.app-sidebar.is-mini:hover :deep(.hide-menu) {
  display: revert;
}
@media (max-width: 1263.98px) {
  .app-sidebar {
    transform: translateX(-100%);
  }
  .app-sidebar.is-open {
    transform: translateX(0);
  }
}
</style>
