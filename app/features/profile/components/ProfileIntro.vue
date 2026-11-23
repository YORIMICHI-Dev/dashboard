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
    <div>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[22px]">
        名古屋でITエンジニアとして受託開発の業務を行っています。建設業界の顧客を中心に、社内ナレッジを活用した<span
          class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]"
          >RAGアプリの開発</span
        >などAI技術の取り組みや、実行予算見積システムや建物劣化診断アプリなど顧客ドメインに特化した業務アプリの開発に従事しています。
      </p>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[18px]">
        現職では<span class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]">リードエンジニア 兼 プロジェクトマネージャー</span>として、建設会社向け実行予算アプリの開発をリードしています。業務シナリオの整理を起点とした要件定義、フェーズ全体のスケジュール策定、週次定例での先方との仕様調整・進捗報告を担いながら、フルスタックエンジニアとして Nuxt / .NET / FastAPI による実装も行っています。あわせて開発メンバーへの仕様共有やコードレビュー、DDD アーキテクチャへのリファクタリングといった品質面の取り組みから、リリース後の問い合わせ・不具合対応まで一貫して携わっています。
      </p>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[18px]">
        強みは<span class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]">少数メンバーによるアジャイル開発</span>です。少人数のチームで顧客と近い距離を保ちながら、スピード感を持って開発を進めるスタイルを好んでいます。まずモックアプリを素早く作って顧客に触ってもらい、先方との週次MTGでフィードバックを受けて改善する、というサイクルを短い間隔で繰り返しながら開発を進めます。また、<span
          class="bg-[linear-gradient(transparent_62%,#C6F0D7_62%)]"
          >FDE（Forward Deployed Engineer）</span
        >のように顧客の現場に入り込み、システムを発注する側の目線に立って「本当に必要なもの」を追求して開発することが好きです。
      </p>
      <p class="text-[17px] leading-loose text-[#2B2B30] mt-[18px]">
        好きなフレームワークは<span class="font-display font-bold text-[#111113]">Nuxt</span>と<span
          class="font-display font-bold text-[#111113]"
          >.NET</span
        >です。
      </p>
    </div>
    <div class="mt-[26px] grid grid-cols-2 lg:grid-cols-4 gap-2.5">
      <div class="flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]">
        <SharedIcon name="briefcase" class="size-4 shrink-0" />
        <span class="font-display font-bold text-sm text-[#111113]">株式会社UNAIIT</span>
        <span class="text-xs text-[#8A8980]">— 現職</span>
      </div>
      <div class="flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]">
        <SharedIcon name="map-pin" class="size-4 shrink-0" />
        <span class="font-display font-bold text-sm text-[#111113]">Nagoya</span>
        <span class="text-xs text-[#8A8980]">— 在住</span>
      </div>
      <div class="flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]">
        <SharedIcon name="heart" class="size-4 shrink-0" />
        <span class="font-display font-bold text-sm text-[#111113]">Married</span>
        <span class="text-xs text-[#8A8980]">— 既婚</span>
      </div>
      <div class="flex items-center gap-2.5 border border-[#DEDCD4] rounded-xl px-4 py-[11px]">
        <SharedIcon name="child-girl" class="size-4 shrink-0" />
        <span class="font-display font-bold text-sm text-[#111113]">Daughter</span>
        <span class="text-xs text-[#8A8980]">— 娘1人</span>
      </div>
    </div>
  </div>
</template>
