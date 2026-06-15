<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
</script>

<template>
  <SharedUIParentCard title="株式会社iPX">
    <div class="grid grid-cols-12 gap-6">
      <!-- AGVシミュレータ -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2022/06-2023/02</span>
          <h5 class="text-lg font-semibold">AGVシミュレータ（自社製品）の導入およびマップ要件機能の実装</h5>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・AGVの搬送経路を計画するAGVシミュレータの要件定義</li>
              <li>・要件定義に伴い既存シミュレータ改修内容の設計と実装</li>
              <li>・Project 主エンジニア</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・Pythonプログラマ</li>
              <li>・AGVシミュレータエンジン開発</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- NAS -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2022/02-2022/05</span>
          <h5 class="text-lg font-semibold">Neutral Architecture Searchによる物体検出ネットワークの画像分類学習器のゼロ学習探索</h5>
          <div class="p-2">
            <div class="flex items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Task</h5>
            </div>
            <ul>
              <li>・Neutoral Architecture Search論文内容の実装</li>
              <li>・先方提供スクリプトへの追加実装</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Role</h5>
            </div>
            <ul>
              <li>・Neutoral Architecture Search論文内容調査・要約</li>
              <li>・論文内容を実装、先方提供スクリプトへの追加実装</li>
            </ul>

            <div class="flex items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-lg font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <USeparator class="my-3" />
  </SharedUIParentCard>
</template>
