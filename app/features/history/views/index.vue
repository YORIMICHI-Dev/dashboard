<script setup lang="ts">
import SharedBaseBreadCrumb from '~/features/@shared/components/BaseBreadCrumb.vue';
import HistoryUnaiit from '../components/HistoryUnaiit.vue';
import HistoryLaniakea from '../components/HistoryLaniakea.vue';
import HistoryIpx from '../components/HistoryIpx.vue';
import HistoryKioxia from '../components/HistoryKioxia.vue';
import HistorySumitomo from '../components/HistorySumitomo.vue';

const TITLE = 'History';
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
      <HistoryUnaiit />
      <HistoryLaniakea />
      <HistoryIpx />
      <HistoryKioxia />
      <HistorySumitomo />
    </div>
  </div>
</template>
