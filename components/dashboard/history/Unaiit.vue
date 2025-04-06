<script setup lang="ts">
import openAi from '/Icons/ai + machine learning/03438-icon-service-Azure-OpenAI.svg';
import aiSearch from '/Icons/ai + machine learning/10044-icon-service-Cognitive-Search.svg';
import webApp from '/Icons/web/10035-icon-service-App-Services.svg'
import containerInstance from '/Icons/containers/10104-icon-service-Container-Instances.svg';
</script>

<template>
  <SharedUIParentCard title="株式会社UNAIIT">
    <VRow>
      <!-- Resume2 -->
      <VCol cols="12" lg="6">
        <div class="px-4 py-2">
          <!-- Resume1 -->
          <div class="">
            <span class="text-body-2">2024/04~2025/04</span>
            <h5 class="h5">建設会社実行予算アプリ開発(Phase1)</h5>
            <div class="pa-2">
              <div class="d-flex text-primary align-center">
                <CheckboxIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Task</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular">
                  ・積算システムからのデータを元に、実行予算を作成するアプリの開発
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Nuxt3によるフロントエンド開発（実行予算新規作成・編集、Entra ID認証機能の実装、マスタ管理画面、帳票出力）
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・.NETによるDDDを意識したバックエンド開発（MediatRおよびDIによるクリーンアーキテクチャ採用、CRUD API設計・実装、Excel出力API実装）
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Azure環境の構築（Azure Web App, Azure VM, SQL Server）、Entra ID認証のためエンタープライズアプリ登録
                </VListItem>
              </VList>

              <div class="d-flex text-success align-center">
                <UserIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Role</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular"
                  >・共同開発者のコードレビュー・リードエンジニア</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・Github管理者、Github Actionsの設定およびCI/CD整理</VListItem
                >
              </VList>

              <div class="d-flex text-error align-center">
                <CodeIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Skill</h5>
              </div>
              <div class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  height="32"
                />
                <img :src="webApp" height="32" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" height="32" />
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- Resume2 -->
      <VCol cols="12" lg="6">
        <div class="px-4 py-2">
          <!-- Resume1 -->
          <div class="">
            <span class="text-body-2">2024/09~2024/11</span>
            <h5 class="h5">化学メーカーの作業手順書RAGアプリ開発</h5>
            <div class="pa-2">
              <div class="d-flex text-primary align-center">
                <CheckboxIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Task</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular">
                  ・Chroma DBによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIをVM上に開発
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Nuxt3および.NETによるRAG検索画面とユーザー管理画面の実装
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Azure環境の構築（Azure Web App, Azure VM, SQL Server, VNET関連）
                </VListItem>
              </VList>

              <div class="d-flex text-success align-center">
                <UserIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Role</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular"
                  >・FastAPIとlangchainによるRAGバックエンド開発の詳細設計・実装作業</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・共同開発者のコードレビュー・リードエンジニア</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・先方との定例打合せ資料作成、開発状況説明、納品作業まで</VListItem
                >
              </VList>

              <div class="d-flex text-error align-center">
                <CodeIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Skill</h5>
              </div>
              <div class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  height="32"
                />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" height="32" />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  height="32"
                />
                <img :src="webApp" height="32" />
                <img :src="openAi" height="32" />
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- Resume2 -->
      <VCol cols="12" lg="6">
        <div class="px-4 py-2">
          <!-- Resume1 -->
          <div class="">
            <span class="text-body-2">2024/07~2024/09</span>
            <h5 class="h5">自動車部品メーカーの作業手順書に対するRAGバックエンド開発</h5>
            <div class="pa-2">
              <div class="d-flex text-primary align-center">
                <CheckboxIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Task</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular">
                  ・AI SearchによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIの開発
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・プロンプト制御構文をDBに登録・更新・削除・取得するAPIの開発
                </VListItem>
                <VListItem class="text-h6 font-weight-regular"> ・協力ベンダーとのAPI使用について協議・調整 </VListItem>
              </VList>

              <div class="d-flex text-success align-center">
                <UserIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Role</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular"
                  >・Flaskによるバックエンド開発の詳細設計・実装作業</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・共同開発者のコードレビュー・リードエンジニア</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・協力ベンダーとのAPI仕様調整、APIドキュメント作成、テスト仕様書作成</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・先方との定例打合せ資料作成、開発状況説明、納品作業まで</VListItem
                >
              </VList>

              <div class="d-flex text-error align-center">
                <CodeIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Skill</h5>
              </div>
              <div class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
                  height="32"
                />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  height="32"
                />
                <img :src="aiSearch" height="32" />
                <img :src="openAi" height="32" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
                  height="32"
                />
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- Resume2 -->
      <VCol cols="12" lg="6">
        <div class="px-4 py-2">
          <!-- Resume1 -->
          <div class="">
            <span class="text-body-2">2024/04~2024/07</span>
            <h5 class="h5">建設企業のマニュアルに対するRAG Chatアプリ開発</h5>
            <div class="pa-2">
              <div class="d-flex text-primary align-center">
                <CheckboxIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Task</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular">
                  ・Azure Open AIとAI SearchによるRAG検索および生成AIによるチャットを連携したChatGPT系アプリ実装
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・AzureのPrivate EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・利用ログの集計および可視化による運用監視機能の追加
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Google DriveとAzure Storage Blobとのファイル同期サーバーの構築
                </VListItem>
              </VList>

              <div class="d-flex text-success align-center">
                <UserIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Role</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular"
                  >・RAGアプリ開発のクラウド技術選定と機能要件抽出および工数見積もり</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・クラウド設計と機能詳細設計、Nuxt3, .NETによるフルスタック実装</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・先方との定例打合せ資料作成、開発状況説明、納品作業まで</VListItem
                >
              </VList>

              <div class="d-flex text-error align-center">
                <CodeIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Skill</h5>
              </div>
              <div class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  height="32"
                />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />

                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  height="32"
                />
                <img :src="aiSearch" height="32" />
                <img :src="openAi" height="32" />
                <img :src="containerInstance" height="32" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
                  height="32"
                />
              </div>
            </div>
          </div>
        </div>
      </VCol>
      <!-- Resume1 -->
      <VCol cols="12" lg="6">
        <div class="px-4 py-2">
          <!-- Resume1 -->
          <div class="">
            <span class="text-body-2">2024/02~2024/07</span>
            <h5 class="h5">特定地域を走行する車両の可視化サンプルアプリ開発（PoC案件）</h5>
            <div class="pa-2">
              <div class="d-flex text-primary align-center">
                <CheckboxIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Task</h5>
              </div>
              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular">
                  ・Map box GL JSより車両データをマップ上に可視化アプリ実装
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・Azureよるクラウドリソース設計とデプロイ環境構築・AzureのPrivate
                  EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築
                </VListItem>
                <VListItem class="text-h6 font-weight-regular">
                  ・3Dモデルの車両を時刻ごとにアニメーションとしてマップ上に表示
                </VListItem>
              </VList>

              <div class="d-flex text-success align-center">
                <UserIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Role</h5>
              </div>

              <VList density="compact">
                <VListItem class="text-h6 font-weight-regular"
                  >・車両データの可視化に向けた技術選定と設計およびNuxt3, .NETによるフルスタック実装</VListItem
                >
                <VListItem class="text-h6 font-weight-regular"
                  >・先方との定例打合せ資料作成、開発状況説明、納品作業まで</VListItem
                >
              </VList>

              <div class="d-flex text-error align-center">
                <CodeIcon class="mr-2" width="24" height="24" />
                <h5 class="h4">Skill</h5>
              </div>
              <div class="d-flex my-4 mx-auto justify-center align-center overflow-hidden ga-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                  height="32"
                />
                <img
                  src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6050ac000ff99b5cdba92d07_mapbox_favicon_32x32%202.png"
                  alt="Mapbox Favicon"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  height="32"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
                  height="32"
                />
              </div>
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
  </SharedUIParentCard>
</template>
