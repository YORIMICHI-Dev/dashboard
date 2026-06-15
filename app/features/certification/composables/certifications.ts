export type CertLevel =
  | 'EXPERT'
  | 'ASSOCIATE'
  | 'FUNDAMENTALS'
  | 'FOUNDATIONAL'
  | 'LEVEL 1'
  | 'SILVER';

export type Cert = {
  /** 認定コード（例: AZ-305）。コードを持たない資格は省略 */
  code?: string;
  /** 資格名 */
  name: string;
  /** 取得年月 */
  date: string;
  /** 認定レベル（資格名に含まれる公式区分のみ。無い場合は省略） */
  level?: CertLevel;
};

export type CertGroup = {
  category: string;
  /** セクション右上のモノスペースラベル */
  label: string;
  certs: Cert[];
};

export const certGroups: CertGroup[] = [
  {
    category: 'Microsoft Azure 認定',
    label: 'CLOUD CERTIFICATIONS',
    certs: [
      { code: 'AZ-305', name: 'Azure Infrastructure Solutions', date: '2025/04', level: 'EXPERT' },
      { code: 'AZ-104', name: 'Azure Administrator Associate', date: '2024/09', level: 'ASSOCIATE' },
      { code: 'AZ-204', name: 'Azure Developer Associate', date: '2024/07', level: 'ASSOCIATE' },
      { code: 'DP-900', name: 'Azure Data Fundamentals', date: '2024/04', level: 'FUNDAMENTALS' },
      { code: 'AI-900', name: 'Azure AI Fundamentals', date: '2024/04', level: 'FUNDAMENTALS' },
      { code: 'AZ-900', name: 'Azure Fundamentals', date: '2024/03', level: 'FUNDAMENTALS' },
    ],
  },
  {
    category: 'AWS 認定',
    label: 'CLOUD CERTIFICATIONS',
    certs: [
      {
        code: 'SAA-C03',
        name: 'AWS Certified Solutions Architect - Associate',
        date: '2023/05',
        level: 'ASSOCIATE',
      },
      {
        code: 'CLF-C01',
        name: 'AWS Certified Cloud Practitioner',
        date: '2023/04',
        level: 'FOUNDATIONAL',
      },
    ],
  },
  {
    category: '情報処理技術者試験',
    label: 'NATIONAL EXAMS',
    certs: [
      { name: '情報セキュリティマネジメント試験', date: '2025/07' },
      { name: '応用情報技術者試験', date: '2023/12' },
      { name: '基本情報技術者試験', date: '2022/07' },
    ],
  },
  {
    category: 'ディープラーニング協会',
    label: 'AI / ML',
    certs: [
      { name: 'Generative AI Test', date: '2024/06' },
      { name: 'G検定', date: '2024/03' },
    ],
  },
  {
    category: 'LPIC',
    label: 'LINUX',
    certs: [{ name: 'LPIC Level-1', date: '2023/08', level: 'LEVEL 1' }],
  },
  {
    category: 'Oracle 資格',
    label: 'JAVA',
    certs: [{ name: 'Java SE 11 Programmer I (Java Silver)', date: '2022/01', level: 'SILVER' }],
  },
];
