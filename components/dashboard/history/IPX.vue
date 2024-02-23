<script setup lang="ts"></script>

<template>
  <SharedUIParentCard title="iPX Co." period="2021/02~2022/02">
    <VRow>
      <VCol cols="12">
        <SharedUiParentCard title="Avatar">
          <VRow>
            <!-- Resume -->
            <VCol cols="12" lg="8">
              <h4 class="h4">Resume</h4>
              <div class="pa-4">
                <div class="">
                  <span class="text-body-2">2022/06-2023/02</span>
                  <h5 class="h5">
                    AGVシミュレータ（自社製品）の導入およびマップ要件機能の実装
                  </h5>
                  <VList>
                    <VListItem>
                      <VListItemTitle
                        >・AGVの搬送経路を計画するAGVシミュレータの要件定義</VListItemTitle
                      >
                      <VListItemTitle
                        >・要件定義に伴い既存シミュレータ改修内容の設計と実装</VListItemTitle
                      >
                      <VListItemTitle>・Project 主エンジニア</VListItemTitle>
                    </VListItem>
                  </VList>
                  <VDivider class="my-3" />
                </div>
                <div class="">
                  <span class="text-body-2">2022/02-2022/05</span>
                  <h5 class="h5">
                    Neutral Architecture
                    Searchによる物体検出ネットワークの画像分類学習器のゼロ学習探索
                  </h5>
                  <VList>
                    <VListItem>
                      <VListItemTitle
                        >・Neutoral Architecture
                        Search論文内容の実装</VListItemTitle
                      >
                      <VListItemTitle
                        >・先方提供スクリプトへの追加実装</VListItemTitle
                      >
                    </VListItem>
                  </VList>
                  <VDivider />
                </div>
              </div>
            </VCol>

            <!-- Role -->
            <VCol cols="12" lg="4">
              <UiChildCard title="Variant" class="pb-10">
                <h4 class="h4">Ability</h4>
                <div class="mt-4 pa-4 bg-lightsuccess rounded-lg">
                  <div class="d-flex">
                    <UserCheckIcon class="mr-2" width="24" height="24" />
                    <h5 class="h5">Role</h5>
                  </div>
                  <VList class="bg-lightsuccess">
                    <VListItem>
                      <VListItemTitle>・Pythonプログラマ</VListItemTitle>
                      <VListItemTitle>・AGVシミュレータエンジン開発</VListItemTitle>
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
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                      height="32"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                      height="32"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                      height="32"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                      height="32"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
                      height="32"
                    />
                  </div>
                  <VDivider />
                </div>
              </UiChildCard>
            </VCol>
          </VRow>
        </SharedUiParentCard>
      </VCol>
    </VRow>
  </SharedUIParentCard>
</template>
