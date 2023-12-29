import type { SharedUIChildCard } from '#build/components';
<script setup lang="ts"></script>

<template>
  <SharedUIParentCard title="UNAIIT Co.">
    <VRow>
      <VCol cols="12">
        <SharedUiParentCard title="Avatar">
          <VRow>
            <!-- Resume -->
            <VCol cols="12" lg="8">
              <h4 class="h4">Resume</h4>
              <div class="pa-4">
                <div class="">
                  <span class="text-body-2">2024/02~</span>
                  <h5 class="h5"></h5>
                  <VList>
                    <!-- <VListItem> -->
                      <!-- <VListItemTitle
                        >・Bard Sentence,
                        TFIDFによる文章類似度測定の実装</VListItemTitle
                      >
                      <VListItemTitle
                        >・AWS(ES2, S3, RDB,
                        SES)によるデプロイ環境構築</VListItemTitle
                      >
                      <VListItemTitle
                        >・Project Leader、窓口業務</VListItemTitle
                      >
                    </VListItem> -->
                    Coming soon
                  </VList>
                  <VDivider class="my-3" />
                </div>
                <div class="">
                  <span class="text-body-2">2024/02~</span>
                  <h5 class="h5"></h5>
                  <VList>
                    <!-- <VListItem> -->
                      <!-- <VListItemTitle
                        >・Bard Sentence,
                        TFIDFによる文章類似度測定の実装</VListItemTitle
                      >
                      <VListItemTitle
                        >・AWS(ES2, S3, RDB,
                        SES)によるデプロイ環境構築</VListItemTitle
                      >
                      <VListItemTitle
                        >・Project Leader、窓口業務</VListItemTitle
                      >
                    </VListItem> -->
Coming soon
                  </VList>
                  <VDivider />
                </div>
              </div>
            </VCol>

            <!-- Role -->
            <VCol cols="12" lg="4">
              <h4 class="h4">Ability</h4>
              <div class="mt-4 pa-4 bg-lightsuccess rounded-lg">
                <div class="d-flex">
                  <UserCheckIcon class="mr-2" width="24" height="24" />
                  <h5 class="h5">Role</h5>
                </div>
                <VList class="bg-lightsuccess">
                  <VListItem>
                    <!-- <VListItemTitle>・Python バックエンド開発</VListItemTitle>
                    <VListItemTitle>・AWSクラウド環境構築開発</VListItemTitle>
                    <VListItemTitle
                      >・Project Leader、担当窓口業務</VListItemTitle
                    > -->
                    coming soon
                  </VListItem>
                </VList>
                <VDivider class="my-2" />
                <div class="d-flex">
                  <BoltIcon class="mr-2" width="24" height="24" />
                  <h5 class="h5">Programming, Framework</h5>
                </div>
                <div
                  class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3"
                >
                  coming soon
                </div>
                <VDivider />
              </div>
            </VCol>
          </VRow>
        </SharedUiParentCard>
      </VCol>
    </VRow>
  </SharedUIParentCard>
</template>
