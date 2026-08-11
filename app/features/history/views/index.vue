<script setup lang="ts">
import SharedIcon from '~/features/@shared/components/Icon/Icon.vue';
import type { Project } from '../composables/history';
import {
  companies,
  historyStats,
  parsePeriod,
  periodMonths,
  PROCESS_STEPS,
  projectsByEndDesc,
} from '../composables/history';

const TITLE = 'History';
useHead({ title: TITLE });

const formatYearMonth = (ym: { year: number; month: number }) => `${ym.year}/${String(ym.month).padStart(2, '0')}`;

const periodParts = (period: string) => {
  const { start, end, present } = parsePeriod(period);
  if (!start) return { start: period, end: null };
  return { start: formatYearMonth(start), end: present ? 'PRESENT' : end ? formatYearMonth(end) : null };
};

const durationLabel = (period: string) => {
  const months = periodMonths(period);
  if (months == null) return null;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (years === 0) return `${months}ヶ月`;
  return rest === 0 ? `${years}年` : `${years}年${rest}ヶ月`;
};

const projectView = (project: Project) => ({
  ...project,
  periodParts: periodParts(project.period),
  duration: durationLabel(project.period),
  orderedProcesses: PROCESS_STEPS.filter((step) => project.processes?.includes(step)),
});

type ProjectView = ReturnType<typeof projectView>;
type EntryView = { id: string; phases: ProjectView[] };

/** 同じgroupのプロジェクトを1エントリーに統合(フェーズは終了時期の新しい順) */
const buildEntries = (companyId: string, projects: Project[]): EntryView[] => {
  const entries: EntryView[] = [];
  const groupIndex = new Map<string, number>();
  for (const project of projectsByEndDesc(projects)) {
    const vm = projectView(project);
    if (project.group) {
      const existing = groupIndex.get(project.group);
      if (existing != null) {
        entries[existing]!.phases.push(vm);
        continue;
      }
      groupIndex.set(project.group, entries.length);
      entries.push({ id: `${companyId}:${project.group}`, phases: [vm] });
    } else {
      entries.push({ id: `${companyId}:${project.title}`, phases: [vm] });
    }
  }
  return entries;
};

const companyViews = companies.map((company, ci) => {
  const id = `company-${ci}`;
  return {
    ...company,
    id,
    tabLabel: company.name.replace(/株式会社/g, ''),
    entries: buildEntries(id, company.projects),
  };
});

const activeCompanyId = ref(companyViews.find((c) => c.current)?.id ?? companyViews[0]?.id ?? '');
const activeCompany = computed(() => companyViews.find((c) => c.id === activeCompanyId.value) ?? companyViews[0]);

const selectedPhase = reactive<Record<string, number>>({});
const phaseOf = (entry: EntryView): ProjectView => entry.phases[selectedPhase[entry.id] ?? 0] ?? entry.phases[0]!;

/** Phase付きプロジェクトは納品後も保守対応が続いている */
const isMaintained = (entry: EntryView) => entry.phases.some((p) => p.phase);
</script>

