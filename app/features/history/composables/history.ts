// public/Icons 配下のAzure公式アイコン(importするとNuxtが壊れたURLに解決するため、公開URLを直接参照)
// スペースや + を含むパスはデプロイ先で404になるため、Icons/azure 配下のコピーを参照する
const openAi = '/Icons/azure/azure-openai.svg';
const aiSearch = '/Icons/azure/ai-search.svg';
const speechService = '/Icons/azure/speech-services.svg';
const webApp = '/Icons/web/10035-icon-service-App-Services.svg';
const containerInstance = '/Icons/containers/10104-icon-service-Container-Instances.svg';

const cdn = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`;
const cdnBase = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`;

export type Skill = {
  name: string;
  /** 画像URL(公式アイコン優先)。画像がない場合は共有Iconのアイコン名 */
  icon: string;
};

const ICON = {
  typescript: { name: 'TypeScript', icon: cdn('typescript/typescript-original.svg') },
  nuxt: { name: 'Nuxt', icon: cdn('nuxtjs/nuxtjs-original.svg') },
  csharp: { name: 'C#', icon: cdn('csharp/csharp-original.svg') },
  dotnet: { name: '.NET', icon: cdn('dotnetcore/dotnetcore-original.svg') },
  python: { name: 'Python', icon: cdnBase('python/python-original.svg') },
  fastapi: { name: 'FastAPI', icon: cdn('fastapi/fastapi-original.svg') },
  flask: { name: 'Flask', icon: cdn('flask/flask-original.svg') },
  azure: { name: 'Azure', icon: cdn('azure/azure-original.svg') },
  azureSql: { name: 'Azure SQL', icon: cdn('azuresqldatabase/azuresqldatabase-original.svg') },
  githubActions: { name: 'GitHub Actions', icon: cdn('githubactions/githubactions-original.svg') },
  windows: { name: 'Windows', icon: cdn('windows8/windows8-original.svg') },
  javascript: { name: 'JavaScript', icon: cdnBase('javascript/javascript-original.svg') },
  django: { name: 'Django', icon: cdnBase('django/django-plain.svg') },
  pandas: { name: 'pandas', icon: cdnBase('pandas/pandas-original.svg') },
  sqlalchemy: { name: 'SQLAlchemy', icon: cdnBase('sqlalchemy/sqlalchemy-original.svg') },
  postgresql: { name: 'PostgreSQL', icon: cdnBase('postgresql/postgresql-original.svg') },
  redhat: { name: 'Red Hat', icon: cdn('redhat/redhat-plain-wordmark.svg') },
  anaconda: { name: 'Anaconda', icon: cdn('anaconda/anaconda-original.svg') },
  mysql: { name: 'MySQL', icon: cdnBase('mysql/mysql-original.svg') },
  aws: { name: 'AWS', icon: cdn('amazonwebservices/amazonwebservices-original-wordmark.svg') },
  ubuntu: { name: 'Ubuntu', icon: cdn('ubuntu/ubuntu-original.svg') },
  cplusplus: { name: 'C++', icon: cdnBase('cplusplus/cplusplus-original.svg') },
  sqlite: { name: 'SQLite', icon: cdnBase('sqlite/sqlite-original.svg') },
  docker: { name: 'Docker', icon: cdnBase('docker/docker-original.svg') },
  pytorch: { name: 'PyTorch', icon: cdnBase('pytorch/pytorch-original.svg') },
  mapbox: {
    name: 'Mapbox',
    icon: 'https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6050ac000ff99b5cdba92d07_mapbox_favicon_32x32%202.png',
  },
  openAi: { name: 'Azure OpenAI', icon: openAi },
  aiSearch: { name: 'AI Search', icon: aiSearch },
  speech: { name: 'Azure Speech', icon: speechService },
  webApp: { name: 'Azure Web App', icon: webApp },
  containerInstance: { name: 'Container Instances', icon: containerInstance },
} satisfies Record<string, Skill>;

export const PROCESS_STEPS = ['要件定義', '基本設計', '詳細設計', '実装', 'テスト', 'リリース', '運用保守'] as const;
export type ProcessStep = (typeof PROCESS_STEPS)[number];

