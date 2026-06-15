<script setup lang="ts">
const props = defineProps<{
  title: string;
  breadcrumbs: any[];
}>();
const { title, breadcrumbs } = props;

const crumbLinks = computed(() =>
  breadcrumbs.map((b) => ({ label: b.text, to: b.disabled ? undefined : b.href })),
);
</script>

<template>
  <div class="bg-primary/10 rounded-md mb-8">
    <div class="px-8 py-8 lg:py-0">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
          <UBreadcrumb :items="crumbLinks" />
        </div>
        <div class="hidden lg:block overflow-hidden">
          <img src="/images/breadcrumb/ChatBc.png" alt="breadcrumb" class="-mb-16 mt-3" />
        </div>
      </div>
    </div>
  </div>
</template>
