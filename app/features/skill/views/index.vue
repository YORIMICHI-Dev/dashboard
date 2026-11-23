<script setup lang="ts">
import { useHead } from '#imports';
import SkillBoard from '../components/SkillBoard.vue';

const TITLE = 'Skillset';
useHead({
  title: TITLE,
});
</script>

<template>
  <SkillBoard />
</template>
