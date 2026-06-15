<script setup lang="ts">
const infos = [
  { icon: 'i-tabler-briefcase', text: '株式会社UNAIIT' },
  { icon: 'i-tabler-mail', text: 'yorimichi.dev@gmail.com' },
  { icon: 'i-tabler-device-desktop', text: 'https://dashboard-daisuke.vercel.app/' },
  { icon: 'i-tabler-map-pin', text: '三重県 四日市市' },
];
</script>

<template>
  <UCard>
    <h4 class="text-xl font-semibold">Introduction</h4>
    <div class="mb-5">
      <p class="text-base leading-relaxed">
        名古屋でITエンジニアとして受注開発の業務を行っています。
        最近では社内ナレッジを活用したRAGアプリの開発や、現場データの見える化を目的としたアプリを開発しています。
      </p>
      <p class="text-base leading-relaxed">
        フルスタックエンジニアとして、APIの開発や画面のUI設計などのコーディングや、先方とのMTG資料の作成や定例会議などのフロント作業も実施しています。
      </p>
    </div>
    <div v-for="info in infos" :key="info.text" class="flex items-center gap-3 mb-5">
      <UIcon :name="info.icon" class="size-5" />
      <span class="text-base font-semibold">{{ info.text }}</span>
    </div>
  </UCard>
</template>
