<script setup lang="ts">
const TITLE = 'Certification';
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

  <VRow>
    <VCol cols="12">
      <DashboardCertificationCertifications />
    </VCol>
  </VRow>
</template>
