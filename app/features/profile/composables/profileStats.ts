import type { Cert } from '~/features/certification/composables/certifications';
import { certGroups } from '~/features/certification/composables/certifications';
import type { Project } from '~/features/history/composables/history';
import { companies, historyStats } from '~/features/history/composables/history';

const allCerts: Cert[] = certGroups.flatMap((g) => g.certs);

/** Hero統計タイル。値はすべて history / certification の静的データから算出 */
export const profileStats = {
  /** キャリア起点(最古のプロジェクト開始年)から現在までの年数 */
  years: historyStats.sinceYear ? new Date().getFullYear() - historyStats.sinceYear : null,
  projects: historyStats.projectCount,
  certs: allCerts.length,
};

/** 最上位資格(EXPERTレベル)。HIGHLIGHTSの資格カードに使用 */
export const expertCert: Cert | null = allCerts.find((c) => c.level === 'EXPERT') ?? null;

export type FeaturedProject = Project & { companySlug: string };

/** 代表プロジェクト(history.ts の featured フラグで選定、最大3件) */
export const featuredProjects: FeaturedProject[] = companies
  .flatMap((c) => c.projects.map((p) => ({ ...p, companySlug: c.slug })))
  .filter((p) => p.featured)
  .slice(0, 3);

export type CareerSummary = {
  name: string;
  slug: string;
  period: string;
  role: string;
  current: boolean;
};

/** CAREER要約リスト(社名・期間・役割のみ) */
export const careerSummary: CareerSummary[] = companies.map((c) => ({
  name: c.name,
  slug: c.slug,
  period: c.period,
  role: c.role,
  current: c.current === true,
}));
