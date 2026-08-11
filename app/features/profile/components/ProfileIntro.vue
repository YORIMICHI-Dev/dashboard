<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
</script>

<template>
  <div class="mt-11">
    <div
      class="font-mono-dc text-xs tracking-[0.16em] text-[#9A998F] border-b border-[#DEDCD4] pb-3"
    >
      INTRODUCTION
    </div>
    <div class="max-w-[720px]">
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[22px]">
        名古屋でITエンジニアとして受注開発の業務を行っています。最近では社内ナレッジを活用した<span
          class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]"
          >RAGアプリの開発</span
        >や、現場データの見える化を目的としたアプリを開発しています。
      </p>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[18px]">
        フルスタックエンジニアとして、APIの開発や画面のUI設計などのコーディングに加え、先方とのMTG資料の作成や定例会議などのフロント作業も実施しています。
      </p>
      <div class="mt-[26px] flex flex-wrap gap-2.5">
        <div
          class="inline-flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]"
        >
          <SharedIcon name="briefcase" class="size-4" />
          <span class="font-display font-bold text-sm text-[#111113]">株式会社UNAIIT</span>
          <span class="text-xs text-[#8A8980]">— 現職</span>
        </div>
        <div
          class="inline-flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]"
        >
          <SharedIcon name="map-pin" class="size-4" />
          <span class="font-display font-bold text-sm text-[#111113]">Nagoya</span>
          <span class="text-xs text-[#8A8980]">— 在住</span>
        </div>
        <div
          class="inline-flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]"
        >
          <SharedIcon name="heart" class="size-4" />
          <span class="font-display font-bold text-sm text-[#111113]">Married</span>
          <span class="text-xs text-[#8A8980]">— 既婚</span>
        </div>
      </div>
    </div>
  </div>
</template>
