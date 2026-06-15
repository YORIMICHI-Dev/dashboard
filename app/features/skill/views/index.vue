<script setup lang="ts">
import SharedBaseBreadCrumb from '~/features/@shared/components/BaseBreadCrumb.vue';
import SkillBoard from '../components/SkillBoard.vue';

const TITLE = 'Skill';
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

  <SkillBoard />
</template>
