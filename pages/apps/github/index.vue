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

  <!-- Github Repository -->
  <v-row>
    <!-- Blog cards -->
    <v-col cols="12">
      <AppsGithubCard />
    </v-col>
  </v-row>
</template>
