<script setup lang="ts">
import { recentTransaction } from './recentTransactions';
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle class="text-h4">Recent Transactions</VCardTitle>
      <div class="recent-transaction mt-10 px-3">
        <div v-for="list in recentTransaction" :key="list.title">
          <VRow class="d-flex mb-4">
            <VCol cols="4" lg="3" md="auto" sm="auto" class="px-0 pt-0 pb-1 d-flex align-start">
              <h6 class="text-body-1 textSecondary text-no-wrap">
                {{ list.title }}
              </h6>
            </VCol>
            <VCol cols="1" sm="1" class="px-0 text-center pt-0 pb-1">
              <CircleIcon size="13" :class="'text-' + list.textcolor" />
              <div v-if="list.line" class="line mx-auto bg-grey100"></div>
            </VCol>
            <VCol cols="7" sm="8" class="pt-0 pb-1">
              <h6 v-if="list.boldtext" class="text-body-1 font-weight-bold">
                {{ list.subtitle }}
              </h6>
              <h6 v-else class="text-body-1 textSecondary">
                {{ list.subtitle }}
              </h6>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardItem>
  </VCard>
</template>
