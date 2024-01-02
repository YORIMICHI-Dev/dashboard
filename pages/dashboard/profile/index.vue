<script setup lang="ts">
const TITLE = 'Profile';
useHead({
  title: TITLE,
});

const breadcrumbs = ref([
  {
    text: 'Dashboard',
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

  <!-- Profile -->
  <DashboardProfile />
</template>
