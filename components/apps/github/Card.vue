<script setup lang="ts">
import { githubCard } from './cardItems';
</script>
<template>
  <VRow>
    <VCol cols="12" lg="4" v-for="card in githubCard" :key="card.title">
      <VCard elevation="10" rounded="md" class="card-hover">
        <div>
          <VImg
            :src="card.coveravatar"
            cover
            class="rounded-t-md align-end text-right"
          >
          </VImg>
          <VCardItem class="pt-4">
            <VChip
              class="text-body-2 font-weight-medium bg-grey100 text-decoration-none"
              size="small"
              v-text="card.category"
            ></VChip>
            <h5 class="text-h5 text-13 my-6">
              <NuxtLink
                class="text-decoration-none color-inherits"
                :to="card.link"
                >{{ card.title }}</NuxtLink
              >
            </h5>
            <div class="">
              <div class="d-flex align-center">
                <VAvatar class="" size="18">
                  <CodeIcon size="18" />
                </VAvatar>
                <div
                  class="d-flex"
                  v-for="language in card.languages"
                  v-bind:key="language"
                >
                  <VChip
                    class="text-body-2 ml-1"
                    size="small"
                    variant="outlined"
                    color="success"
                  >
                    {{ language }}
                  </VChip>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <VAvatar size="18">
                <TimelineEventIcon size="18" />
              </VAvatar>
              <span class="text-subtitle-2 ml-2" v-text="card.time"></span>
            </div>
          </VCardItem>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
