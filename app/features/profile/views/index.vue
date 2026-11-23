<script setup lang="ts">
import { useHead } from '#imports';
import ProfileOverview from '../components/ProfileOverview.vue';

const TITLE = 'Profile';
useHead({
  title: TITLE,
});
</script>

<template>
  <!-- Profile -->
  <ProfileOverview />
</template>
