<script setup lang="ts">
import { recentTransaction } from '../composables/recentTransactions';
</script>

<template>
  <UCard>
    <h4 class="text-xl font-semibold">Recent Transactions</h4>
    <div class="recent-transaction mt-10 px-3">
      <div v-for="list in recentTransaction" :key="list.title" class="flex mb-4">
        <div class="whitespace-nowrap pr-3" style="width: 110px">
          <h6 class="text-base text-muted">{{ list.title }}</h6>
        </div>
        <div class="text-center px-2 flex flex-col items-center">
          <UIcon name="i-tabler-circle-filled" class="size-3" :class="'text-' + list.textcolor" />
          <div v-if="list.line" class="line bg-muted" />
        </div>
        <div class="flex-1 pl-2">
          <h6 class="text-base" :class="list.boldtext ? 'font-bold' : 'text-muted'">
            {{ list.subtitle }}
          </h6>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.line {
  width: 2px;
  flex: 1;
  min-height: 24px;
  margin-top: 4px;
}
</style>
