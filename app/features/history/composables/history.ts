import openAi from '/Icons/ai + machine learning/03438-icon-service-Azure-OpenAI.svg';
import aiSearch from '/Icons/ai + machine learning/10044-icon-service-Cognitive-Search.svg';
import webApp from '/Icons/web/10035-icon-service-App-Services.svg';
import containerInstance from '/Icons/containers/10104-icon-service-Container-Instances.svg';

const cdn = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`;
const cdnBase = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`;

const ICON = {
  typescript: cdn('typescript/typescript-original.svg'),
  nuxt: cdn('nuxtjs/nuxtjs-original.svg'),
  csharp: cdn('csharp/csharp-original.svg'),
  dotnet: cdn('dotnetcore/dotnetcore-original.svg'),
  python: cdnBase('python/python-original.svg'),
  fastapi: cdn('fastapi/fastapi-original.svg'),
  flask: cdn('flask/flask-original.svg'),
  azure: cdn('azure/azure-original.svg'),
  azureSql: cdn('azuresqldatabase/azuresqldatabase-original.svg'),
  githubActions: cdn('githubactions/githubactions-original.svg'),
  windows: cdn('windows8/windows8-original.svg'),
  javascript: cdnBase('javascript/javascript-original.svg'),
  django: cdnBase('django/django-plain.svg'),
  pandas: cdnBase('pandas/pandas-original.svg'),
  sqlalchemy: cdnBase('sqlalchemy/sqlalchemy-original.svg'),
  postgresql: cdnBase('postgresql/postgresql-original.svg'),
  redhat: cdn('redhat/redhat-plain-wordmark.svg'),
  anaconda: cdn('anaconda/anaconda-original.svg'),
  mysql: cdnBase('mysql/mysql-original.svg'),
  aws: cdn('amazonwebservices/amazonwebservices-original-wordmark.svg'),
  ubuntu: cdn('ubuntu/ubuntu-original.svg'),
  cplusplus: cdnBase('cplusplus/cplusplus-original.svg'),
  sqlite: cdnBase('sqlite/sqlite-original.svg'),
  docker: cdnBase('docker/docker-original.svg'),
  pytorch: cdnBase('pytorch/pytorch-original.svg'),
  mapbox:
    'https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6050ac000ff99b5cdba92d07_mapbox_favicon_32x32%202.png',
  openAi,
  aiSearch,
  webApp,
  containerInstance,
};

export type Project = {
  period: string;
  phase?: string;
  title: string;
  tasks: string[];
  roles: string[];
  skills: string[];
};

export type Company = {
  name: string;
  period: string;
  role: string;
  /** 在籍中など強調表示する企業 */
  current?: boolean;
  projects: Project[];
};

export const companies: Company[] = [
  {
    name: '株式会社UNAIIT',
    period: '2024 — PRESENT',
    role: 'LEAD ENGINEER / PM',
    current: true,
    projects: [
      {
        period: '2024/04 — 2025/04',
        phase: 'PHASE 2',
        title: '建設会社実行予算アプリ 承認機能実装・AG Grid搭載',
        tasks: [
          '積算システムにて編集者が作成した実行予算の上長承認機能開発およびExcelライク操作の要件定義および要件定義書作成',
          'Phase2におけるプロジェクトのスケジュール管理・進捗報告',
          '要件定義内容の詳細を開発メンバーと共有及びレビュー、またメイン機能の実装',
          'Azure環境の構築にAzure Web Appのテストスロットデプロイ、Azure SQL Serverのスキーマによる論理分離によるテスト環境作成',
        ],
        roles: [
          'プロダクトマネージャー（週次MTGによる要件定義・スケジュール管理）',
          '共同開発者のコードレビュー・リードエンジニア',
          'Azureクラウドのアーキテクチャ設計',
          'Github管理者、Github Actionsの設定およびCI/CD整理',
        ],
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
        title: '建設会社実行予算アプリ開発',
        tasks: [
          '積算システムからのデータを元に、実行予算を作成するアプリの開発',
          'Nuxt3によるフロントエンド開発（実行予算新規作成・編集、Entra ID認証機能の実装、マスタ管理画面、帳票出力）',
          '.NETによるDDDを意識したバックエンド開発（MediatRおよびDIによるクリーンアーキテクチャ採用、CRUD API設計・実装、Excel出力API実装）',
          'Azure環境の構築（Azure Web App, Azure VM, SQL Server）、Entra ID認証のためエンタープライズアプリ登録',
        ],
        roles: ['共同開発者のコードレビュー・リードエンジニア', 'Github管理者、Github Actionsの設定およびCI/CD整理'],
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
          'FastAPIとlangchainによるRAGバックエンド開発の詳細設計・実装作業',
          '共同開発者のコードレビュー・リードエンジニア',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
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
        skills: [ICON.python, ICON.flask, ICON.azure, ICON.azureSql, ICON.aiSearch, ICON.openAi, ICON.windows],
      },
      {
        period: '2024/04 — 2024/07',
        title: '建設企業のマニュアルに対するRAG Chatアプリ開発',
        tasks: [
          'Azure Open AIとAI SearchによるRAG検索および生成AIによるチャットを連携したChatGPT系アプリ実装',
          'AzureのPrivate EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築',
          '利用ログの集計および可視化による運用監視機能の追加',
          'Google DriveとAzure Storage Blobとのファイル同期サーバーの構築',
        ],
        roles: [
          'RAGアプリ開発のクラウド技術選定と機能要件抽出および工数見積もり',
          'クラウド設計と機能詳細設計、Nuxt3, .NETによるフルスタック実装',
          '先方との定例打合せ資料作成、開発状況説明、納品作業まで',
        ],
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
    ],
  },
  {
    name: 'Laniakea株式会社',
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
        skills: [ICON.python, ICON.pandas, ICON.sqlalchemy, ICON.postgresql, ICON.redhat, ICON.anaconda],
      },
      {
        period: '2023/03 — 2024/05',
        title: '自動車整備工場 チャットボットアプリ開発',
        tasks: ['Bard Sentence, TFIDFによる文章類似度測定の実装', 'AWS(ES2, S3, RDB, SES)によるデプロイ環境構築'],
        roles: ['Python バックエンド開発', 'AWSクラウド環境構築開発', 'Project Leader、窓口業務'],
        skills: [ICON.python, ICON.javascript, ICON.django, ICON.pandas, ICON.mysql, ICON.aws, ICON.ubuntu],
      },
    ],
  },
  {
    name: '株式会社iPX',
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
        skills: [ICON.python, ICON.cplusplus, ICON.pandas, ICON.sqlite, ICON.docker, ICON.ubuntu],
      },
      {
        period: '2022/02 — 2022/05',
        title: 'Neutral Architecture Searchによる物体検出ネットワークの画像分類学習器のゼロ学習探索',
        tasks: ['Neutoral Architecture Search論文内容の実装', '先方提供スクリプトへの追加実装'],
        roles: ['Neutoral Architecture Search論文内容調査・要約', '論文内容を実装、先方提供スクリプトへの追加実装'],
        skills: [ICON.python, ICON.pytorch, ICON.sqlite, ICON.docker, ICON.ubuntu],
      },
    ],
  },
  {
    name: 'KIOXIA株式会社',
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
