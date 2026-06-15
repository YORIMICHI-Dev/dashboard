<script setup lang="ts">
import SharedUIParentCard from '~/features/@shared/components/UIParentCard.vue';
import DashboardCertification from './CertificationItem.vue';
</script>

<template>
  <div class="grid grid-cols-12 gap-6">
    <!-- Microsoft Azure -->
    <div class="col-span-12">
      <SharedUIParentCard title="Microsoft Azure認定">
        <div class="grid grid-cols-12 gap-6 p-4">
          <div class="col-span-12 lg:col-span-6">
            <DashboardCertification day="2025/04" certification="Azure Infrastructure Solutions (AZ-305)" />
            <DashboardCertification day="2024/07" certification="Azure Developer Associate (AZ-204)" />
            <DashboardCertification day="2024/04" certification="Azure AI Fundamentals (AI-900)" />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <DashboardCertification day="2024/09" certification="Azure Administrator Associate (AZ-104)" />
            <DashboardCertification day="2024/04" certification="Azure Data Fundamentals (DP-900)" />
            <DashboardCertification day="2024/03" certification="Azure Fundamentals (AZ-900)" />
          </div>
        </div>
      </SharedUIParentCard>
    </div>

    <!-- AWS -->
    <div class="col-span-12 lg:col-span-8">
      <SharedUIParentCard title="AWS認定">
        <div class="p-4">
          <DashboardCertification
            day="2023/05"
            certification="AWS Certified Solutions Architect - Associate (SAA-C03)"
          />
          <DashboardCertification day="2023/04" certification="AWS Certified Cloud Practitioner (CLF-C01)" />
        </div>
      </SharedUIParentCard>
    </div>

    <!-- 情報処理技術者試験 -->
    <div class="col-span-12 lg:col-span-4">
      <SharedUIParentCard title="情報処理技術者試験">
        <div class="p-4">
          <DashboardCertification day="2025/07" certification="情報セキュリティマネジメント試験" />
          <DashboardCertification day="2023/12" certification="応用情報技術者試験" />
          <DashboardCertification day="2022/07" certification="基本情報技術者試験" />
        </div>
      </SharedUIParentCard>
    </div>

    <!-- ディープラーニング協会 -->
    <div class="col-span-12 lg:col-span-4">
      <SharedUIParentCard title="ディープラーニング協会">
        <div class="p-4">
          <DashboardCertification day="2024/06" certification="Generative AI Test" />
          <DashboardCertification day="2024/03" certification="G検定" />
        </div>
      </SharedUIParentCard>
    </div>

    <!-- LPIC -->
    <div class="col-span-12 lg:col-span-4">
      <SharedUIParentCard title="LPIC">
        <div class="p-4">
          <DashboardCertification day="2023/08" certification="LPIC Level-1" />
        </div>
      </SharedUIParentCard>
    </div>

    <!-- Oracle -->
    <div class="col-span-12 lg:col-span-4">
      <SharedUIParentCard title="Oracle資格">
        <div class="p-4">
          <DashboardCertification day="2022/01" certification="Java SE 11 Programmer I (Java Silver)" />
        </div>
      </SharedUIParentCard>
    </div>
  </div>
</template>
