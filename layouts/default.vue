<script setup lang="ts">
const customizer = useCustomizerStore();
const title = ref('Kusuda Daisuke Dashboard');

useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${title}` : 'Dashboard';
  },
});
</script>

<template>
  <VApp
    :theme="customizer.actTheme"
    :class="[
      customizer.actTheme,
      customizer.mini_sidebar ? 'mini-sidebar' : '',
    ]"
  >
    <!-- Customizer Drawer -->
    <VNavigationDrawer
      app
      temporary
      elevation="10"
      location="right"
      v-model="customizer.Customizer_drawer"
      width="320"
    >
    </VNavigationDrawer>
    <!-- Customizer Drawer -->

    <!-- Sidebar -->
    <LayoutSidebar />
    <!-- Sidebar -->

    <!-- Header -->
    <LayoutHeader />
    <!-- Header -->

    <!-- Main Contents -->
    <VMain>
      <VContainer fluid class="page-wrapper pb-sm-15 pb-10">
        <!-- Main View -->
        <slot />
        <!-- Main View -->

        <!-- Customizer button -->
        <VBtn
          class="customizer-btn"
          size="large"
          icon
          variant="flat"
          color="primary"
          @click.stop="
            customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)
          "
        >
          <SettingsIcon />
        </VBtn>
        <!-- Customizer button -->
      </VContainer>
    </VMain>
    <!-- Main Contents -->
  </VApp>
</template>
