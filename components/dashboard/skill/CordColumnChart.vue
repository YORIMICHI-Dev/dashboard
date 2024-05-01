<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts';
import { columnIcon, columnOptions, columnChart } from './cordColumnChart';
import { frameworkOptions, frameworkIcon, frameworkChart } from './frameworkColumnChart';
import { dbOptions, dbIcon, dbChart } from './dbColumnChart';
import { osOptions, osIcon, osChart } from './osColumnChart';
import { azureOptions, azureIcon, azureChart } from './azureColumnChart';

const chartOptions = computed(() => {
  return columnOptions;
});
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Column Chart -->
  <!-- ---------------------------------------------------- -->
  <VRow>
    <!-- Programing -->
    <VCol cols="12" sm="6">
      <SharedUIParentCard title="Programming" :icon="columnIcon">
        <VueApexCharts type="bar" height="300" :options="chartOptions" :series="columnChart.series"> </VueApexCharts>
      </SharedUIParentCard>
    </VCol>
    <!-- Framework -->
    <VCol cols="12" sm="6">
      <SharedUIParentCard title="Framework" :icon="frameworkIcon">
        <VueApexCharts type="bar" height="300" :options="frameworkOptions" :series="frameworkChart.series">
        </VueApexCharts>
      </SharedUIParentCard>
    </VCol>

    <!-- Azure -->
    <VCol cols="12" sm="8">
      <SharedUIParentCard title="Azure" :icon="azureIcon">
        <VueApexCharts type="bar" height="300" :options="azureOptions" :series="azureChart.series"> </VueApexCharts>
      </SharedUIParentCard>
    </VCol>

    <!-- DB -->
    <VCol cols="12" sm="4">
      <SharedUIParentCard title="DB" :icon="dbIcon">
        <VueApexCharts type="bar" height="300" :options="dbOptions" :series="dbChart.series"> </VueApexCharts>
      </SharedUIParentCard>
    </VCol>

    <!-- OS -->
    <VCol cols="12" sm="4">
      <SharedUIParentCard title="OS" :icon="osIcon">
        <VueApexCharts type="bar" height="300" :options="osOptions" :series="osChart.series"> </VueApexCharts>
      </SharedUIParentCard>
    </VCol>

    <!-- Role -->
    <!-- <VCol cols="12" sm="4">
        <SharedUIParentCard title="Role" :icon="frameworkIcon">
          <VueApexCharts
            type="bar"
            height="300"
            :options="frameworkOptions"
            :series="frameworkChart.series"
          >
          </VueApexCharts>
        </SharedUIParentCard>
      </VCol> -->
  </VRow>
</template>
./azureColumnChart
