<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
</script>

<template>
  <SharedUIParentCard title="KIOXIA株式会社">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12">
        <div class="px-4 py-2">
          <span class="text-sm">2021/09-2021/12</span>
          <h6 class="text-lg font-semibold">企業向け試作SSDサンプルの生産計画立案と実行</h6>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・SSD製造協業企業（台湾法人）と生産計画の打ち合わせ</li>
              <li>・社内客先担当とSSD製造協業企業との試作スケジュールの折衝</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・SSD生産管理担当</li>
              <li>・パートナー企業との折衝</li>
            </ul>
          </div>
          <USeparator class="my-3" />
        </div>
      </div>
    </div>
  </SharedUIParentCard>
</template>
