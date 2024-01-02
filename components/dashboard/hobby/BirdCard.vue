<script setup lang="ts">
import { birdGallery } from './hobbyCard';
</script>

<template>
  <SharedUIParentCard title="Bird">
    <VRow>
      <VCol cols="12" md="4" sm="6" v-for="(card, i) in birdGallery" :key="i">
        <VCard elevation="10" class="card-hover overflow-hidden">
          <VAvatar size="220" class="rounded-0 w-100">
            <VImg cover :src="card.image" alt="gallery" width="450" />
          </VAvatar>
          <VCardText>
            <div class="d-flex align-center gap-3">
              <div>
                <h6 class="text-h6 mb-1">{{ card.title }}</h6>
                <span
                  class="text-subtitle-1 d-block text-truncate d-flex align-center gap-2"
                >
                  {{ card.dateTime }}
                </span>
              </div>
              <div class="ml-auto">
                <VBtn size="x-small" color="inherit" icon variant="text">
                  <DotsVerticalIcon width="14" stroke-width="1.5" />
                </VBtn>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </SharedUIParentCard>
</template>
