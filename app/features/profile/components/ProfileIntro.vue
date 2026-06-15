<script setup lang="ts">
const timeline = [
  {
    when: 'CURRENT — 2024.04~',
    org: '株式会社UNAIIT',
    note: 'フルスタック / RAGアプリ・現場データ可視化',
    dot: '#38BDF8',
  },
  {
    when: '2023.03 — 2024.05',
    org: 'Laniakea株式会社',
    note: 'Python / 電力需要予測・チャットボット',
    dot: '#22C55E',
  },
  {
    when: '2022.02 — 2023.02',
    org: '株式会社iPX',
    note: 'Python / AGVシミュレータ・物体検出NAS',
    dot: '#38BDF8',
  },
  {
    when: '2021.09 — 2021.12',
    org: 'KIOXIA株式会社',
    note: '試作SSDサンプルの生産管理・折衝',
    dot: '#22C55E',
  },
  {
    when: '2019.04 — 2021.08',
    org: '住友電気工業株式会社',
    note: '自動車部品向け研削砥粒の研究開発',
    dot: '#38BDF8',
  },
];
</script>

<template>
  <div class="mt-11 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14">
    <!-- introduction -->
    <div>
      <div
        class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F] border-b border-[#DEDCD4] pb-3"
      >
        INTRODUCTION
      </div>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[22px]">
        名古屋でITエンジニアとして受注開発の業務を行っています。最近では社内ナレッジを活用した<span
          class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]"
          >RAGアプリの開発</span
        >や、現場データの見える化を目的としたアプリを開発しています。
      </p>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[18px]">
        フルスタックエンジニアとして、APIの開発や画面のUI設計などのコーディングに加え、先方とのMTG資料の作成や定例会議などのフロント作業も実施しています。
      </p>
      <div
        class="mt-[26px] inline-flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]"
      >
        <UIcon name="i-tabler-briefcase" class="size-4 text-[#111113]" />
        <span class="font-display font-bold text-sm text-[#111113]">株式会社UNAIIT</span>
        <span class="text-xs text-[#8A8980]">— 現職</span>
      </div>
    </div>

    <!-- career -->
    <div>
      <div
        class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F] border-b border-[#DEDCD4] pb-3"
      >
        CAREER
      </div>
      <div v-for="t in timeline" :key="t.org" class="flex gap-4 mt-[22px]">
        <div class="flex flex-col items-center pt-1">
          <span class="w-[11px] h-[11px] rounded-full block" :style="{ background: t.dot }" />
          <span class="w-px flex-1 bg-[#DEDCD4] mt-1.5" />
        </div>
        <div class="pb-1.5">
          <div class="font-mono-dc text-[11px] tracking-widest text-[#9A998F]">{{ t.when }}</div>
          <div class="font-display font-bold text-[17px] mt-1 mb-[3px] text-[#111113]">
            {{ t.org }}
          </div>
          <div class="text-[13px] text-[#6E6E73]">{{ t.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
