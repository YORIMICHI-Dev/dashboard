<script setup lang="ts">
import { certGroups, type CertLevel } from '../composables/certifications';

const TITLE = 'Certification';
useHead({ title: TITLE });

const allCerts = certGroups.flatMap((g) => g.certs);
const earned = allCerts.length;
const categories = certGroups.length;
const expert = allCerts.filter((c) => c.level === 'EXPERT').length;

// レベル別のアクセント（バッジ色 / ピル配色）
type Accent = { badge: string; pill: string };
const ACCENTS: Record<CertLevel | 'DEFAULT', Accent> = {
  EXPERT: { badge: '#22C55E', pill: 'color:#1A9E5E;border:1px solid #BFE9CF;background:#EAF8F0;' },
  ASSOCIATE: { badge: '#1184C7', pill: 'color:#1184C7;border:1px solid #BFE0F4;background:#E9F4FB;' },
  'LEVEL 1': { badge: '#1184C7', pill: 'color:#1184C7;border:1px solid #BFE0F4;background:#E9F4FB;' },
  SILVER: { badge: '#1184C7', pill: 'color:#1184C7;border:1px solid #BFE0F4;background:#E9F4FB;' },
  FUNDAMENTALS: { badge: '#9A998F', pill: 'color:#6E6E73;border:1px solid #DEDCD4;background:#F4F3EF;' },
  FOUNDATIONAL: { badge: '#9A998F', pill: 'color:#6E6E73;border:1px solid #DEDCD4;background:#F4F3EF;' },
  DEFAULT: { badge: '#9A998F', pill: 'color:#6E6E73;border:1px solid #DEDCD4;background:#F4F3EF;' },
};
const accent = (level?: CertLevel) => ACCENTS[level ?? 'DEFAULT'];
</script>

<template>
  <section class="font-jp text-[#111113]">
    <!-- ===== top meta ===== -->
    <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
      <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
        CERTIFICATION — CREDENTIALS
      </span>
      <span class="font-mono-dc text-xs text-[#9A998F]">UPDATED 2026.06</span>
    </div>

    <!-- ===== title + stats ===== -->
    <div class="mt-7 flex justify-between items-end gap-8 flex-wrap">
      <div>
        <h1 class="font-display font-bold text-[64px] sm:text-[80px] leading-[0.92] tracking-[-0.035em] m-0">
          Certified<span class="text-[#22C55E]">.</span>
        </h1>
        <p class="mt-[18px] text-base text-[#52525A] max-w-[540px]">
          Microsoft Azure / AWS のクラウド資格を中心に、情報処理技術者試験などの国家資格、AI・Linux・Java
          まで幅広く取得。実務の裏付けとなる認定資格をまとめています。
        </p>
      </div>
      <div class="flex gap-2.5">
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ earned }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">EARNED</div>
        </div>
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ categories }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            CATEGORIES
          </div>
        </div>
        <div class="bg-[#111113] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none text-[#22C55E]">
            {{ expert }}
          </div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A9890] mt-0.5">EXPERT</div>
        </div>
      </div>
    </div>

    <!-- ===== groups ===== -->
    <template v-for="(group, gi) in certGroups" :key="group.category">
      <!-- section divider -->
      <div
        class="mt-12 flex items-baseline gap-4 pb-3.5 flex-wrap"
        :class="gi === 0 ? 'border-b-2 border-[#111113]' : 'border-b-2 border-[#DEDCD4]'"
      >
        <h2 class="font-display font-bold text-[28px] tracking-[-0.02em] m-0">
          {{ group.category }}
        </h2>
        <div class="flex-1" />
        <span class="font-mono-dc text-[11px] tracking-[0.12em] text-[#9A998F]">
          {{ group.label }}
        </span>
      </div>

      <!-- cert grid -->
      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        <div
          v-for="cert in group.certs"
          :key="cert.code ?? cert.name"
          class="cert-card bg-white border border-[#E7E5DF] rounded-[18px] p-6 min-w-0"
        >
          <div class="flex justify-between items-center">
            <span
              class="w-6 h-6 rounded-[7px] flex items-center justify-center shrink-0"
              :style="{ background: accent(cert.level).badge }"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span class="font-mono-dc text-xs text-[#9A998F]">{{ cert.date }}</span>
          </div>

          <div
            v-if="cert.code"
            class="font-display font-bold text-[30px] tracking-[-0.02em] mt-5"
          >
            {{ cert.code }}
          </div>
          <div
            class="text-[#2B2B30] leading-[1.5] mt-2"
            :class="cert.code ? 'text-sm min-h-[42px]' : 'font-display font-bold text-xl tracking-[-0.01em] min-h-[56px] flex items-center'"
          >
            {{ cert.name }}
          </div>

          <div v-if="cert.level" class="mt-4">
            <span
              class="inline-flex items-center px-3 py-[5px] rounded-full font-mono-dc text-[10px] tracking-[0.1em]"
              :style="accent(cert.level).pill"
            >
              {{ cert.level }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
.cert-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.cert-card:hover {
  border-color: #cfcdc4;
  box-shadow: 0 14px 40px rgba(17, 17, 19, 0.07);
  transform: translateY(-3px);
}
</style>
