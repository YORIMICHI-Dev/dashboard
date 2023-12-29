<script setup lang="ts">
const TITLE = 'History';
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
      <DashboardHistoryUnaiit />
      <DashboardHistoryLaniakea />
      <DashboardHistoryIPX />
      <DashboardHistoryKIOXIA />
      <DashboardHistorySumitomo />
    </VCol>
  </VRow>
</template>