<template>
  <section class="font-jp text-[#111113]">
    <!-- ===== top meta ===== -->
    <div class="flex justify-between items-end border-b border-[#DEDCD4] pb-3.5">
      <span class="font-mono-dc text-xs tracking-[0.18em] text-[#9A998F]">
        HISTORY — WORK & PROJECTS
      </span>
      <span v-if="historyStats.updated" class="font-mono-dc text-xs text-[#9A998F]">
        UPDATED {{ historyStats.updated }}
      </span>
    </div>

    <!-- ===== title + stats ===== -->
    <div class="mt-7 flex justify-between items-end gap-8 flex-wrap">
      <div>
        <h1 class="font-display font-bold text-[64px] sm:text-[80px] leading-[0.92] tracking-[-0.035em] m-0">
          History<span class="text-[#22C55E]">.</span>
        </h1>
        <p class="mt-[18px] text-base text-[#52525A] max-w-[540px]">
          受託開発の現場で担ってきたプロジェクトの記録。要件定義から実装、クラウド設計・運用まで、フルスタックでの関わりを企業ごとにまとめています。
        </p>
      </div>
      <div class="flex gap-2.5">
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ historyStats.projectCount }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            PROJECTS
          </div>
        </div>
        <div class="border border-[#DEDCD4] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none">{{ historyStats.companyCount }}</div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A998F] mt-0.5">
            COMPANIES
          </div>
        </div>
        <div class="bg-[#111113] rounded-xl px-[18px] py-3.5 text-center min-w-[92px]">
          <div class="font-display font-bold text-[30px] leading-none text-[#22C55E]">
            {{ historyStats.sinceYear ?? '—' }}
          </div>
          <div class="font-mono-dc text-[10px] tracking-[0.12em] text-[#9A9890] mt-0.5">SINCE</div>
        </div>
      </div>
    </div>

    <!-- ===== company tabs ===== -->
    <div class="mt-9 flex flex-wrap gap-2">
      <button
        v-for="company in companyViews"
        :key="company.id"
        type="button"
        class="company-tab flex items-baseline gap-2 border rounded-full px-4 py-2 cursor-pointer transition-colors"
        :class="
          activeCompanyId === company.id
            ? 'bg-[#111113] border-[#111113] text-white'
            : 'bg-white border-[#DEDCD4] text-[#52525A] hover:border-[#B4B2A8]'
        "
        @click="activeCompanyId = company.id"
      >
        <span class="font-display font-bold text-sm">{{ company.tabLabel }}</span>
        <span
          class="font-mono-dc text-[10px] tracking-[0.06em]"
          :class="activeCompanyId === company.id ? 'text-[#22C55E]' : 'text-[#9A998F]'"
        >
          {{ company.period }}
        </span>
      </button>
    </div>

    <!-- ===== active company ===== -->
    <template v-if="activeCompany">
      <!-- company divider -->
      <div
        class="mt-9 flex items-baseline gap-4 pb-3.5 flex-wrap"
        :class="activeCompany.current ? 'border-b-2 border-[#111113]' : 'border-b-2 border-[#DEDCD4]'"
      >
        <h2
          class="font-display font-bold text-[28px] tracking-[-0.02em] m-0"
          :class="activeCompany.current ? '' : 'text-[#52525A]'"
        >
          {{ activeCompany.name }}
        </h2>
        <span
          class="font-mono-dc text-xs"
          :class="activeCompany.current ? 'text-[#1A9E5E]' : 'text-[#1184C7]'"
        >
          {{ activeCompany.period }}
        </span>
        <div class="flex-1" />
        <span class="font-mono-dc text-[11px] tracking-[0.12em] text-[#9A998F]">
          {{ activeCompany.role }}
        </span>
      </div>

      <!-- project entries -->
      <article
        v-for="entry in activeCompany.entries"
        :key="entry.id"
        class="proj-entry mt-5 bg-white border border-[#E7E5DF] rounded-[20px] p-6 lg:p-[30px] grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)] gap-x-9 gap-y-5 items-start"
      >
        <!-- phase tabs -->
        <div
          v-if="entry.phases.length > 1"
          class="lg:col-span-2 flex flex-wrap gap-1.5 border-b border-[#EFEEE9] pb-4"
        >
          <button
            v-for="(ph, pi) in entry.phases"
            :key="ph.title"
            type="button"
            class="font-mono-dc text-[10px] tracking-[0.1em] border rounded-full px-3 py-1 cursor-pointer transition-colors"
            :class="
              (selectedPhase[entry.id] ?? 0) === pi
                ? 'bg-[#111113] border-[#111113] text-white'
                : 'bg-white border-[#DEDCD4] text-[#52525A] hover:border-[#B4B2A8]'
            "
            @click="selectedPhase[entry.id] = pi"
          >
            {{ ph.phase ?? `#${pi + 1}` }}
          </button>
          <span v-if="isMaintained(entry)" class="maint-badge ml-auto">
            <span class="maint-dot" />
            保守対応中
          </span>
        </div>

        <template v-for="project in [phaseOf(entry)]" :key="project.title">
        <!-- meta column -->
        <aside class="flex flex-wrap items-center gap-x-4 gap-y-2.5 lg:block lg:border-r lg:border-[#EFEEE9] lg:pr-7 lg:self-stretch">
          <div class="font-mono-dc text-xs tracking-[0.08em] text-[#2B2B30]">
            <span>{{ project.periodParts.start }}</span>
            <template v-if="project.periodParts.end">
              <span class="lg:hidden"> — {{ project.periodParts.end }}</span>
              <span class="hidden lg:block h-3 border-l border-[#DEDCD4] ml-[3px] my-1" />
              <span class="hidden lg:inline">{{ project.periodParts.end }}</span>
            </template>
          </div>
          <div v-if="project.duration" class="font-mono-dc text-[11px] text-[#9A998F] lg:mt-2">
            {{ project.duration }}
          </div>
          <span
            v-if="project.phase && entry.phases.length === 1"
            class="font-mono-dc text-[11px] tracking-[0.1em] text-[#1A9E5E] border border-[#BFE9CF] bg-[#EAF8F0] px-[11px] py-1 rounded-full shrink-0 lg:inline-block lg:mt-3"
          >
            {{ project.phase }}
          </span>
          <span
            v-if="entry.phases.length === 1 && isMaintained(entry)"
            class="maint-badge shrink-0 lg:mt-3"
          >
            <span class="maint-dot" />
            保守対応中
          </span>
          <div v-if="project.orderedProcesses.length" class="w-full flex flex-wrap gap-1.5 lg:mt-4">
            <span
              v-for="step in project.orderedProcesses"
              :key="step"
              class="text-[10px] text-[#52525A] bg-[#F4F3EF] border border-[#E7E5DF] rounded-md px-1.5 py-0.5"
            >
              {{ step }}
            </span>
          </div>
          <div v-if="project.skills.length" class="w-full flex flex-wrap gap-1.5 lg:mt-4">
            <span
              v-for="skill in project.skills"
              :key="skill.name"
              class="inline-flex items-center gap-1.5 border border-[#DEDCD4] bg-[#FAFAF8] rounded-lg px-2 py-1"
            >
              <img
                v-if="skill.icon.includes('/')"
                :src="skill.icon"
                :alt="skill.name"
                class="w-3.5 h-3.5 object-contain"
              />
              <SharedIcon v-else :name="skill.icon" class="w-3.5 h-3.5 shrink-0" />
              <span class="font-mono-dc text-[10px] tracking-[0.04em] text-[#52525A]">
                {{ skill.name }}
              </span>
            </span>
          </div>
        </aside>

        <!-- body column -->
        <div class="min-w-0">
          <h3 class="font-display font-bold text-xl leading-[1.4] tracking-[-0.01em] m-0">
            {{ project.title }}
          </h3>
          <div class="h-px bg-[#EFEEE9] mt-4" />

          <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <!-- TASK -->
            <div>
              <div class="flex items-center gap-3">
                <span class="font-mono-dc text-[11px] tracking-[0.18em] text-[#111113]">TASK</span>
                <span class="flex-1 h-px bg-[#E7E5DF]" />
              </div>
              <ol class="m-0 mt-1 p-0 list-none">
                <li
                  v-for="(task, ti) in project.tasks"
                  :key="ti"
                  class="flex gap-3.5 items-start py-2.5"
                  :class="ti > 0 ? 'border-t border-[#F2F1EC]' : ''"
                >
                  <span class="font-mono-dc text-[11px] text-[#1A9E5E] shrink-0 mt-[5px]">
                    {{ String(ti + 1).padStart(2, '0') }}
                  </span>
                  <span class="text-sm leading-[1.75] text-[#2B2B30]">{{ task }}</span>
                </li>
              </ol>
            </div>

            <!-- ROLE -->
            <div>
              <div class="flex items-center gap-3">
                <span class="font-mono-dc text-[11px] tracking-[0.18em] text-[#111113]">ROLE</span>
                <span class="flex-1 h-px bg-[#E7E5DF]" />
              </div>
              <ol class="m-0 mt-1 p-0 list-none">
                <li
                  v-for="(role, ri) in project.roles"
                  :key="ri"
                  class="flex gap-3.5 items-start py-2.5"
                  :class="ri > 0 ? 'border-t border-[#F2F1EC]' : ''"
                >
                  <span class="font-mono-dc text-[11px] text-[#1184C7] shrink-0 mt-[5px]">
                    {{ String(ri + 1).padStart(2, '0') }}
                  </span>
                  <span class="text-sm leading-[1.75] text-[#2B2B30]">{{ role }}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        </template>
      </article>
    </template>
  </section>
</template>

<style scoped>
.proj-entry {
  transition: border-color 0.18s, box-shadow 0.18s;
}
.maint-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #1a9e5e;
  border: 1px solid #bfe9cf;
  background: #eaf8f0;
  border-radius: 9999px;
  padding: 4px 11px;
}
.maint-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #22c55e;
  animation: maint-pulse 1.8s ease-in-out infinite;
}
@keyframes maint-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.proj-entry:hover {
  border-color: #cfcdc4;
  box-shadow: 0 14px 40px rgba(17, 17, 19, 0.06);
}
</style>
