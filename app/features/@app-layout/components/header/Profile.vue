<script setup lang="ts">
import { profileItems } from './profileItem';
</script>

<template>
  <UPopover :content="{ align: 'end' }">
    <UButton variant="ghost" color="neutral" square class="rounded-full p-0">
      <UAvatar src="/images/profile/user-7.jpg" alt="profile" size="sm" />
    </UButton>

    <template #content>
      <div class="w-[320px]">
        <div class="px-6 pt-6">
          <h5 class="text-xl font-semibold text-primary">Profile</h5>
          <div class="flex items-center mt-4 pb-6">
            <UAvatar src="/images/profile/user-7.jpg" alt="profile" size="xl" />
            <div class="ml-3">
              <h6 class="text-base font-semibold">Kusuda Daisuke</h6>
              <span class="text-sm text-muted">Engineer</span>
              <div class="flex items-center mt-1">
                <UIcon name="i-tabler-mail" class="size-4" />
                <span class="text-sm text-muted ml-2">yorimichi.dev@gmail.com</span>
              </div>
            </div>
          </div>
          <USeparator />
        </div>

        <div class="py-2">
          <NuxtLink
            v-for="item in profileItems"
            :key="item.title"
            :to="item.href"
            class="flex items-center px-6 py-3 hover:bg-primary/10 transition-colors"
          >
            <UAvatar :src="item.avatar" :alt="item.title" size="md" class="mr-3" />
            <div>
              <h6 class="text-sm font-bold">{{ item.title }}</h6>
              <p class="text-sm text-muted">{{ item.subtitle }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </template>
  </UPopover>
</template>
