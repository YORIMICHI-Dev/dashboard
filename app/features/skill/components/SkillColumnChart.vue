<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
import VueApexCharts from 'vue3-apexcharts';
import { columnIcon, columnOptions, columnChart } from '../composables/cordColumnChart';
import { frameworkOptions, frameworkIcon, frameworkChart } from '../composables/frameworkColumnChart';
import { dbOptions, dbIcon, dbChart } from '../composables/dbColumnChart';
import { osOptions, osIcon, osChart } from '../composables/osColumnChart';
import { azureOptions, azureIcon, azureChart } from '../composables/azureColumnChart';

const chartOptions = computed(() => columnOptions);
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 sm:col-span-6">
      <SharedUIParentCard title="Programming" :icon="columnIcon">
        <VueApexCharts type="bar" height="300" :options="chartOptions" :series="columnChart.series" />
      </SharedUIParentCard>
    </div>
    <div class="col-span-12 sm:col-span-6">
      <SharedUIParentCard title="Framework" :icon="frameworkIcon">
        <VueApexCharts type="bar" height="300" :options="frameworkOptions" :series="frameworkChart.series" />
      </SharedUIParentCard>
    </div>
    <div class="col-span-12 sm:col-span-8">
      <SharedUIParentCard title="Azure" :icon="azureIcon">
        <VueApexCharts type="bar" height="300" :options="azureOptions" :series="azureChart.series" />
      </SharedUIParentCard>
    </div>
    <div class="col-span-12 sm:col-span-4">
      <SharedUIParentCard title="DB" :icon="dbIcon">
        <VueApexCharts type="bar" height="300" :options="dbOptions" :series="dbChart.series" />
      </SharedUIParentCard>
    </div>
    <div class="col-span-12 sm:col-span-4">
      <SharedUIParentCard title="OS" :icon="osIcon">
        <VueApexCharts type="bar" height="300" :options="osOptions" :series="osChart.series" />
      </SharedUIParentCard>
    </div>
  </div>
</template>
