<script setup lang="ts">
const customizer = useCustomizerStore();
</script>

<template>
  <VBtn
    class="customizer-btn"
    size="large"
    icon
    variant="flat"
    color="primary"
    @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"
  >
    <ColorPickerIcon />
  </VBtn>
</template>
