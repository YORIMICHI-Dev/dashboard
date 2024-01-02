<script setup lang="ts">
const TITLE = 'Hobby';
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

  <DashboardHobbyCard />
</template>
