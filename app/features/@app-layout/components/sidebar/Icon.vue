<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';

const props = defineProps<{
  item: string;
  level: number;
}>();

// サイドバー固有の上書きアイコン。ナビ用アイコンは共有Icon
// (features/@shared/components/Icon)側と同一デザインに統一済みなので、
// ここにはサイドバーだけ見た目を変えたいものだけを残す。
// 未定義の名前は共有アイコンへフォールバック。
const icons: Record<string, string> = {
  // 開閉シェブロン: 背景なしのシンプルな山形(文字色に追従)
  'chevron-down': `<path d="m7.5 9.8 4.5 4.5 4.5-4.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
};
</script>

<template>
  <svg
    v-if="icons[props.item]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="none"
    aria-hidden="true"
    class="shrink-0"
    :class="props.level > 0 ? 'size-5' : 'size-6'"
    v-html="icons[props.item]"
  />
  <SharedIcon v-else :name="props.item" :class="props.level > 0 ? 'size-5' : 'size-6'" />
</template>
