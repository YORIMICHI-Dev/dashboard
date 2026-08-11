<script setup lang="ts">
// オリジナル自作SVGアイコン集（@iconify-json/tabler 依存を廃止）。
// すべて手作りのフラット・デュオトーン調。viewBox 24 で統一。
//   mode 'fill'  … currentColor の塗り（動的色を継承する circle-filled 用）
//   mode 'color' … 複数色を固定で埋め込んだオリジナルアイコン（既定）
type IconMode = 'fill' | 'color';
interface IconDef {
  mode?: IconMode;
  body: string;
}

const props = defineProps<{ name: string }>();

const icons: Record<string, IconDef> = {
  // ===== UI / 情報系 =====
  briefcase: {
    body: `<rect x="3" y="7" width="18" height="13" rx="3" fill="#FCD34D"/><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8h-2V6.6a.6.6 0 0 0-.6-.6h-2.8a.6.6 0 0 0-.6.6V8z" fill="#B45309"/><rect x="3" y="11.4" width="18" height="2.4" fill="#F59E0B"/><rect x="10.4" y="11" width="3.2" height="3.6" rx="1.1" fill="#FFFBEB"/>`,
  },
  mail: {
    body: `<rect x="3" y="5.5" width="18" height="13" rx="3" fill="#3B82F6"/><path d="M5.2 8.4 12 13l6.8-4.6" fill="none" stroke="#DBEAFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  'device-desktop': {
    body: `<rect x="2.5" y="4" width="19" height="12" rx="2.5" fill="#CBD5E1"/><rect x="4.8" y="6" width="14.4" height="8" rx="1.2" fill="#0EA5E9"/><path d="M9 20h6M12 16v4" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round"/>`,
  },
  'map-pin': {
    body: `<path d="M12 21.5c-4-4.3-6.5-7.6-6.5-11.2A6.5 6.5 0 0 1 18.5 10.3c0 3.6-2.5 6.9-6.5 11.2z" fill="#EF4444"/><circle cx="12" cy="10.2" r="2.5" fill="#FEE2E2"/>`,
  },
  // サイドバーと共通デザイン(背景タイルなしでグリフ自体に多色を入れたフラット調)
  'user-circle': {
    body: `<circle cx="12" cy="7.4" r="4.7" fill="#818CF8"/><circle cx="10.5" cy="6.1" r="1.3" fill="#C7D2FE"/><path d="M12 13.4c-4.8 0-8.3 2.9-8.3 7 0 .9.7 1.6 1.6 1.6h13.4c.9 0 1.6-.7 1.6-1.6 0-4.1-3.5-7-8.3-7z" fill="#4F46E5"/><path d="m9.2 13.7 2.8 3 2.8-3a12.4 12.4 0 0 0-5.6 0z" fill="#E0E7FF"/><path d="m12 15.6-1.3 1.4 1.3 3.7 1.3-3.7z" fill="#FBBF24"/>`,
  },
  code: {
    body: `<path d="M8.4 6.4 3 12l5.4 5.6" fill="none" stroke="#0EA5E9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.6 6.4 21 12l-5.4 5.6" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m14.1 4.4-4.2 15.2" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>`,
  },
  history: {
    body: `<circle cx="12" cy="12" r="9.7" fill="#F59E0B"/><circle cx="12" cy="12" r="7" fill="#FEF3C7"/><path d="M4.9 8.6A8 8 0 0 1 8.5 4.8" fill="none" stroke="#FDE68A" stroke-width="1.8" stroke-linecap="round"/><path d="M12 7.6V12l3.2 2" fill="none" stroke="#B45309" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.15" fill="#B45309"/>`,
  },
  certificate: {
    body: `<path d="m9 12.6-2.5 8.6 4.3-2.2 1.2 1.2V14z" fill="#3B82F6"/><path d="m15 12.6 2.5 8.6-4.3-2.2-1.2 1.2V14z" fill="#2563EB"/><circle cx="12" cy="8.9" r="6.9" fill="#F59E0B"/><circle cx="12" cy="8.9" r="5" fill="#FBBF24"/><path d="m12 5.6 1.03 2.1 2.32.34-1.68 1.63.4 2.3L12 10.89l-2.07 1.08.4-2.3-1.68-1.63 2.32-.34z" fill="#fff"/>`,
  },
  edit: {
    body: `<path d="M4.5 19.5 8 20l9.2-9.2-3.5-3.5L4.5 16z" fill="#93C5FD"/><path d="m17.4 8.4-3.5-3.5 1.5-1.5a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8z" fill="#2563EB"/><path d="m4.5 19.5 3.5.5.7-.7-3.5-3.5-.7.7z" fill="#FBBF24"/>`,
  },
  'chevron-down': {
    body: `<circle cx="12" cy="12" r="9.5" fill="#EEF2F7"/><path d="m8 10.5 4 4 4-4" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  'menu-2': {
    body: `<rect x="3" y="5" width="18" height="2.8" rx="1.4" fill="#3B82F6"/><rect x="3" y="10.6" width="18" height="2.8" rx="1.4" fill="#22C55E"/><rect x="3" y="16.2" width="18" height="2.8" rx="1.4" fill="#F59E0B"/>`,
  },
  checkbox: {
    body: `<rect x="3" y="3" width="18" height="18" rx="4.5" fill="#22C55E"/><path d="m7.4 12.2 3 3 6.2-6.6" fill="none" stroke="#fff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  user: {
    body: `<circle cx="12" cy="8" r="4.2" fill="#14B8A6"/><path d="M4.3 20.2a7.7 7.7 0 0 1 15.4 0z" fill="#5EEAD4"/>`,
  },
  id: {
    body: `<rect x="2.5" y="5" width="19" height="14" rx="3" fill="#DBEAFE"/><circle cx="8.4" cy="11" r="2.4" fill="#2563EB"/><path d="M4.6 16.4a3.8 3.8 0 0 1 7.6 0z" fill="#2563EB"/><rect x="14" y="8.8" width="5.2" height="1.9" rx=".95" fill="#60A5FA"/><rect x="14" y="13.2" width="5.2" height="1.9" rx=".95" fill="#60A5FA"/>`,
  },
  'database-cog': {
    body: `<ellipse cx="10.5" cy="6" rx="7.5" ry="3" fill="#67E8F9"/><path d="M3 6v6c0 1.5 3.3 2.8 7.5 3M3 12v6c0 1.4 3 2.7 7 3" fill="none" stroke="#0E7490" stroke-width="2" stroke-linecap="round"/><path d="M18 6v5.5" fill="none" stroke="#0E7490" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="17.5" r="3.6" fill="#0891B2"/><circle cx="18" cy="17.5" r="1.3" fill="#fff"/>`,
  },
  'circle-filled': {
    mode: 'fill',
    body: `<circle cx="12" cy="12" r="6.5"/>`,
  },

  // ===== 工程(開発プロセス) =====
  route: {
    body: `<circle cx="6.5" cy="6" r="3" fill="#22C55E"/><circle cx="17.5" cy="18" r="3" fill="#16A34A"/><path d="M6.5 9v4a4 4 0 0 0 4 4h4" fill="none" stroke="#86EFAC" stroke-width="2" stroke-linecap="round"/>`,
  },
  'phase-requirement': {
    body: `<rect x="4" y="3" width="13" height="18" rx="2" fill="#E0E7FF"/><path d="M7 7.5h7M7 10.5h7M7 13.5h4" fill="none" stroke="#6366F1" stroke-width="1.6" stroke-linecap="round"/><path d="m13.2 20.6.7-3.2 5-5 2.5 2.5-5 5z" fill="#F59E0B"/><path d="m18.9 12.4 2.5 2.5 1-1a1.2 1.2 0 0 0 0-1.7l-.8-.8a1.2 1.2 0 0 0-1.7 0z" fill="#B45309"/>`,
  },
  'phase-basic-design': {
    body: `<rect x="3" y="3.5" width="18" height="17" rx="2.5" fill="#1D4ED8"/><rect x="5.5" y="6" width="6.5" height="5" rx="1" fill="#93C5FD"/><rect x="14" y="6" width="4.5" height="12" rx="1" fill="#60A5FA"/><rect x="5.5" y="13" width="6.5" height="5" rx="1" fill="#BFDBFE"/>`,
  },
  'phase-detail-design': {
    body: `<path d="m3 17.4 14.4-14.4 3.6 3.6L6.6 21z" fill="#FBBF24"/><path d="m7 13.4 1.7 1.7M9.8 10.6l1.7 1.7M12.6 7.8l1.7 1.7" fill="none" stroke="#92400E" stroke-width="1.4" stroke-linecap="round"/><path d="m3 17.4 3.6 3.6-4.4.8z" fill="#B45309"/>`,
  },
  'phase-cloud': {
    body: `<path d="M6.6 19a4.4 4.4 0 0 1-.7-8.74 5.9 5.9 0 0 1 11.5-1.1A4.9 4.9 0 0 1 16.5 19z" fill="#0EA5E9"/><path d="M8.2 12.4a3.8 3.8 0 0 1 3.5-2.7" fill="none" stroke="#BAE6FD" stroke-width="1.6" stroke-linecap="round"/>`,
  },
  'phase-implementation': {
    body: `<rect x="2.5" y="4" width="19" height="16" rx="3" fill="#0F172A"/><path d="M8.4 9.4 5.8 12l2.6 2.6M15.6 9.4 18.2 12l-2.6 2.6" fill="none" stroke="#4ADE80" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="m13 8.4-2 7.2" fill="none" stroke="#86EFAC" stroke-width="1.9" stroke-linecap="round"/>`,
  },
  'phase-test': {
    body: `<rect x="4" y="3" width="16" height="18" rx="2.5" fill="#DCFCE7"/><path d="m7 8.2 1.4 1.4 2.6-2.6" fill="none" stroke="#16A34A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.4 8.6H17" fill="none" stroke="#16A34A" stroke-width="1.8" stroke-linecap="round"/><path d="m7 13.7 1.4 1.4L11 12.5" fill="none" stroke="#16A34A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.4 14.1H17" fill="none" stroke="#16A34A" stroke-width="1.8" stroke-linecap="round"/><path d="M7 18.4h6" fill="none" stroke="#86EFAC" stroke-width="1.8" stroke-linecap="round"/>`,
  },
  'phase-maintenance': {
    body: `<path d="M20.8 6.3a5.1 5.1 0 0 1-6.7 6.3l-6.2 6.2a2.3 2.3 0 0 1-3.2-3.2l6.2-6.2a5.1 5.1 0 0 1 6.3-6.7l-3 3 .9 2.7 2.7.9z" fill="#64748B"/><circle cx="6.3" cy="17.7" r="1.1" fill="#E2E8F0"/>`,
  },

  // ===== 装飾 =====
  heart: {
    body: `<path d="M12 20.8 4.6 13.4a4.7 4.7 0 0 1 6.6-6.6l.8.8.8-.8a4.7 4.7 0 0 1 6.6 6.6z" fill="#EC4899"/><path d="M7.4 8a2.6 2.6 0 0 1 2-.7" fill="none" stroke="#FBCFE8" stroke-width="1.6" stroke-linecap="round"/>`,
  },
  tie: {
    body: `<path d="M9.5 3h5l-1.2 3.2h-2.6z" fill="#38BDF8"/><path d="M10.8 6.8h2.4l1.5 8.4a1 1 0 0 1-.3.9l-2 1.9a.6.6 0 0 1-.8 0l-2-1.9a1 1 0 0 1-.3-.9z" fill="#0EA5E9"/>`,
  },
  zenn: {
    body: `<path d="M3 19.5h3.6c.2 0 .36-.1.46-.26L17.2 3.2c.1-.2-.02-.46-.27-.46h-3.4c-.16 0-.3.08-.39.22L2.6 18.9c-.06.12.02.6.4.6z" fill="#3EA8FF"/><path d="m13 19.5 4.6-7.4c.14-.22-.02-.5-.3-.5h-3.4c-.12 0-.24.06-.3.16L8.9 19c-.12.18.02.5.26.5z" fill="#0E83E0"/>`,
  },

  // ===== ブランド（オリジナル簡略マーク + ブランドカラー） =====
  'brand-python': {
    body: `<path fill="#3776AB" d="M11.7 3c-4 0-3.75 1.73-3.75 1.73l.005 1.8h3.82v.54H6.45S3.8 6.77 3.8 10.8s2.31 3.88 2.31 3.88h1.34v-1.73s-.07-2.31 2.28-2.31h3.79s2.2.04 2.2-2.13V5.2S16.5 3 11.7 3zM9.6 4.21a.69.69 0 1 1 0 1.38.69.69 0 0 1 0-1.38z"/><path fill="#FFD43B" d="M12.3 21c4 0 3.75-1.73 3.75-1.73l-.005-1.8h-3.82v-.54h5.32S20.2 17.23 20.2 13.2s-2.31-3.88-2.31-3.88h-1.34v1.73s.07 2.31-2.28 2.31h-3.79s-2.2-.04-2.2 2.13v3.31S7.5 21 12.3 21zm2.1-1.21a.69.69 0 1 1 0-1.38.69.69 0 0 1 0 1.38z"/>`,
  },
  'brand-c-sharp': {
    body: `<path fill="#8B5CF6" d="m12 2.4 8.5 4.9a1 1 0 0 1 .5.87v9.46a1 1 0 0 1-.5.87L12 23.6l-8.5-4.9a1 1 0 0 1-.5-.87V8.17a1 1 0 0 1 .5-.87z"/><path fill="#A78BFA" d="m12 2.4 8.5 4.9a1 1 0 0 1 .5.87L12 13.4 3 8.17a1 1 0 0 1 .5-.87z"/><text x="12" y="15.7" text-anchor="middle" font-family="'Segoe UI',Helvetica,Arial,sans-serif" font-size="8.4" font-weight="700" fill="#fff">C#</text>`,
  },
  'brand-nuxt': {
    body: `<path fill="#00DC82" d="M12.3 5.6a.8.8 0 0 1 1.38 0l8 13.45a.8.8 0 0 1-.69 1.2H13l-3.2-5.62z"/><path fill="#003C3C" d="M7.3 10.3a.8.8 0 0 1 1.38 0l5.22 8.75a.8.8 0 0 1-.69 1.2H2.78a.8.8 0 0 1-.69-1.2z"/>`,
  },
  'brand-github': {
    body: `<circle cx="12" cy="12" r="10" fill="#181717"/><path fill="#fff" d="M12 5.5a6.5 6.5 0 0 0-2.05 12.67c.32.06.44-.14.44-.31l-.01-1.1c-1.8.39-2.18-.78-2.18-.78-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.66.05 1 .67 1 .67.58.99 1.52.7 1.89.54.06-.42.23-.7.41-.86-1.44-.17-2.96-.72-2.96-3.21 0-.71.25-1.29.67-1.74-.07-.17-.29-.84.06-1.74 0 0 .55-.18 1.8.66a6.2 6.2 0 0 1 3.27 0c1.24-.84 1.79-.66 1.79-.66.35.9.13 1.57.06 1.74.42.45.67 1.03.67 1.74 0 2.5-1.52 3.04-2.97 3.2.23.2.44.6.44 1.2l-.01 1.79c0 .17.12.38.45.31A6.5 6.5 0 0 0 12 5.5z"/>`,
  },
  'brand-azure': {
    body: `<path fill="#0078D4" d="M11 4.4a1 1 0 0 1 1.9 0l5 13.85a.7.7 0 0 1-.66.95h-3.06a1 1 0 0 1-.95-.67L10 8.5z"/><path fill="#3CCBF4" d="m9.6 9.6-5.42 8.85a.7.7 0 0 0 .6 1.05h4.3a1 1 0 0 0 .63-.22l3.72-3.1a.6.6 0 0 0-.1-.99l-3.04-1.5 1.13-2z"/>`,
  },
  'brand-windows': {
    body: `<rect x="3" y="3.5" width="8" height="8" rx="1" fill="#F25022"/><rect x="13" y="3.5" width="8" height="8" rx="1" fill="#7FBA00"/><rect x="3" y="13" width="8" height="8" rx="1" fill="#00A4EF"/><rect x="13" y="13" width="8" height="8" rx="1" fill="#FFB900"/>`,
  },
  'brand-aws': {
    body: `<rect x="2.5" y="4" width="19" height="16" rx="3" fill="#232F3E"/><text x="12" y="12.4" text-anchor="middle" font-family="'Segoe UI',Helvetica,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#fff">aws</text><path d="M6.5 15.4c3.4 2.1 7.6 2.1 11 0" fill="none" stroke="#FF9900" stroke-width="1.6" stroke-linecap="round"/><path d="m16.9 16.3 1.7-.9-.3 1.9" fill="none" stroke="#FF9900" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  'brand-java': {
    body: `<path d="M5.5 11h11v5.3a4.2 4.2 0 0 1-4.2 4.2H9.7a4.2 4.2 0 0 1-4.2-4.2z" fill="#5382A1"/><path d="M16.5 12.6h1.5a2.35 2.35 0 0 1 0 4.7h-1.7" fill="none" stroke="#5382A1" stroke-width="1.6" stroke-linecap="round"/><path d="M8.9 9c-1-1.2.2-2.1.9-2.9.5-.6.9-1.2.4-2.1" fill="none" stroke="#E76F00" stroke-width="1.5" stroke-linecap="round"/><path d="M12.6 9.2c-1-1.2.2-2.1.9-2.9.5-.6.9-1.2.4-2.1" fill="none" stroke="#E76F00" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  'brand-linux': {
    body: `<path d="M12 2.8c-2.7 0-4.2 2-4.2 4.6 0 1.9-.8 3.2-1.6 4.8-.9 1.8-1.4 4.5.5 6.3 1.3 1.2 9.3 1.2 10.6 0 1.9-1.8 1.4-4.5.5-6.3-.8-1.6-1.6-2.9-1.6-4.8 0-2.6-1.5-4.6-4.2-4.6z" fill="#1A1A1A"/><ellipse cx="12" cy="14.6" rx="3.4" ry="4.1" fill="#F5F5F0"/><circle cx="10.7" cy="6.7" r=".85" fill="#fff"/><circle cx="13.3" cy="6.7" r=".85" fill="#fff"/><circle cx="10.8" cy="6.8" r=".38" fill="#111"/><circle cx="13.2" cy="6.8" r=".38" fill="#111"/><path d="m10.5 8.3 1.5 1.2 1.5-1.2-1.5-1z" fill="#F59E0B"/><path d="M8.1 19.5c-.9.9.2 1.9 1.3 1.5l1.4-.6z" fill="#F59E0B"/><path d="M15.9 19.5c.9.9-.2 1.9-1.3 1.5l-1.4-.6z" fill="#F59E0B"/>`,
  },
  'seal-jp': {
    body: `<rect x="4" y="3" width="16" height="18" rx="2" fill="#E0E7FF"/><path d="M7.5 7.5h9M7.5 10.5h9M7.5 13.5h5" fill="none" stroke="#6366F1" stroke-width="1.6" stroke-linecap="round"/><circle cx="15.6" cy="16.4" r="3.7" fill="#DC2626"/><text x="15.6" y="18.2" text-anchor="middle" font-family="sans-serif" font-size="4.8" font-weight="700" fill="#fff">合</text>`,
  },
  'ai-chip': {
    body: `<path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" fill="none" stroke="#A78BFA" stroke-width="1.6" stroke-linecap="round"/><rect x="6" y="6" width="12" height="12" rx="2.5" fill="#7C3AED"/><path d="m12 8.4.95 2 2.1.3-1.55 1.45.4 2.1L12 13.2l-1.9 1.05.4-2.1-1.55-1.45 2.1-.3z" fill="#FDE68A"/>`,
  },
};

const fallback: IconDef = { mode: 'fill', body: `<circle cx="12" cy="12" r="6"/>` };
const current = computed<IconDef>(() => icons[props.name] ?? fallback);
const mode = computed<IconMode>(() => current.value.mode ?? 'color');
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :fill="mode === 'fill' ? 'currentColor' : 'none'"
    stroke="none"
    aria-hidden="true"
    v-html="current.body"
  />
</template>
