<script setup lang="ts">
const customizer = useCustomizerStore();
const TITLE = 'Kusuda Daisuke Dashboard';

useHead({
  meta: [{ content: TITLE }],
  titleTemplate: (titleChunk: string | undefined) => {
    let title = TITLE;
    if (titleChunk !== undefined) return `${titleChunk} | Dashboard`;
    return title;
  },
});
</script>

<template>
  <VApp :theme="customizer.actTheme" :class="[customizer.actTheme, customizer.mini_sidebar ? 'mini-sidebar' : '']">
    <!-- Customizer Drawer -->
    <VNavigationDrawer app temporary elevation="10" location="right" v-model="customizer.Customizer_drawer" width="320">
      <LayoutCustom />
    </VNavigationDrawer>

    <!-- Sidebar -->
    <LayoutSidebar />

    <!-- Header -->
    <LayoutHeader />

    <!-- Main Contents -->
    <VMain>
      <VContainer fluid class="page-wrapper pb-sm-15 pb-10">
        <div class="maxWidth">
          <!-- Main View -->
          <slot />

          <!-- Customizer button -->
          <LayoutSetting />
        </div>
      </VContainer>
    </VMain>
  </VApp>
</template>
