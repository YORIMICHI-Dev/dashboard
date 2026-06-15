<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
</script>

<template>
  <SharedUIParentCard title="住友電気工業株式会社">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12">
        <div class="px-4 py-2">
          <span class="text-sm">2019/04-2021/08</span>
          <h6 class="text-lg font-semibold">自動車部品に使われる鉄鋼系材料を研削する研削砥粒の開発</h6>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・鉄鋼系材料に対する砥粒の摩耗要因を調査、課題を克服する新砥粒の仕様を選定</li>
              <li>・開発砥粒の耐摩耗性評価。評価結果から砥粒の研削性能を解析しフィードバック</li>
              <li>・協業、顧客との社内・社外評価の打ち合わせ・報告</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・研削用砥石研究開発</li>
              <li>・マシニングセンタ技術者</li>
              <li>・電気メッキ、無電解メッキ技術者</li>
            </ul>
          </div>
          <USeparator class="my-3" />
        </div>
      </div>
    </div>
  </SharedUIParentCard>
</template>
