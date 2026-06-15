<script setup lang="ts">
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
