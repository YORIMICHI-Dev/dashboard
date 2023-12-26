<script setup lang="ts">
const TITLE = 'Github Repository';
useHead({
  title: TITLE,
});

const breadcrumbs = ref([
  {
    text: 'Apps',
    disabled: false,
    href: '/',
  },
  {
    text: TITLE,
    disabled: true,
    href: '',
  },
]);
</script>

<template>
  <!-- Breadcrumb -->
  <SharedBaseBreadCrumb :title="TITLE" :breadcrumbs="breadcrumbs" />
</template>
