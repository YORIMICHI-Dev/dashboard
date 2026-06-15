<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
</script>

<template>
  <SharedUIParentCard title="Laniakea株式会社">
    <div class="grid grid-cols-12 gap-6">
      <!-- 電力需要気象予測 -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2023/05-2024/01</span>
          <h5 class="text-lg font-semibold">電力需要気象予測システム開発</h5>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・Hierarchical Data Format(HDF)->PostgreSQLスクリプト作成</li>
              <li>・Python環境(Ver. 3.10)のアップグレード</li>
              <li>・SQLAlchemy, PandasによるPostgreSQL ORM関数の作成</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・Python バックエンド開発</li>
              <li>・SQL操作API開発</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-plain-wordmark.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- チャットボット -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2023/03-2024/05</span>
          <h5 class="text-lg font-semibold">自動車整備工場 チャットボットアプリ開発</h5>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・Bard Sentence, TFIDFによる文章類似度測定の実装</li>
              <li>・AWS(ES2, S3, RDB, SES)によるデプロイ環境構築</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・Python バックエンド開発</li>
              <li>・AWSクラウド環境構築開発</li>
              <li>・Project Leader、窓口業務</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <USeparator class="my-3" />
  </SharedUIParentCard>
</template>