export type Project = {
  /** `YYYY/MM — YYYY/MM` または `YYYY/MM — PRESENT` 形式 */
  period: string;
  phase?: string;
  /** 同じgroupのプロジェクトは1エントリーに統合され、フェーズタブで切り替え表示される */
  group?: string;
  title: string;
  tasks: string[];
  roles: string[];
  /** 担当した開発工程(開発案件以外は省略可) */
  processes?: ProcessStep[];
  skills: Skill[];
  /** Profileページの代表プロジェクトとして表示する */
  featured?: boolean;
};

export type Company = {
  name: string;
  /** URLパスで会社を指定するためのスラッグ(/history/[company]) */
  slug: string;
  period: string;
  role: string;
  /** 在籍中など強調表示する企業 */
  current?: boolean;
  projects: Project[];
};

type YearMonth = { year: number; month: number };

export type ParsedPeriod = {
  start: YearMonth | null;
  end: YearMonth | null;
  present: boolean;
};

const parseYearMonth = (value: string): YearMonth | null => {
  const matched = value.trim().match(/^(\d{4})\/(\d{1,2})$/);
  if (!matched) return null;
  return { year: Number(matched[1]), month: Number(matched[2]) };
};

export const parsePeriod = (period: string): ParsedPeriod => {
  const [rawStart, rawEnd] = period.split('—').map((s) => s?.trim());
  const start = rawStart ? parseYearMonth(rawStart) : null;
  const present = rawEnd?.toUpperCase() === 'PRESENT';
  const end = rawEnd && !present ? parseYearMonth(rawEnd) : null;
  return { start, end, present };
};

/** 期間の長さを月数で返す(両端を含む)。パース不能な場合は null */
export const periodMonths = (period: string, now = new Date()): number | null => {
  const { start, end, present } = parsePeriod(period);
  if (!start) return null;
  const endYm = present ? { year: now.getFullYear(), month: now.getMonth() + 1 } : end;
  if (!endYm) return null;
  const months = (endYm.year - start.year) * 12 + (endYm.month - start.month) + 1;
  return months > 0 ? months : null;
};

/** 終了時期の新しい順に並べたプロジェクト一覧(進行中が最上位、同時期は元の順を維持) */
export const projectsByEndDesc = (projects: Project[]): Project[] => {
  const endValue = (p: Project) => {
    const { start, end, present } = parsePeriod(p.period);
    if (present) return Number.MAX_SAFE_INTEGER;
    if (end) return end.year * 12 + end.month;
    return start ? start.year * 12 + start.month : 0;
  };
  return [...projects].sort((a, b) => endValue(b) - endValue(a));
};

