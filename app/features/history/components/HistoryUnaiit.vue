<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
import openAi from '/Icons/ai + machine learning/03438-icon-service-Azure-OpenAI.svg';
import aiSearch from '/Icons/ai + machine learning/10044-icon-service-Cognitive-Search.svg';
import webApp from '/Icons/web/10035-icon-service-App-Services.svg';
import containerInstance from '/Icons/containers/10104-icon-service-Container-Instances.svg';
</script>

<template>
  <SharedUIParentCard title="株式会社UNAIIT">
    <div class="grid grid-cols-12 gap-6">
      <!-- Project: Phase2 -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/04~2025/04</span>
          <h5 class="text-lg font-semibold">建設会社実行予算アプリ 承認機能実装・AG Grid搭載(Phase2)</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">
                ・積算システムにて編集者が作成した実行予算の上長承認機能開発およびExcelライク操作の要件定義および要件定義書作成
              </li>
              <li class="text-lg font-normal">・Phase2におけるプロジェクトのスケジュール管理・進捗報告</li>
              <li class="text-lg font-normal">
                ・要件定義内容の詳細を開発メンバーと共有及びレビュー、またメイン機能の実装
              </li>
              <li class="text-lg font-normal">
                ・Azure環境の構築にAzure Web Appのテストスロットデプロイ、Azure SQL Serverのスキーマによる論理分離によるテスト環境作成
              </li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・プロダクトマネージャー（週次MTGによる要件定義・スケジュール管理）</li>
              <li class="text-lg font-normal">・共同開発者のコードレビュー・リードエンジニア</li>
              <li class="text-lg font-normal">・Azureクラウドのアーキテクチャ設計</li>
              <li class="text-lg font-normal">・Github管理者、Github Actionsの設定およびCI/CD整理</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img :src="webApp" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- Project: Phase1 -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/04~2025/04</span>
          <h5 class="text-lg font-semibold">建設会社実行予算アプリ開発(Phase1)</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・積算システムからのデータを元に、実行予算を作成するアプリの開発</li>
              <li class="text-lg font-normal">
                ・Nuxt3によるフロントエンド開発（実行予算新規作成・編集、Entra ID認証機能の実装、マスタ管理画面、帳票出力）
              </li>
              <li class="text-lg font-normal">
                ・.NETによるDDDを意識したバックエンド開発（MediatRおよびDIによるクリーンアーキテクチャ採用、CRUD API設計・実装、Excel出力API実装）
              </li>
              <li class="text-lg font-normal">
                ・Azure環境の構築（Azure Web App, Azure VM, SQL Server）、Entra ID認証のためエンタープライズアプリ登録
              </li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・共同開発者のコードレビュー・リードエンジニア</li>
              <li class="text-lg font-normal">・Github管理者、Github Actionsの設定およびCI/CD整理</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img :src="webApp" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- Project: 化学メーカーRAG -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/09~2024/11</span>
          <h5 class="text-lg font-semibold">化学メーカーの作業手順書RAGアプリ開発</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">
                ・Chroma DBによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIをVM上に開発
              </li>
              <li class="text-lg font-normal">・Nuxt3および.NETによるRAG検索画面とユーザー管理画面の実装</li>
              <li class="text-lg font-normal">・Azure環境の構築（Azure Web App, Azure VM, SQL Server, VNET関連）</li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・FastAPIとlangchainによるRAGバックエンド開発の詳細設計・実装作業</li>
              <li class="text-lg font-normal">・共同開発者のコードレビュー・リードエンジニア</li>
              <li class="text-lg font-normal">・先方との定例打合せ資料作成、開発状況説明、納品作業まで</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img :src="webApp" height="32" />
              <img :src="openAi" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- Project: 自動車部品RAG -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/07~2024/09</span>
          <h5 class="text-lg font-semibold">自動車部品メーカーの作業手順書に対するRAGバックエンド開発</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">
                ・AI SearchによるRAG検索に使用する文書の登録・更新・削除・チャンク取得APIの開発
              </li>
              <li class="text-lg font-normal">・プロンプト制御構文をDBに登録・更新・削除・取得するAPIの開発</li>
              <li class="text-lg font-normal">・協力ベンダーとのAPI使用について協議・調整</li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・Flaskによるバックエンド開発の詳細設計・実装作業</li>
              <li class="text-lg font-normal">・共同開発者のコードレビュー・リードエンジニア</li>
              <li class="text-lg font-normal">・協力ベンダーとのAPI仕様調整、APIドキュメント作成、テスト仕様書作成</li>
              <li class="text-lg font-normal">・先方との定例打合せ資料作成、開発状況説明、納品作業まで</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img :src="aiSearch" height="32" />
              <img :src="openAi" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- Project: 建設RAG Chat -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/04~2024/07</span>
          <h5 class="text-lg font-semibold">建設企業のマニュアルに対するRAG Chatアプリ開発</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">
                ・Azure Open AIとAI SearchによるRAG検索および生成AIによるチャットを連携したChatGPT系アプリ実装
              </li>
              <li class="text-lg font-normal">
                ・AzureのPrivate EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築
              </li>
              <li class="text-lg font-normal">・利用ログの集計および可視化による運用監視機能の追加</li>
              <li class="text-lg font-normal">・Google DriveとAzure Storage Blobとのファイル同期サーバーの構築</li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・RAGアプリ開発のクラウド技術選定と機能要件抽出および工数見積もり</li>
              <li class="text-lg font-normal">・クラウド設計と機能詳細設計、Nuxt3, .NETによるフルスタック実装</li>
              <li class="text-lg font-normal">・先方との定例打合せ資料作成、開発状況説明、納品作業まで</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img :src="aiSearch" height="32" />
              <img :src="openAi" height="32" />
              <img :src="containerInstance" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>

      <!-- Project: 車両可視化 PoC -->
      <div class="col-span-12 lg:col-span-6">
        <div class="px-4 py-2">
          <span class="text-sm">2024/02~2024/07</span>
          <h5 class="text-lg font-semibold">特定地域を走行する車両の可視化サンプルアプリ開発（PoC案件）</h5>
          <div class="p-2">
            <div class="flex text-primary items-center">
              <UIcon name="i-tabler-checkbox" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Task</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・Map box GL JSより車両データをマップ上に可視化アプリ実装</li>
              <li class="text-lg font-normal">
                ・Azureよるクラウドリソース設計とデプロイ環境構築・AzureのPrivate
                EndpointとVNet統合を利用した閉域化クラウドリソース設計とデプロイ環境構築
              </li>
              <li class="text-lg font-normal">・3Dモデルの車両を時刻ごとにアニメーションとしてマップ上に表示</li>
            </ul>

            <div class="flex text-success items-center">
              <UIcon name="i-tabler-user" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Role</h5>
            </div>
            <ul>
              <li class="text-lg font-normal">・車両データの可視化に向けた技術選定と設計およびNuxt3, .NETによるフルスタック実装</li>
              <li class="text-lg font-normal">・先方との定例打合せ資料作成、開発状況説明、納品作業まで</li>
            </ul>

            <div class="flex text-error items-center">
              <UIcon name="i-tabler-code" class="size-6 mr-2" />
              <h5 class="text-xl font-semibold">Skill</h5>
            </div>
            <div class="flex my-4 mx-auto justify-center items-center overflow-hidden gap-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" height="32" />
              <img src="https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6050ac000ff99b5cdba92d07_mapbox_favicon_32x32%202.png" alt="Mapbox" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" height="32" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" height="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </SharedUIParentCard>
</template>
