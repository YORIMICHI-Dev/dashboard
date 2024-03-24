<script setup lang="ts">
const customizer = useCustomizerStore();
</script>

<template>
  <VAppBar elevation="0" height="70">
    <!-- Sidebar open/minimize more than lg -->
    <VBtn
      class="hidden-md-and-down custom-hover-primary"
      icon
      color="primary"
      variant="text"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </VBtn>

    <!-- Sidebar open/close less than lg -->
    <VBtn class="hidden-lg-and-up ms-3" icon variant="flat" @click.stop="customizer.SET_SIDEBAR_DRAWER" size="small">
      <Menu2Icon size="20" stroke-width="1.5" />
    </VBtn>

    <!-- Github -->
    <NuxtLink href="https://github.com/YORIMICHI-Dev" target="_blank" class="text-decoration-none">
      <VBtn variant="text" color="primary"> Github </VBtn>
    </NuxtLink>

    <VSpacer />
    <!-- Mega menu -->
    <!-- FUTURE -->
    <!-- <div class="hidden-md-and-down">
            <LayoutHeaderNavigations />
        </div> -->

    <!-- User Profile -->
    <div class="ml-3">
      <LayoutHeaderProfile />
    </div>
  </VAppBar>
</template>
