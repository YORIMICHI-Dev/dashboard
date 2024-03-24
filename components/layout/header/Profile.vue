<script setup lang="ts">
import { profileItems } from './profileItem';
</script>

<template>
  <VMenu :close-on-content-click="false">
    <!-- Avator button -->
    <template v-slot:activator="{ props }">
      <VBtn class="custom-hover-primary" variant="text" v-bind="props" icon>
        <VAvatar size="35">
          <img src="/images/profile/user-7.jpg" width="35" alt="profile" />
        </VAvatar>
      </VBtn>
    </template>

    <!-- Profile sheet -->
    <VSheet rounded="md" width="360" elevation="10">
      <!-- Profile -->
      <div class="px-8 pt-6">
        <h5 class="text-h5 text-primary font-weight">Profile</h5>
        <div class="d-flex align-center mt-4 pb-6">
          <VAvatar size="80">
            <img src="/images/profile/user-7.jpg" width="80" alt="profile" />
          </VAvatar>
          <div class="ml-3">
            <h6 class="text-h6 mb-n1">Kusuda Daisuke</h6>
            <span class="text-subtitle-1 font-weight-regular textSecondary">Engineer</span>
            <div class="d-flex align-center mt-1">
              <MailIcon size="18" stroke-width="1.5" />
              <span class="text-subtitle-1 font-weight-regular textSecondary ml-2"> yorimichi.dev@gmail.com </span>
            </div>
          </div>
        </div>
        <VDivider />
      </div>
      <!-- Route page -->
      <VList class="py-0 theme-list" lines="two">
        <VListItem v-for="item in profileItems" :key="item.title" class="py-4 px-8 custom-text-primary" :to="item.href">
          <template v-slot:prepend>
            <VAvatar size="48" color="lightprimary" class="mr-3" rounded="md">
              <VImg :src="item.avatar" width="24" height="24" :alt="item.avatar" />
            </VAvatar>
          </template>
          <div>
            <h6 class="text-subtitle-1 font-weight-bold mb-2 custom-title">
              {{ item.title }}
            </h6>
          </div>
          <p class="text-subtitle-1 font-weight-regular textSecondary">
            {{ item.subtitle }}
          </p>
        </VListItem>
      </VList>
    </VSheet>
  </VMenu>
</template>
