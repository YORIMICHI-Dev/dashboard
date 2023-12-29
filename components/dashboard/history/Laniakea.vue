<script setup lang="ts">
import { UserCheckIcon } from 'vue-tabler-icons';
</script>

<template>
  <SharedUIParentCard title="Laniakea Co.">
    <VRow>
      <VCol cols="12">
        <SharedUiParentCard title="Avatar">
          <VRow>
            <!-- Resume -->
            <VCol cols="12" lg="8">
              <h4 class="h4">Resume</h4>
              <div class="pa-4">
                <div class="">
                  <span class="text-body-2">2023/05-2024/01</span>
                  <h5 class="h5">電力需要気象予測システム開発</h5>
                  <VList>
                    <VListItem>
                      <VListItemTitle
                        >・Hierarchical Data
                        Format(HDF)のデータ構造をPostgreSQLへ変換するスクリプト作成</VListItemTitle
                      >
                      <VListItemTitle
                        >・Python環境(Ver. 3.10)のアップグレード</VListItemTitle
                      >
                      <VListItemTitle
                        >・SQLAlchemy,
                        PandasによるPostgreSQLアクセス関数の作成</VListItemTitle
                      >
                    </VListItem>
                  </VList>
                  <VDivider class="my-3" />
                </div>
                <div class="">
                  <span class="text-body-2">2023/03-2024/05</span>
                  <h5 class="h5">自動車整備工場 チャットボットアプリ開発</h5>
                  <VList>
                    <VListItem>
                      <VListItemTitle
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
                    </VListItem>
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
                    <VListItemTitle>・Python バックエンド開発</VListItemTitle>
                    <VListItemTitle>・AWSクラウド環境構築開発</VListItemTitle>
                    <VListItemTitle
                      >・Project Leader、担当窓口業務</VListItemTitle
                    >
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
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    height="32"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                    height="32"
                  />
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
