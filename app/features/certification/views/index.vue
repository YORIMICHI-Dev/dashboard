<script setup lang="ts">
import SharedBaseBreadCrumb from '~/features/@shared/components/BaseBreadCrumb.vue';
import CertificationList from '../components/CertificationList.vue';

const TITLE = 'Certification';
useHead({
  title: TITLE,
});

const breadcrumbs = ref([
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

  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
      <CertificationList />
    </div>
  </div>
</template>
