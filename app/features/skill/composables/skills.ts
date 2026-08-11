// public/Icons 配下のAzure公式アイコン(importするとNuxtが壊れたURLに解決するため、公開URLを直接参照)
const azureVm = '/Icons/compute/10021-icon-service-Virtual-Machine.svg';
const azureFunctions = '/Icons/compute/10029-icon-service-Function-Apps.svg';
const azureWebApp = '/Icons/web/10035-icon-service-App-Services.svg';
const azureSqlServer = '/Icons/databases/10132-icon-service-SQL-Server.svg';
const azureOpenAi = '/Icons/ai + machine learning/03438-icon-service-Azure-OpenAI.svg';
const azureAiSearch = '/Icons/ai + machine learning/10044-icon-service-Cognitive-Search.svg';
const azureBlob = '/Icons/storage/10086-icon-service-Storage-Accounts.svg';

const cdn = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`;
const cdnBase = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`;

export type SkillItem = {
  name: string;
  /** 画像URL(公式アイコン優先)。画像がないものは共有Iconのアイコン名。無い場合はイニシャル表示にフォールバック */
  icon?: string;
  /** 経験年数 */
  years: number;
  /** FRONTEND / BACKEND などの補足タグ */
  tag?: string;
};

export type SkillCategory = {
  key: string;
  title: string;
  /** カードヘッダー用のSharedIconアイコン名 */
  headerIcon: string;
  /** 全幅の主役カードとして表示する */
  featured?: boolean;
  items: SkillItem[];
};

export const SKILLS_UPDATED = '2026.08';

export const skillCategories: SkillCategory[] = [
  {
    key: 'programming',
    title: 'Programming',
    headerIcon: 'code',
    featured: true,
    items: [
      { name: 'Python', icon: cdnBase('python/python-original.svg'), years: 5 },
      { name: 'JavaScript', icon: cdnBase('javascript/javascript-original.svg'), years: 4 },
      { name: 'TypeScript', icon: cdn('typescript/typescript-original.svg'), years: 3 },
      { name: 'C#', icon: cdn('csharp/csharp-original.svg'), years: 3 },
      { name: 'C++', icon: cdnBase('cplusplus/cplusplus-original.svg'), years: 0.5 },
    ],
  },
  {
    key: 'process',
    title: 'Process',
    headerIcon: 'route',
    featured: true,
    items: [
      { name: '実装', icon: 'phase-implementation', years: 5, tag: 'CODING' },
      { name: '詳細設計', icon: 'phase-detail-design', years: 3, tag: 'DETAIL DESIGN' },
      { name: 'クラウド', icon: 'phase-cloud', years: 3, tag: 'CLOUD' },
      { name: '保守対応', icon: 'phase-maintenance', years: 3, tag: 'MAINTENANCE' },
      { name: '要件定義', icon: 'phase-requirement', years: 2, tag: 'REQUIREMENT' },
      { name: '基本設計', icon: 'phase-basic-design', years: 2, tag: 'BASIC DESIGN' },
      { name: 'テスト', icon: 'phase-test', years: 2, tag: 'TEST' },
    ],
  },
  {
    key: 'framework',
    title: 'Framework',
    headerIcon: 'id',
    items: [
      { name: 'Nuxt', icon: cdn('nuxtjs/nuxtjs-original.svg'), years: 3, tag: 'FRONTEND' },
      { name: '.NET', icon: cdn('dotnetcore/dotnetcore-original.svg'), years: 3, tag: 'BACKEND' },
      { name: 'FastAPI', icon: cdn('fastapi/fastapi-original.svg'), years: 2, tag: 'BACKEND' },
      { name: 'Next.js', icon: cdn('nextjs/nextjs-original.svg'), years: 1, tag: 'FRONTEND' },
      { name: 'Flask', icon: cdn('flask/flask-original.svg'), years: 1, tag: 'BACKEND' },
      { name: 'Django', icon: cdnBase('django/django-plain.svg'), years: 0.5, tag: 'BACKEND' },
    ],
  },
  {
    key: 'azure',
    title: 'Azure',
    headerIcon: 'brand-azure',
    items: [
      { name: 'Virtual Machine', icon: azureVm, years: 3 },
      { name: 'Web App', icon: azureWebApp, years: 3 },
      { name: 'SQL Server', icon: azureSqlServer, years: 3 },
      { name: 'Azure OpenAI', icon: azureOpenAi, years: 3 },
      { name: 'AI Search', icon: azureAiSearch, years: 3 },
      { name: 'Blob Storage', icon: azureBlob, years: 3 },
      { name: 'Functions', icon: azureFunctions, years: 2 },
    ],
  },
  {
    key: 'db',
    title: 'Database',
    headerIcon: 'database-cog',
    items: [
      { name: 'SQL Server', icon: cdnBase('microsoftsqlserver/microsoftsqlserver-plain.svg'), years: 3 },
      { name: 'PostgreSQL', icon: cdnBase('postgresql/postgresql-original.svg'), years: 1 },
      { name: 'HDF', years: 1 },
      { name: 'MySQL', icon: cdnBase('mysql/mysql-original.svg'), years: 0.5 },
    ],
  },
  {
    key: 'os',
    title: 'OS',
    headerIcon: 'brand-windows',
    items: [
      { name: 'Windows', icon: cdn('windows8/windows8-original.svg'), years: 4 },
      { name: 'Ubuntu', icon: cdn('ubuntu/ubuntu-original.svg'), years: 2, tag: 'LINUX' },
      { name: 'Miracle Linux', icon: cdnBase('linux/linux-original.svg'), years: 1, tag: 'LINUX' },
    ],
  },
];
