<script setup lang="ts"></script>

<template>
  <SharedUIParentCard title="Sumitomo Electric Co.">
    <!-- Resume -->
    <VRow>
      <VCol cols="12" lg="8">
        <h4 class="h4">Resume</h4>
        <div class="pa-4">
          <div class="">
            <span class="text-body-2">2019/04-2021/08</span>
            <h6 class="h5">
              自動車部品に使われる鉄鋼系材料を研削する研削砥粒の開発
            </h6>
            <VList>
              <VListItem>
                <VListItemTitle
                  >・鉄鋼系材料に対する砥粒の摩耗要因を調査、課題を克服する新砥粒の仕様を選定</VListItemTitle
                >
                <VListItemTitle
                  >・開発砥粒の耐摩耗性評価。評価結果から砥粒の研削性能を解析しフィードバック</VListItemTitle
                >
                <VListItemTitle
                  >・協業、顧客との社内・社外評価の打ち合わせ・報告</VListItemTitle
                >
              </VListItem>
            </VList>
            <VDivider class="my-3" />
          </div>
        </div>
      </VCol>
      <VCol cols="12" lg="4">
        <!-- Role -->
        <h4 class="h4">Ability</h4>
        <div class="mt-4 pa-4 bg-lightsuccess rounded-lg">
          <div class="d-flex">
            <UserCheckIcon class="mr-2" width="24" height="24" />
            <h5 class="h5">Role</h5>
          </div>
          <VList class="bg-lightsuccess">
            <VListItem>
              <VListItemTitle>・研削用砥石研究開発</VListItemTitle>
              <VListItemTitle>・マシニングセンタ技術者</VListItemTitle>
              <VListItemTitle>・電気メッキ、無電解メッキ技術者</VListItemTitle>
            </VListItem>
          </VList>
        </div>
      </VCol>
    </VRow>
  </SharedUIParentCard>
</template>