export const companies: Company[] = [
  {
    name: '株式会社UNAIIT',
    slug: 'unaiit',
    period: '2024 — PRESENT',
    role: 'LEAD ENGINEER / PM',
    current: true,
    projects: [
      {
        period: '2026/07 — 2026/08',
        title: 'SAM3による建設現場ドメイン画像の対象物検出POC開発',
        tasks: [
          'SAM3（Segment Anything Model 3）を用いた建設現場ドメイン画像に対する対象物検出の実現可能性検証（POC）',
          'PythonおよびPyTorchによる検出パイプラインの実装・テスト',
          'Concept Bank関連論文の内容調査および論文実装による建設ドメイン特有の対象物への検出精度改善',
          '検証結果を資料にまとめ、先方へ報告',
        ],
        roles: ['SAM3・Concept Bank論文の調査・要約および実装', 'POC検証の実施、評価結果の資料作成・報告'],
        processes: ['詳細設計', '実装', 'テスト'],
        skills: [ICON.python, ICON.pytorch],
      },
      {
        period: '2026/06 — PRESENT',
        phase: 'PHASE 3',
        group: '建設会社実行予算アプリ',
        title: '建設会社実行予算アプリ 原価管理月報・月別支払内訳書モジュール開発',
        tasks: [
          '実行予算に対する実績原価の取込と予実対比を行う原価管理月報モジュールの要件定義',
          '工事台帳から月別支払内訳書を作成するモジュールの要件定義',
          '要件定義としての業務シナリオの整理',
          'AIコーディングによるモック作成と、モックを用いた先方との仕様イメージのすり合わせ',
          'Phase3全体のスケジュール策定と週次定例による先方との仕様調整',
        ],
        roles: [
          'プロダクトマネージャー（要件定義・スケジュール管理・進捗報告）',
          'AIコーディングによる実装・単体テスト',
          '開発メンバーへの仕様共有およびコードレビュー',
          '運用中アプリの保守対応（問い合わせ・不具合対応）',
        ],
        processes: ['要件定義', '基本設計', '詳細設計', '実装'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.azure,
          ICON.azureSql,
          ICON.webApp,
          ICON.githubActions,
        ],
      },
      {
        period: '2026/01 — 2026/09',
        phase: 'PHASE 2.5',
        group: '建設会社実行予算アプリ',
        title: '建設会社実行予算アプリ 実行予算明細入力アップデート・見積書更新対応',
        tasks: [
          '実行予算明細入力機能のアップデート（入力操作性・機能の改善）',
          '建築法令に基づいた見積書更新への対応',
          '単体テストの拡充によるテストカバレッジ向上',
          'ライブラリ更新に伴うDDDアーキテクチャへのリファクタリング',
          '既存機能への影響調査および回帰テスト',
        ],
        roles: [
          '更新要件の整理・仕様調整および開発メンバーへの共有',
          '共同開発者のコードレビュー・リードエンジニア',
          '運用中アプリの保守対応（問い合わせ・不具合対応）',
        ],
        processes: ['要件定義', '詳細設計', '実装', 'テスト', '運用保守'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.azure,
          ICON.azureSql,
          ICON.webApp,
          ICON.githubActions,
        ],
      },
      {
        period: '2025/05 — 2025/12',
        phase: 'PHASE 2',
        group: '建設会社実行予算アプリ',
        title: '建設会社実行予算アプリ 承認機能実装・AG Grid搭載',
        tasks: [
          '積算システムで作成した実行予算に対する上長承認機能と、Excelライクな入力操作の要件定義および要件定義書の作成',
          'Phase2におけるプロジェクトのスケジュール管理・進捗報告',
          '要件定義内容の詳細を開発メンバーと共有及びレビュー、またメイン機能の実装',
          'Azure Web Appのデプロイスロットと、Azure SQL Serverのスキーマによる論理分離を利用したテスト環境の構築',
        ],
        roles: [
          'プロダクトマネージャー（週次MTGによる要件定義・スケジュール管理）',
          '共同開発者のコードレビュー・リードエンジニア',
          'Azureクラウドのアーキテクチャ設計',
          'GitHub管理者、GitHub Actionsの設定およびCI/CDの整備',
        ],
        processes: ['要件定義', '基本設計', '実装', 'テスト'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.azure,
          ICON.azureSql,
          ICON.webApp,
          ICON.githubActions,
        ],
      },
      {
        period: '2024/04 — 2025/04',
        phase: 'PHASE 1',
        group: '建設会社実行予算アプリ',
        title: '建設会社実行予算アプリ開発',
        featured: true,
        tasks: [
          '積算システムからのデータを元に、実行予算を作成するアプリの開発',
          'Nuxt3によるフロントエンド開発（実行予算新規作成・編集、Entra ID認証機能の実装、マスタ管理画面、帳票出力）',
          '.NETによるDDDを意識したバックエンド開発（MediatRおよびDIによるクリーンアーキテクチャ採用、CRUD API設計・実装、Excel出力API実装）',
          'Azure環境の構築（Azure Web App, Azure VM, SQL Server）、Entra ID認証のためのエンタープライズアプリケーション登録',
        ],
        roles: ['共同開発者のコードレビュー・リードエンジニア', 'GitHub管理者、GitHub Actionsの設定およびCI/CDの整備'],
        processes: ['詳細設計', '実装', 'リリース'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.azure,
          ICON.azureSql,
          ICON.webApp,
          ICON.githubActions,
        ],
      },
      {
        period: '2024/09 — 2024/11',
        title: '化学メーカーの作業手順書RAGアプリ開発',
        tasks: [
          'Chroma DBによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIをVM上に開発',
          'Nuxt3および.NETによるRAG検索画面とユーザー管理画面の実装',
          'Azure環境の構築（Azure Web App, Azure VM, SQL Server, VNET関連）',
        ],
        roles: [
          'FastAPIとLangChainによるRAGバックエンド開発の詳細設計・実装作業',
          '共同開発者のコードレビュー・リードエンジニア',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
        processes: ['詳細設計', '実装', 'リリース'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.python,
          ICON.fastapi,
          ICON.azure,
          ICON.azureSql,
          ICON.webApp,
          ICON.openAi,
        ],
      },
      {
        period: '2024/07 — 2024/09',
        title: '自動車部品メーカーの作業手順書に対するRAGバックエンド開発',
        tasks: [
          'AI SearchによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIの開発',
          'プロンプト制御構文をDBに登録・更新・削除・取得するAPIの開発',
          '協力ベンダーとのAPI使用について協議・調整',
        ],
        roles: [
          'Flaskによるバックエンド開発の詳細設計・実装作業',
          '共同開発者のコードレビュー・リードエンジニア',
          '協力ベンダーとのAPI仕様調整、APIドキュメント作成、テスト仕様書作成',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
        processes: ['詳細設計', '実装', 'テスト', 'リリース'],
        skills: [ICON.python, ICON.flask, ICON.azure, ICON.azureSql, ICON.aiSearch, ICON.openAi, ICON.windows],
      },
      {
        period: '2024/02 — 2024/07',
        title: '特定地域を走行する車両の可視化サンプルアプリ開発（PoC案件）',
        tasks: [
          'Map box GL JSより車両データをマップ上に可視化アプリ実装',
          'Azureよるクラウドリソース設計とデプロイ環境構築・AzureのPrivate EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築',
          '3Dモデルの車両を時刻ごとにアニメーションとしてマップ上に表示',
        ],
        roles: [
          '車両データの可視化に向けた技術選定と設計およびNuxt3, .NETによるフルスタック実装',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
        processes: ['基本設計', '実装', 'リリース'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.mapbox,
          ICON.csharp,
          ICON.dotnet,
          ICON.azure,
          ICON.azureSql,
          ICON.windows,
        ],
      },
      {
        period: '2025/10 — 2026/01',
        phase: 'PHASE 2',
        group: '建設企業のマニュアルに対するRAG Chatアプリ',
        title: '建設企業のマニュアルに対するRAG Chatアプリ 議事録自動作成機能追加',
        featured: true,
        tasks: [
          '議事録音声をAzure Speech to Textにより文字起こしする機能の実装',
          'LLM（Azure OpenAI）による文字起こしテキストからの議事録自動作成機能の実装',
        ],
        roles: [
          '議事録自動作成機能の要件抽出および技術選定',
          'Nuxt3, .NETによるフルスタック実装',
          '先方との定例打合せ資料作成、開発状況説明',
        ],
        processes: ['要件定義', '詳細設計', '実装'],
        skills: [ICON.typescript, ICON.nuxt, ICON.csharp, ICON.dotnet, ICON.azure, ICON.speech, ICON.openAi],
      },
      {
        period: '2024/04 — 2024/07',
        phase: 'PHASE 1',
        group: '建設企業のマニュアルに対するRAG Chatアプリ',
        title: '建設企業のマニュアルに対するRAG Chatアプリ開発',
        tasks: [
          'Azure OpenAIとAI SearchによるRAG検索と生成AIチャットを連携したChatGPT系アプリの実装',
          'AzureのPrivate EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築',
          '利用ログの集計および可視化による運用監視機能の追加',
          'Google DriveとAzure Storage Blobとのファイル同期サーバーの構築',
        ],
        roles: [
          'RAGアプリ開発のクラウド技術選定と機能要件抽出および工数見積もり',
          'クラウド設計と機能詳細設計、Nuxt3, .NETによるフルスタック実装',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
        processes: ['要件定義', '基本設計', '詳細設計', '実装', 'リリース', '運用保守'],
        skills: [
          ICON.typescript,
          ICON.nuxt,
          ICON.csharp,
          ICON.dotnet,
          ICON.python,
          ICON.azure,
          ICON.azureSql,
          ICON.aiSearch,
          ICON.openAi,
          ICON.containerInstance,
          ICON.windows,
        ],
      },
    ],
  },
  {
    name: 'Laniakea株式会社',
    slug: 'laniakea',
    period: '2023 — 2024',
    role: 'BACKEND / PROJECT LEADER',
    projects: [
      {
        period: '2023/05 — 2024/01',
        title: '電力需要気象予測システム開発',
        tasks: [
          'Hierarchical Data Format(HDF)->PostgreSQLスクリプト作成',
          'Python環境(Ver. 3.10)のアップグレード',
          'SQLAlchemy, PandasによるPostgreSQL ORM関数の作成',
        ],
        roles: ['Python バックエンド開発', 'SQL操作API開発'],
        processes: ['詳細設計', '実装'],
        skills: [ICON.python, ICON.pandas, ICON.sqlalchemy, ICON.postgresql, ICON.redhat, ICON.anaconda],
      },
      {
        period: '2023/03 — 2024/05',
        title: '自動車整備工場 チャットボットアプリ開発',
        tasks: ['Bard Sentence, TFIDFによる文章類似度測定の実装', 'AWS(EC2, S3, RDS, SES)によるデプロイ環境構築'],
        roles: ['Python バックエンド開発', 'AWSクラウド環境構築開発', 'Project Leader、窓口業務'],
        processes: ['詳細設計', '実装', 'リリース'],
        skills: [ICON.python, ICON.javascript, ICON.django, ICON.pandas, ICON.mysql, ICON.aws, ICON.ubuntu],
      },
    ],
  },
  {
    name: '株式会社iPX',
    slug: 'ipx',
    period: '2022 — 2023',
    role: 'PYTHON / SIMULATION / ML',
    projects: [
      {
        period: '2022/06 — 2023/02',
        title: 'AGVシミュレータ（自社製品）の導入およびマップ要件機能の実装',
        tasks: [
          'AGVの搬送経路を計画するAGVシミュレータの要件定義',
          '要件定義に伴い既存シミュレータ改修内容の設計と実装',
          'Project 主エンジニア',
        ],
        roles: ['Pythonプログラマ', 'AGVシミュレータエンジン開発'],
        processes: ['要件定義', '詳細設計', '実装'],
        skills: [ICON.python, ICON.cplusplus, ICON.pandas, ICON.sqlite, ICON.docker, ICON.ubuntu],
      },
      {
        period: '2022/02 — 2022/05',
        title: 'Neural Architecture Searchによる物体検出ネットワークの画像分類学習器のゼロ学習探索',
        tasks: ['Neural Architecture Search論文内容の実装', '先方提供スクリプトへの追加実装'],
        roles: ['Neural Architecture Search論文内容調査・要約', '論文内容を実装、先方提供スクリプトへの追加実装'],
        processes: ['実装'],
        skills: [ICON.python, ICON.pytorch, ICON.sqlite, ICON.docker, ICON.ubuntu],
      },
    ],
  },
  {
    name: 'KIOXIA株式会社',
    slug: 'kioxia',
    period: '2021',
    role: 'PRODUCTION PLANNING',
    projects: [
      {
        period: '2021/09 — 2021/12',
        title: '企業向け試作SSDサンプルの生産計画立案と実行',
        tasks: [
          'SSD製造協業企業（台湾法人）と生産計画の打ち合わせ',
          '社内客先担当とSSD製造協業企業との試作スケジュールの折衝',
        ],
        roles: ['SSD生産管理担当', 'パートナー企業との折衝'],
        skills: [],
      },
    ],
  },
  {
    name: '住友電気工業株式会社',
    slug: 'sumitomo-electric',
    period: '2019 — 2021',
    role: 'R&D / MATERIALS ENGINEER',
    projects: [
      {
        period: '2019/04 — 2021/08',
        title: '自動車部品に使われる鉄鋼系材料を研削する研削砥粒の開発',
        tasks: [
          '鉄鋼系材料に対する砥粒の摩耗要因を調査、課題を克服する新砥粒の仕様を選定',
          '開発砥粒の耐摩耗性評価。評価結果から砥粒の研削性能を解析しフィードバック',
          '協業、顧客との社内・社外評価の打ち合わせ・報告',
        ],
        roles: ['研削用砥石研究開発', 'マシニングセンタ技術者', '電気メッキ、無電解メッキ技術者'],
        skills: [],
      },
    ],
  },
];

const allProjects = companies.flatMap((c) => c.projects);
const parsedPeriods = allProjects.map((p) => parsePeriod(p.period));

const startYears = parsedPeriods.filter((p) => p.start).map((p) => p.start!.year);
const latestEnd = parsedPeriods
  .filter((p) => p.end)
  .map((p) => p.end!)
  .sort((a, b) => b.year * 12 + b.month - (a.year * 12 + a.month))[0];

export const historyStats = {
  projectCount: allProjects.length,
  companyCount: companies.length,
  sinceYear: startYears.length ? Math.min(...startYears) : null,
  updated: latestEnd ? `${latestEnd.year}.${String(latestEnd.month).padStart(2, '0')}` : null,
};
